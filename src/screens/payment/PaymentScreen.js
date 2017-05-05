import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native'
import { Button } from 'react-native-elements'
import { NavigationActions } from 'react-navigation'

import HeaderStack from '../../commons/HeaderStack'

export default class PaymentScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Home',
    title: 'Payment',
    ...HeaderStack(navigation.goBack),
  })

  render() {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'OrderStatus' }),
      ],
    })

    return (
      <View>
        <StatusBar barStyle="light-content" />
        <Text>Pament</Text>
        <Button
          raised
          fontFamily="montserrat"
          onPress={() => console.log('press button')}
          title="continue"
          onPress={() => this.props.navigation.dispatch(resetAction)}
        />
      </View>
    )
  }
}
