import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import { Button, FormInput } from 'react-native-elements'
import { connect } from 'react-redux'
import { MaterialIcons } from '@expo/vector-icons'

import HeaderStack from '../../commons/HeaderStack'

@connect(
  state => ({
    selectedFlowers: state.flowerShop.selectedFlowers,
  }),
  {}
)
export default class ContactDetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Provide Message',
    drawerLabel: 'Provide Message',
    drawerIcon: ({ tintColor }) => (
      <MaterialIcons
        name="message"
        size={20}
        color={tintColor}
      />
    ),
    ...HeaderStack(navigation),
  })

  render() {
    return (
      <View>
        <StatusBar barStyle="light-content" />
        <FormInput
          // value={code}
          // onChangeText={val => handleChangeCode(val)}
          // inputStyle={styles.input}
          maxLength={200}
          placeholder="Sender Full Name"
          // keyboardType="phone-pad"
        />
        <Button
          raised
          fontFamily="montserrat"
          title="continue"
          onPress={() => this.props.navigation.navigate('Payment')}
        />
      </View>
    )
  }
}
