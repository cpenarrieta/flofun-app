import Expo from 'expo'
import React, { Component } from 'react'

import { signOutUser } from '../../../constants/api'

export default class SignOut extends Component {
  componentWillMount() {
    signOutUser()
    this.props.navigation.navigate('LoginScreen')
  }

  render() {
    return <Expo.AppLoading />
  }
}
