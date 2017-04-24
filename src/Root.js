import React from 'react'
import { View, StatusBar } from 'react-native'
import AppNavigator from './routes/AppNavigator'

const Root = () => (
  <View style={{ flex: 1 }}>
    <StatusBar barStyle="light-content" />
    <AppNavigator />
  </View>
)

export default Root
