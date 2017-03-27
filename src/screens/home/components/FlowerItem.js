import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import styles from './styles/FlowerItem'

const FlowerItem = ({ flower }) => (
  <TouchableWithoutFeedback onPress={() => { console.log(flower.title) }}>
    <View style={styles.root}>
      <Image
        source={{ uri: flower.image }}
        style={styles.image}
      />
      <View style={styles.flowerDesc}>
        <Text>{flower.title}</Text>
        <Text>S./ {flower.price}</Text>
      </View>
    </View>
  </TouchableWithoutFeedback>
)

export default FlowerItem
