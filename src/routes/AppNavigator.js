import React, { Component } from 'react'
import { addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'
import { View, StatusBar } from 'react-native'

import Navigator from './Navigator'
import AuthNavigator from './AuthNavigator'

@connect(
  state => ({
    navigation: state.navigation,
    auth: state.auth,
  })
)
export default class AppNavigator extends Component {
  render() {
    const navigation = addNavigationHelpers({
      dispatch: this.props.dispatch,
      state: this.props.navigation,
    })

    if (this.props.auth.logged) {
      return (
        <View style={{ flex: 1 }}>
          <StatusBar barStyle="light-content" />
          <Navigator navigation={navigation} />
        </View>
      )
    }

    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <AuthNavigator />
      </View>
    )
  }
}

export const router = Navigator.router
