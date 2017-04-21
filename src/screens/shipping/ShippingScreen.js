import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import HeaderStack from '../../commons/HeaderStack'

export default class ShippingScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'flofun',
    ...HeaderStack(navigation.goBack, { hideBack: true }),
  })

  render() {
    return (
      <View>
        <Text>Shipping page</Text>
        <Button
          raised
          fontFamily="montserrat"
          onPress={() => console.log('press button')}
          title="continue"
          onPress={() => this.props.navigation.navigate('FlowerShop')}
        />
      </View>
    )
  }
}
