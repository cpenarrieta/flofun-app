import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class ShippingScreen extends Component {
  static navigationOptions = {
    title: 'Shipping Address',
  }

  render() {
    return (
      <View>
        <Text>Shipping page</Text>
      </View>
    )
  }
}
