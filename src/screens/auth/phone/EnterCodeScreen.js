import React, { Component } from 'react'
import { View, Text, Keyboard, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import { FormInput, Button } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'
import { connect } from 'react-redux'

import styles from './styles/PhoneSignUpScreen'
import Colors from '../../../../constants/colors'
import {
  handleChangeCode as handleChangeCodeAction,
  validateCode as validateCodeAction,
} from '../actions'

@connect(
  state => ({
    code: state.auth.phoneLogin.code,
    phone: state.auth.phoneLogin.phone,
  }),
  {
    handleChangeCode: handleChangeCodeAction,
    validateCode: validateCodeAction,
  },
)
export default class EnterCodeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: styles.headerStyle,
    headerLeft: (
      <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
        <Ionicons name="ios-arrow-back" size={30} color={Colors.purpleDarkColor} />
      </TouchableOpacity>
    ),
  })

  handleSubmit = () => {
    const { phone, code, validateCode } = this.props
    validateCode(phone, code)
  }

  render() {
    const { handleChangeCode, code } = this.props

    return (
      <TouchableWithoutFeedback style={styles.root} onPress={Keyboard.dismiss}>
        <View style={styles.root}>
          <View style={styles.titleRoot}>
            <Text style={styles.authTitle}>Code Validation</Text>
          </View>
          <View style={styles.phoneRoot}>
            <FormInput
              value={code}
              onChangeText={val => handleChangeCode(val)}
              inputStyle={styles.input}
              maxLength={4}
              placeholder="Enter your code"
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
              title="Validate"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}
