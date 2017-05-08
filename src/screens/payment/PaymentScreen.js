import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { MaterialIcons } from '@expo/vector-icons'

import Footer from '../../commons/Footer'
import HeaderStack from '../../commons/HeaderStack'

export default class PaymentScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Payment',
    title: 'Payment',
    drawerIcon: ({ tintColor }) => (
      <MaterialIcons
        name="payment"
        size={20}
        color={tintColor}
      />
    ),
    ...HeaderStack(navigation),
  })

  render() {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'OrderStatus' }),
      ],
    })

    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <View style={{ flex: 0.9 }}>
          <Text>Pament</Text>
        </View>
        <Footer nextCallback={() => this.props.navigation.dispatch(resetAction)} />
      </View>
    )
  }
}
