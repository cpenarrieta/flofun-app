import React, { Component } from 'react'
import { addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux';

import Navigator from './Navigator'

@connect(
  state => ({
    navigation: state.navigation,
  })
)
export default class AppNavigator extends Component {
  render() {
    const navigation = addNavigationHelpers({
      dispatch: this.props.dispatch,
      state: this.props.navigation,
    })

    return <Navigator navigation={navigation} />
  }
}

export const router = Navigator.router
