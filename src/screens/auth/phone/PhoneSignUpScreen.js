import React, { Component } from 'react'
import { View, Text, Keyboard, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { FormInput, Button } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'

import styles from './styles/PhoneSignUpScreen'
import Colors from '../../../../constants/colors'
import {
  handleChangePhone as handleChangePhoneAction,
  createUserAndSendCode as createUserAndSendCodeAction,
} from '../actions'

@connect(
  state => ({
    phone: state.auth.phoneLogin.phone,
  }),
  {
    handleChangePhone: handleChangePhoneAction,
    createUserAndSendCode: createUserAndSendCodeAction,
  }
)
export default class PhoneSignUpScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: styles.headerStyle,
    headerLeft: (
      <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
        <Ionicons
          name="ios-arrow-back"
          size={30}
          color={Colors.purpleDarkColor}
        />
      </TouchableOpacity>
    ),
  })

  handleSubmit = async () => {
    const { phone, navigation, createUserAndSendCode } = this.props
    createUserAndSendCode(phone, navigation)
  }

  render() {
    const { handleChangePhone, phone } = this.props

    return (
      <TouchableWithoutFeedback style={styles.root} onPress={Keyboard.dismiss}>
        <View style={styles.root}>
          <View style={styles.titleRoot}>
            <Text style={styles.authTitle}>SMS Verification</Text>
          </View>
          <View style={styles.phoneRoot}>
            <FormInput
              value={phone}
              onChangeText={val => handleChangePhone(val)}
              inputStyle={styles.input}
              maxLength={10}
              placeholder="Enter your phone"
              keyboardType="phone-pad"
            />
          </View>
          <View style={styles.buttonRoot}>
            <Button
              onPress={this.handleSubmit}
              color={Colors.whiteColor}
              backgroundColor={Colors.purpleColor}
              buttonStyle={styles.buttonStyle}
              fontSize={18}
              title="Get Code"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}
