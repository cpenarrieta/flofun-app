import Expo from 'expo'
import React from 'react'
import { Provider } from 'react-redux'
import EStyleSheet from 'react-native-extended-stylesheet'

import Colors from './constants/colors'
import { cachedFonts } from './helpers'
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
    const fontAssets = cachedFonts([
      { montserrat: require('./assets/fonts/Montserrat-Regular.ttf') },
      { montserratBold: require('./assets/fonts/Montserrat-Bold.ttf') },
      { montserratLight: require('./assets/fonts/Montserrat-Light.ttf') },
      { montserratMedium: require('./assets/fonts/Montserrat-Medium.ttf') }
    ])

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
