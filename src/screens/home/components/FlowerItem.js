import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles/FlowerItem'

const FlowerItem = ({ flower }) => (
  <View style={styles.root}>
    <Text>{flower.title} | {flower.description}</Text>
  </View>
)

export default FlowerItem
