import React, { Component } from 'react'
import { Text, View } from 'react-native'
import HeaderStack from '../../commons/HeaderStack'

export default class OrderStatusScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Order Status',
    ...HeaderStack(navigation.goBack, { hideBack: true }),
  })

  render() {
    return (
      <View>
        <Text>Order Status</Text>
      </View>
    )
  }
}
