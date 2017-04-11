import Expo from 'expo'
import React from 'react'
import { Provider } from 'react-redux'
import EStyleSheet from 'react-native-extended-stylesheet'

import Colors from './constants/colors'
import { fontAssets } from './helpers'
import Root from './src/Root'
import store from './src/redux/store'

EStyleSheet.build(Colors)

class App extends React.Component {
  state = {
    fontLoaded: false,
  }

  componentDidMount() {
    this.loadAssets()
  }

  async loadAssets() {
    await Promise.all(fontAssets)

    this.setState({ fontLoaded: true })
  }

  render() {
    if (!this.state.fontLoaded) {
      return <Expo.AppLoading />
    }
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    )
  }
}

Expo.registerRootComponent(App)
