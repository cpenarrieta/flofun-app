import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
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
      <View style={styles.priceSection}>
        <TouchableOpacity onPress={() => console.log(flower.price)}>
          <Text style={styles.price}>S./ {flower.price}</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
)

export default FlowerItem
