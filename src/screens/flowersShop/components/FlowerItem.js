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
import Modal from 'react-native-root-modal'

import Swipeable from '../../../commons/Swipeable'
import styles from './styles/FlowerItem'

const calculateOpacity = x => Math.max(0, 100 - Math.abs(x)) / 100

export default class FlowerItem extends Component {
  constructor(props) {
    super(props)

    this._animatedWidth = new Animated.Value(0)
    this._animatedQuantity = new Animated.Value(0)
    this.modalOpacity = new Animated.Value(0)
    this.state = {
      isOpen: false,
      quantity: 1,
      modalVisible: false,
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
    const { modalVisible } = this.state
    const modalStyle = {
      opacity: this.modalOpacity,
    }

    return (
      <View style={[styles.root, lastElement && styles.lastFlower]}>
        <Modal style={styles.modalContainer} visible={modalVisible}>
          <Animated.View style={[styles.backgroundModal, modalStyle]} />
          <Swipeable
            onMove={({ dx, dy }) => {
              const newOpacityX = calculateOpacity(dx)
              const newOpacityY = calculateOpacity(dy)
              this.modalOpacity.setValue(Math.min(newOpacityX, newOpacityY))
            }}
            onEnd={({ dx, dy }) => {
              const newOpacityX = calculateOpacity(dx)
              const newOpacityY = calculateOpacity(dy)
              if (Math.min(newOpacityX, newOpacityY) < 0.1) {
                this.setState({ modalVisible: false })
                this.modalOpacity.setValue(0)
              } else {
                Animated.spring(this.modalOpacity, { toValue: 1 }).start()
                this.modalOpacity.setValue(1)
              }
            }}
          >
            <Animated.View style={[styles.modal, modalStyle]}>
              <Image
                source={{ uri: flower.image }}
                style={{ width: 300, height: 230, resizeMode: 'contain' }}
              />
              <View style={{ padding: 5 }}>
                <Text>{flower.description}</Text>
              </View>
            </Animated.View>
          </Swipeable>
        </Modal>
        <View style={styles.imageSection}>
          <TouchableWithoutFeedback
            onPress={() => {
              Animated.spring(this.modalOpacity, { toValue: 1 }).start()
              this.setState({ modalVisible: true })
            }}
          >
            <Image source={{ uri: flower.image }} style={styles.image} />
          </TouchableWithoutFeedback>
        </View>
        {this.renderQuantitySelector()}
      </View>
    )
  }
}
