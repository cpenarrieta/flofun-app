import React, { Component } from 'react'
import { View, Text, Dimensions } from 'react-native'
import { FormInput } from 'react-native-elements';
import styles from './styles/PhoneSignUpScreen'

const width = Dimensions.get('window').width * 0.6;

export default class PhoneSignUpScreen extends Component {
  state = {
    phone: '',
  }

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.root}>
          <Text style={styles.authTitle}>SMS Verification</Text>
        </View>
        <View style={styles.phoneRoot}>
          <FormInput
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
            inputStyle={{ width, fontSize: 28, textAlign: 'center' }}
            maxLength={10}
            placeholder="Enter your phone"
          />
        </View>
      </View>
    )
  }
}
