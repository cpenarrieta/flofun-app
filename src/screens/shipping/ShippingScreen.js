import React, { Component } from 'react'
import { View, StatusBar, Text } from 'react-native'
import { MapView } from 'expo'
import { FontAwesome } from '@expo/vector-icons'

import Footer from '../../commons/Footer'
import HeaderStack from '../../commons/HeaderStack'
import LoadingScreen from '../../commons/LoadingScreen'
import styles from './styles/ShippingScreen'
import Colors from '../../../constants/colors'
import { getAddress } from '../../../constants/api'

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

  state = {
    currentPosition: undefined,
    markerPosition: undefined,
    address: '',
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const { latitude, longitude } = coords
        this.setState({
          currentPosition: {
            latitude,
            longitude,
          },
        })
      },
      (error) => console.log(JSON.stringify(error)), // eslint-disable-line
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    )
  }

  renderRegion({ latitude, longitude, latitudeDelta, longitudeDelta }, currLatitude) {
    if (this.state.latitudeDelta && currLatitude && Math.abs(currLatitude - latitude) > 1) return

    this.setState({
      latitudeDelta,
      longitudeDelta,
      markerPosition: {
        latitude,
        longitude,
        latitudeDelta,
        longitudeDelta,
      },
    })
  }

  async renderAddress({ latitude, longitude, latitudeDelta, longitudeDelta }) {
    const address = await getAddress(latitude, longitude)
    if (address) {
      this.setState({
        address,
        markerPosition: {
          latitude,
          longitude,
          latitudeDelta,
          longitudeDelta,
        },
      })
    } else {
      this.setState({
        markerPosition: {
          latitude,
          longitude,
          latitudeDelta,
          longitudeDelta,
        },
      })
    }
  }

  render() {
    const { currentPosition, markerPosition, address, latitudeDelta } = this.state

    if (!currentPosition) {
      return <LoadingScreen />
    }

    const leftContainer = (
      <Text style={styles.addressText}>{address}</Text>
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
          onRegionChange={(coords) => this.renderRegion(coords, currentPosition.latitude)}
          onRegionChangeComplete={(coords) => this.renderAddress(coords)}
        >
          {currentPosition && (
            <MapView.Circle
              key={`${currentPosition.longitude}${currentPosition.latitude}${latitudeDelta}_1`}
              center={currentPosition}
              radius={3900 * latitudeDelta}
              strokeColor={'transparent'}
              fillColor={'rgba(112,185,213,0.30)'}
            />
          )}
          {currentPosition && (
            <MapView.Circle
              key={`${currentPosition.longitude}${currentPosition.latitude}${latitudeDelta}_2`}
              center={currentPosition}
              radius={1300 * latitudeDelta}
              strokeColor={'transparent'}
              fillColor={'#3594BC'}
            />
          )}
          {marker}
        </MapView>
        <Footer
          nextCallback={() => this.props.navigation.navigate('FlowerShop')}
          leftContainer={leftContainer}
        />
      </View>
    )
  }
}
