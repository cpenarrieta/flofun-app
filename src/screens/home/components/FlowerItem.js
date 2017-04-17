import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import styles from './styles/FlowerItem'

const FlowerItem = ({ flower }) => (
  <View style={styles.root}>
    <Image
      source={{ uri: flower.image }}
      style={styles.image}
    />
    <View style={styles.flowerDesc}>
      <View style={styles.titleSection}>
        <Text style={styles.title}>{flower.title}</Text>
        <Text style={styles.subTitle}>{flower.description}</Text>
      </View>
      <TouchableWithoutFeedback onPress={() => console.log(flower.price)}>
        <View style={styles.priceSection}>
          <Text style={styles.price}>S./ {flower.price}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  </View>
)

export default FlowerItem
