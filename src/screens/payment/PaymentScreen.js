import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { Button } from 'react-native-elements'
import { NavigationActions } from 'react-navigation'
import HeaderStack from '../../commons/HeaderStack'

export default class PaymentScreen extends Component {
  static navigationOptions = {
    title: 'Payment',
    header: ({ goBack }) => HeaderStack(goBack),
  }

  render() {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'OrderStatus' }),
      ],
    })

    return (
      <View>
        <Text>Pament</Text>
        <TouchableOpacity>
          <FontAwesome
            name="arrow-circle-right"
            size={40}
            color="#fff"
          />
        </TouchableOpacity>
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
