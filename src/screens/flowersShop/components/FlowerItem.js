import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { openImageGallery } from '@expo/react-native-image-gallery'

import styles from './styles/FlowerItem'

export default class FlowerItem extends Component {
  _openInImageGallery = () => {
    const { flower } = this.props
    const item = {
      description: flower.description,
      imageUrl: flower.image,
      width: 480,
      height: 480,
    }
    const list = [item]

    this._view.measure((rx, ry, w, h, x, y) => {
      openImageGallery({
        animationMeasurements: { w, h, x, y },
        list,
        item,
      })
    })
  }

  render() {
    const { flower, selectFlower, selected, lastElement } = this.props

    return (
      <View style={[styles.root, lastElement && styles.lastFlower]}>
        <View style={styles.imageSection}>
          <TouchableWithoutFeedback onPress={this._openInImageGallery}>
            <Image
              ref={view => { this._view = view }}
              source={{ uri: flower.image }}
              style={styles.image}
            />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.flowerDesc}>
          <View style={styles.titleSection}>
            <Text style={styles.title}>{flower.title}</Text>
          </View>
          <View style={[styles.priceSection, selected ? styles.priceSelected : null]}>
            <Text style={styles.price}>$ {flower.price}</Text>
          </View>
          <View style={[styles.addToCart, selected ? styles.priceSelected : null]}>
            <TouchableOpacity onPress={() => selectFlower(flower)}>
              <MaterialIcons
                name="add-shopping-cart"
                size={30}
                color="#fff"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}
