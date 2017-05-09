import React, { Component } from 'react'
import { View, StatusBar, Text } from 'react-native'
import { MapView } from 'expo'
import { FontAwesome } from '@expo/vector-icons'

import Footer from '../../commons/Footer'
import HeaderStack from '../../commons/HeaderStack'
import LoadingScreen from '../../commons/LoadingScreen'
import styles from './styles/ShippingScreen'
import Colors from '../../../constants/colors'

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
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (currentPosition) => {
        const position = {
          latitude: currentPosition.coords.latitude,
          longitude: currentPosition.coords.longitude,
        }
        this.setState({ currentPosition: position })
      },
      (error) => console.log(JSON.stringify(error)),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    )
  }

  render() {
    const { currentPosition } = this.state

    if (!currentPosition) {
      return <LoadingScreen />
    }

    const leftContainer = (
      <Text style={styles.addressText}>201-2875 Osoyoos Crescent, Vancouver, BC, V6T 2G3</Text>
    )

    return (
      <View style={styles.root}>
        <StatusBar barStyle="light-content" />
        <MapView
          style={styles.mapView}
          showsMyLocationButton
          zoomEnabled
          initialRegion={{
            latitude: currentPosition.latitude,
            longitude: currentPosition.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <MapView.Marker
            coordinate={currentPosition}
            pinColor={Colors.purpleDarkColor}
            draggable
          />
        </MapView>
        <Footer
          nextCallback={() => this.props.navigation.navigate('FlowerShop')}
          leftContainer={leftContainer}
        />
      </View>
    )
  }
}
