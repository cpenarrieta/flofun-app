import React, { Component } from 'react'
import { View, TouchableOpacity, StatusBar } from 'react-native'
import { MapView } from 'expo'
import { FontAwesome } from '@expo/vector-icons'

import HeaderStack from '../../commons/HeaderStack'
import LoadingScreen from '../../commons/LoadingScreen'
import styles from './styles/ShippingScreen'
import Colors from '../../../constants/colors'

export default class ShippingScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'flofun',
    drawerLabel: 'Home',
    ...HeaderStack(navigation.goBack, { hideBack: true }),
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
          <TouchableOpacity onPress={() => this.props.navigation.navigate('FlowerShop')}>
            <FontAwesome
              name="arrow-right"
              size={40}
              color="#fff"
            />
          </TouchableOpacity>
        </MapView>
      </View>
    )
  }
}
