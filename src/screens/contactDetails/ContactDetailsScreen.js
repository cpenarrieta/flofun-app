import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
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
          onPress={() => this.props.navigation.navigate('Shipping')}
        />
      </View>
    )
  }
}
