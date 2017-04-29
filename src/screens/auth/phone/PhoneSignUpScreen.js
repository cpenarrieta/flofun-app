import React, { Component } from 'react'
import { View, Text, Keyboard, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { FormInput, Button } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'

import styles from './styles/PhoneSignUpScreen'
import Colors from '../../../../constants/colors'
import {
  handleChangePhone as handleChangePhoneAction,
} from '../actions'
import {
  createUser,
  requestOneTimePassword,
} from '../../../../constants/api'

// const width = Dimensions.get('window').width * 0.6

@connect(
  state => ({
    phone: state.auth.phoneLogin.phone,
  }),
  {
    handleChangePhone: handleChangePhoneAction,
  }
)
export default class PhoneSignUpScreen extends Component {
  // handleSubmit = async () => {
  //   try {
  //     const { phone } = this.props

  //     await createUser(`+1${phone}`)
  //     const { data } = await requestOneTimePassword(`+1${phone}`)

  //     if (data.success) {
  //       this.props.navigation.navigate('EnterCodeScreen')
  //     }
  //   } catch (err) {
  //     console.log(err); //eslint-disable-line
  //   }
  // }

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

  handleSubmit = () => {
    this.props.navigation.navigate('EnterCodeScreen')
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
