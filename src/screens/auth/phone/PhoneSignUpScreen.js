import React, { Component } from 'react'
import { View, Text, Dimensions, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { FormInput, Button } from 'react-native-elements';
import styles from './styles/PhoneSignUpScreen'
import Colors from '../../../../constants/colors'

const width = Dimensions.get('window').width * 0.6;

export default class PhoneSignUpScreen extends Component {
  state = {
    phone: '',
  }

  handleSubmit = () => {

  }

  render() {
    return (
      <TouchableWithoutFeedback style={styles.root} onPress={Keyboard.dismiss}>
        <View style={styles.root}>
          <View style={styles.titleRoot}>
            <Text style={styles.authTitle}>SMS Verification</Text>
          </View>
          <View style={styles.phoneRoot}>
            <FormInput
              value={this.state.phone}
              onChangeText={phone => this.setState({ phone })}
              inputStyle={{ width, fontSize: 28, textAlign: 'center' }}
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
              buttonStyle={{ width }}
              fontSize={18}
              title="Get Code"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}
