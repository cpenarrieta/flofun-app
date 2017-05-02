import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'

import styles from './styles/LoginScreen'
import { signInWithToken } from '../../../constants/api'

export default class LoginScreen extends Component {
  componentWillMount() {
    this.checkToken()
  }

  async checkToken() {
    const validToken = await signInWithToken()
    if (validToken) {
      this.props.navigation.navigate('Main')
    }
  }

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.root}>
          <Text style={styles.authTitle}>FloFun</Text>
        </View>
        <View style={styles.root}>
          <View style={styles.root}>
            <View style={styles.root}>
              <Text style={styles.authWelcomeTitle}>Welcome!</Text>
            </View>
            <View style={styles.root}>
              <Text style={styles.authWelcomeText}>
                Order your sympathy flowers instantly
              </Text>
            </View>
          </View>
          <View style={styles.bottomButtonWrapper}>
            <TouchableOpacity style={[styles.loginButton, styles.google]}>
              <MaterialCommunityIcons name="google" size={35} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.loginButton, styles.facebook]}>
              <MaterialCommunityIcons name="facebook" size={35} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.loginButton, styles.phone]}
              onPress={() => this.props.navigation.navigate('PhoneSignUpScreen')}
            >
              <FontAwesome name="mobile-phone" size={35} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}
