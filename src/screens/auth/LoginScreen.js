import Expo from 'expo'
import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'
import { connect } from 'react-redux'

import styles from './styles/LoginScreen'
import {
  signInWithToken as signInWithTokenAction,
  doFacebookLogin as doFacebookLoginAction,
  doGoogleLogin as doGoogleLoginAction,
} from './actions'

@connect(
  state => ({
    logged: state.auth.logged,
  }),
  {
    signInWithToken: signInWithTokenAction,
    doFacebookLogin: doFacebookLoginAction,
    doGoogleLogin: doGoogleLoginAction,
  }
)
export default class LoginScreen extends Component {
  state = { loading: true }

  componentWillMount() {
    this.checkToken()
  }

  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps)
  }

  onAuthComplete(props) {
    if (props.logged) {
      this.props.navigation.navigate('Main')
    } else {
      this.setState({ loading: false })
    }
  }

  async checkToken() {
    await this.props.signInWithToken()
    this.setState({ loading: false })
  }

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />
    }

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
                Order sympathy flowers instantly
              </Text>
            </View>
          </View>
          <View style={styles.bottomButtonWrapper}>
            <TouchableOpacity
              style={[styles.loginButton, styles.google]}
              onPress={() => this.props.doGoogleLogin()}
            >
              <MaterialCommunityIcons name="google" size={35} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.loginButton, styles.facebook]}
              onPress={() => this.props.doFacebookLogin()}
            >
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
