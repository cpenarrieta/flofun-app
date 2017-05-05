import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import { Header } from '../../commons'
import styles from './styles/ProfileScreen'

export default class ProfileScreen extends Component {
  static navigationOptions = () => ({
    drawerLabel: 'Profile',
    drawerIcon: ({ tintColor }) => (
      <FontAwesome
        name="user"
        size={20}
        color={tintColor}
      />
    ),
  })

  render() {
    return (
      <View style={styles.root}>
        <StatusBar barStyle="light-content" />
        <Header title={'Profile'} />
        <View style={styles.content}>
          <Text>Profile page</Text>
        </View>
      </View>
    )
  }
}
