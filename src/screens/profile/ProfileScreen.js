import React from 'react'
import { Text, View } from 'react-native'
import { Header } from '../../commons'
import styles from './styles/ProfileScreen'

const ProfileScreen = () => (
  <View style={styles.root}>
    <Header title={'Profile'} />
    <View style={styles.content}>
      <Text style={{ color: 'red', backgroundColor: 'blue' }}>Profile page</Text>
    </View>
  </View>
)

export default ProfileScreen
