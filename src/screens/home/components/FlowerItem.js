import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import styles from './styles/FlowerItem'

const FlowerItem = ({ flower, onPress }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.root}>
      <Image
        source={{ uri: flower.image }}
        style={styles.image}
      />
      <View style={styles.flowerDesc}>
        <Text style={styles.title} >{flower.title}</Text>
        <Text style={styles.price}>S./ {flower.price}</Text>
      </View>
    </View>
  </TouchableWithoutFeedback>
)

export default FlowerItem
