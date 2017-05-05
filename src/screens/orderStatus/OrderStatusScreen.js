import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import HeaderStack from '../../commons/HeaderStack'

export default class OrderStatusScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Order Status',
    title: 'Order Status',
    drawerIcon: ({ tintColor }) => (
      <MaterialCommunityIcons
        name="truck-delivery"
        size={20}
        color={tintColor}
      />
    ),
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
