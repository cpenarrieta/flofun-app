import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import HeaderStack from '../../commons/HeaderStack'

export default class ContactDetailsScreen extends Component {
  static navigationOptions = {
    title: 'Provide Message',
    header: ({ goBack }) => HeaderStack(goBack),
  }

  render() {
    return (
      <View>
        <Text>Provide Message</Text>
        <Button
          raised
          fontFamily="montserrat"
          onPress={() => console.log('press button')}
          title="continue"
          onPress={() => this.props.navigation.navigate('Payment')}
        />
      </View>
    )
  }
}
