import Expo from 'expo'
import React, { Component } from 'react'
import { FontAwesome } from '@expo/vector-icons'

import { signOutUser } from '../../../constants/api'

export default class SignOut extends Component {
  static navigationOptions = () => ({
    drawerLabel: 'Sign Out',
    drawerIcon: ({ tintColor }) => (
      <FontAwesome
        name="sign-out"
        size={20}
        color={tintColor}
      />
    ),
  })

  componentWillMount() {
    signOutUser()
    this.props.navigation.navigate('LoginScreen')
  }

  render() {
    return <Expo.AppLoading />
  }
}
