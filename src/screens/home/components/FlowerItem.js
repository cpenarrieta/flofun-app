import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles/FlowerItem'

class FlowerItem extends Component {
  render() {
    const { flower, selectFlower, selected } = this.props

    return (
      <View style={styles.root}>
        <View style={styles.imageSection}>
          <Image
            source={{ uri: flower.image }}
            style={styles.image}
          />
        </View>
        <View style={styles.flowerDesc}>
          <View style={styles.titleSection}>
            <Text style={styles.title}>{flower.title}</Text>
            <Text style={styles.subTitle}>{flower.description}</Text>
          </View>
          <View style={[styles.priceSection, selected ? styles.priceSelected : null]}>
            <TouchableOpacity onPress={() => selectFlower(flower)}>
              <Text style={styles.price}>S./ {flower.price}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

export default FlowerItem
