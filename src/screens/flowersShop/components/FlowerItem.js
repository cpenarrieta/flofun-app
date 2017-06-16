import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import styles from './styles/FlowerItem'

export default class FlowerItem extends Component {
  constructor(props) {
    super(props)

    this._animatedWidth = new Animated.Value(0)
    this._animatedQuantity = new Animated.Value(0)
    this.state = {
      isOpen: false,
      quantity: 1,
    }
  }

  closeQuantitySelector = () => {
    this.setState({ isOpen: false })
    Animated.spring(this._animatedWidth, {
      toValue: 0,
    }).start()
  }

  changeQuantity = change => {
    const quantity = this.state.quantity + change

    if (quantity === 0) {
      this.closeQuantitySelector()
    } else {
      Animated.sequence([
        Animated.timing(this._animatedQuantity, {
          toValue: -3,
          duration: 100,
        }),
        Animated.timing(this._animatedQuantity, {
          toValue: 3,
          duration: 100,
        }),
        Animated.timing(this._animatedQuantity, {
          toValue: 0,
          duration: 100,
        }),
      ]).start()
      this.setState({ quantity })
    }
  }

  handleSelectFlower = flower => {
    if (this.state.isOpen) {
      this.closeQuantitySelector()
      this.props.selectFlower({ ...flower, quantity: this.state.quantity })
    } else {
      this.setState({ isOpen: true })
      Animated.spring(this._animatedWidth, {
        toValue: 1,
      }).start()
    }
  }

  renderQuantitySelector = () => {
    const { flower, selected } = this.props
    const quantity = this.state.quantity

    const containerStyles = [
      styles.quantitySection,
      {
        width: this._animatedWidth.interpolate({
          inputRange: [0, 1],
          outputRange: ['0%', '55%'],
          extrapolate: 'clamp',
        }),
        transform: [{ scale: this._animatedWidth }],
      },
    ]

    const titleContainerStyles = [
      styles.titleSection,
      {
        width: this._animatedWidth.interpolate({
          inputRange: [0, 1],
          outputRange: ['55%', '0%'],
          extrapolate: 'clamp',
        }),
        paddingLeft: this._animatedWidth.interpolate({
          inputRange: [0, 1],
          outputRange: [5, 0],
          extrapolate: 'clamp',
        }),
      },
    ]

    const quantityStyles = [
      styles.quantityText,
      {
        transform: [
          {
            translateX: this._animatedQuantity,
          },
        ],
      },
    ]

    return (
      <View style={styles.flowerDesc}>
        <Animated.View style={titleContainerStyles}>
          <Text ellipsizeMode="tail" numberOfLines={2} style={styles.title}>{flower.title}</Text>
        </Animated.View>
        <View style={[styles.priceSection, selected ? styles.priceSelected : null]}>
          <Text style={styles.price}>$ {flower.price}</Text>
        </View>
        <Animated.View style={containerStyles}>
          <TouchableOpacity
            style={styles.quantitySelectorButton}
            onPress={() => this.changeQuantity(-1)}
          >
            <Text style={styles.quantitySelectorButtonText}>-</Text>
          </TouchableOpacity>
          <Animated.Text style={quantityStyles}>
            {quantity}
          </Animated.Text>
          <TouchableOpacity
            style={styles.quantitySelectorButton}
            onPress={() => this.changeQuantity(1)}
          >
            <Text style={styles.quantitySelectorButtonText}>+</Text>
          </TouchableOpacity>
        </Animated.View>
        <View
          style={[styles.addToCart, this.state.isOpen || selected ? styles.priceSelected : null]}
        >
          <TouchableOpacity onPress={() => this.handleSelectFlower(flower)}>
            {selected
              ? <MaterialIcons name="check-circle" size={30} color="#fff" />
              : <MaterialIcons name="add-shopping-cart" size={30} color="#fff" />}
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  render() {
    const { flower, lastElement } = this.props

    return (
      <View style={[styles.root, lastElement && styles.lastFlower]}>
        <View style={styles.imageSection}>
          <TouchableWithoutFeedback onPress={this._openInImageGallery}>
            <Image source={{ uri: flower.image }} style={styles.image} />
          </TouchableWithoutFeedback>
        </View>
        {this.renderQuantitySelector()}
      </View>
    )
  }
}
