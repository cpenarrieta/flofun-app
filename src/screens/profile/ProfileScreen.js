import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import HeaderStack from '../../commons/HeaderStack'
import styles from './styles/ProfileScreen'

export default class ProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Profile',
    title: 'Profile',
    drawerIcon: ({ tintColor }) => (
      <FontAwesome
        name="user"
        size={20}
        color={tintColor}
      />
    ),
    ...HeaderStack(navigation, { hideBack: true }),
  })

  render() {
    return (
      <View style={styles.root}>
        <StatusBar barStyle="light-content" />
        <View style={styles.content}>
          <Text>Profile page</Text>
        </View>
      </View>
    )
  }
}
