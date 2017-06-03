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
          region: {
            latitude,
            longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
        })
      },
      (error) => console.log(JSON.stringify(error)), // eslint-disable-line
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    )
  }

  renderRegion({ latitude, longitude }) {
    this.setState({
      markerPosition: {
        latitude,
        longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    })
  }

  async renderAddress({ latitude, longitude }) {
    const address = await getAddress(latitude, longitude)
    if (address) {
      this.setState({
        address,
        markerPosition: {
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
      })
    } else {
      this.setState({
        address,
        markerPosition: {
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
      })
    }
  }

  render() {
    const { currentPosition, markerPosition, address } = this.state

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
          onRegionChange={(coords) => this.renderRegion(coords)}
          onRegionChangeComplete={(coords) => this.renderAddress(coords)}
        >
          {currentPosition && (
            <MapView.Circle
              center={currentPosition}
              radius={300}
              strokeColor={'transparent'}
              fillColor={'rgba(112,185,213,0.30)'}
            />
          )}
          {currentPosition && (
            <MapView.Circle
              center={currentPosition}
              radius={100}
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
