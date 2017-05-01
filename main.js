import Expo from 'expo'
import React from 'react'
import { Provider } from 'react-redux'
import EStyleSheet from 'react-native-extended-stylesheet'
import firebase from 'firebase'

import Colors from './constants/colors'
import { fontAssets } from './helpers'
import Root from './src/Root'
import store from './src/redux/store'
import secrets from './constants/secrets'
import { signInWithToken } from './constants/api'

EStyleSheet.build(Colors)

class App extends React.Component {
  state = {
    fontLoaded: false,
  }

  componentDidMount() {
    firebase.initializeApp(secrets.firebase)
    this.loadAssets()
    this.checkToken()
  }

  async loadAssets() {
    await Promise.all(fontAssets)
    this.setState({ fontLoaded: true })
  }

  async checkToken() {
    const validToken = await signInWithToken()
    this.setState({ validToken })
  }

  render() {
    if (!this.state.fontLoaded) {
      return <Expo.AppLoading />
    }
    return (
      <Provider store={store}>
        <Root validToken={this.state.validToken} />
      </Provider>
    )
  }
}

Expo.registerRootComponent(App)
