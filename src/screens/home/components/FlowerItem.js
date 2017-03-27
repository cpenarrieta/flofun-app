import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import styles from './styles/FlowerItem'

const FlowerItem = ({ flower }) => (
  <TouchableWithoutFeedback onPress={() => { console.log(flower.title) }}>
    <View style={styles.root}>
      <Image
        source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
        style={styles.image}
      />
      <Text>{flower.title}</Text>
      <Text>{flower.price}</Text>
    </View>
  </TouchableWithoutFeedback>
)

export default FlowerItem
