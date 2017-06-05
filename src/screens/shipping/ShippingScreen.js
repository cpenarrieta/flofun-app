import React, { Component } from 'react'
import { View, StatusBar, Text } from 'react-native'
import { MapView } from 'expo'
import { FontAwesome } from '@expo/vector-icons'
import { connect } from 'react-redux'

import Footer from '../../commons/Footer'
import HeaderStack from '../../commons/HeaderStack'
import LoadingScreen from '../../commons/LoadingScreen'
import styles from './styles/ShippingScreen'
import Colors from '../../../constants/colors'
import { getAddress } from '../../../constants/api'
import {
  changeAddress as changeAddressAction,
  changeCurrentPosition as changeCurrentPositionAction,
  changeMarkerPosition as changeMarkerPositionAction,
  changeAddressAndMarkerPosition as changeAddressAndMarkerPositionAction,
} from './actions'

@connect(
  state => ({
    shippingAddress: state.shipping.shippingAddress,
    currentPosition: state.shipping.currentPosition,
    markerPosition: state.shipping.markerPosition,
  }),
  {
    changeAddress: changeAddressAction,
    changeCurrentPosition: changeCurrentPositionAction,
    changeMarkerPosition: changeMarkerPositionAction,
    changeAddressAndMarkerPosition: changeAddressAndMarkerPositionAction,
  }
)
export default class ShippingScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'flofun',
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <FontAwesome
        name="map-marker"
        size={20}
        color={tintColor}
      />
    ),
    ...HeaderStack(navigation, { hideBack: true }),
  })

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const { latitude, longitude } = coords
        this.props.changeCurrentPosition({ latitude, longitude })
      },
      (error) => console.log(JSON.stringify(error)), // eslint-disable-line
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    )
  }

  renderRegion({ latitude, longitude, latitudeDelta, longitudeDelta }, currLatitude, currLon) {
    const diffLat = Math.abs(currLatitude - latitude)
    const diffLon = Math.abs(currLon - longitude)

    if (this.props.markerPosition && currLatitude && (diffLat > 1 || diffLon > 1)) return

    this.props.changeMarkerPosition({ latitude, longitude, latitudeDelta, longitudeDelta })
  }

  async renderAddress({ latitude, longitude }) {
    const address = await getAddress(latitude, longitude)
    if (address) {
      this.props.changeAddress({ address, latitude, longitude })
    }
  }

  render() {
    const { currentPosition, markerPosition, shippingAddress, navigation } = this.props
    const delta = markerPosition ? markerPosition.latitudeDelta : 0.04817888134680715

    if (!currentPosition) {
      return <LoadingScreen />
    }

    const leftContainer = (
      <Text style={styles.addressText}>{shippingAddress.address}</Text>
    )

    let marker = null
    if (markerPosition) {
      marker = (
        <MapView.Marker
          coordinate={markerPosition}
          pinColor={Colors.purpleDarkColor}
        />
      )
    } else if (currentPosition) {
      marker = (
        <MapView.Marker
          coordinate={currentPosition}
          pinColor={Colors.purpleDarkColor}
        />
      )
    }

    return (
      <View style={styles.root}>
        <StatusBar barStyle="light-content" />
        <MapView
          style={styles.mapView}
          initialRegion={{
            latitude: currentPosition.latitude,
            longitude: currentPosition.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          onRegionChange={(coords) => this.renderRegion(coords, currentPosition.latitude, currentPosition.longitude)}
          onRegionChangeComplete={(coords) => this.renderAddress(coords)}
        >
          {currentPosition && (
            <MapView.Circle
              key={`${currentPosition.longitude}${currentPosition.latitude}${delta}_1`}
              center={currentPosition}
              radius={3900 * delta}
              strokeColor={'transparent'}
              fillColor={'rgba(112,185,213,0.30)'}
            />
          )}
          {currentPosition && (
            <MapView.Circle
              key={`${currentPosition.longitude}${currentPosition.latitude}${delta}_2`}
              center={currentPosition}
              radius={1300 * delta}
              strokeColor={'transparent'}
              fillColor={'#3594BC'}
            />
          )}
          {marker}
        </MapView>
        <Footer
          nextCallback={() => navigation.navigate('FlowerShop')}
          leftContainer={leftContainer}
        />
      </View>
    )
  }
}
