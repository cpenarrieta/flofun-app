import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native'

import HeaderStack from '../../commons/HeaderStack'

export default class OrderStatusScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Home',
    title: 'Order Status',
    ...HeaderStack(navigation.goBack, { hideBack: true }),
  })

  render() {
    return (
      <View>
        <StatusBar barStyle="light-content" />
        <Text>Order Status</Text>
      </View>
    )
  }
}
