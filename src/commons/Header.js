import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles/Header'

const Header = ({ title }) => (
  <View style={styles.headerContainer}>
    <Text style={styles.title}>{title}</Text>
  </View>
)

export default Header
