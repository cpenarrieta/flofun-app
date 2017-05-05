import React from 'react'
import { Text, View, StatusBar } from 'react-native'

import { Header } from '../../commons'
import styles from './styles/ProfileScreen'

const ProfileScreen = () => (
  <View style={styles.root}>
    <StatusBar barStyle="light-content" />
    <Header title={'Profile'} />
    <View style={styles.content}>
      <Text style={{ color: 'red', backgroundColor: 'blue' }}>Profile page</Text>
    </View>
  </View>
)

export default ProfileScreen
