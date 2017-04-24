import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import styles from './styles/LoginScreen'

export default class LoginScreen extends Component {
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
            <TouchableOpacity style={[styles.loginButton, styles.signUp]}>
              <MaterialCommunityIcons name="google" size={35} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.loginButton, styles.signIn]}>
              <MaterialCommunityIcons name="facebook" size={35} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}
