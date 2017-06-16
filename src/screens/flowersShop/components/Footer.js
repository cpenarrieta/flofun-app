import React, { Component } from 'react'
import { View, TouchableOpacity, Image, TouchableWithoutFeedback, Animated } from 'react-native'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'

import styles from './styles/Footer'

export default class Footer extends Component {
  componentWillUpdate() {
    this.position = new Animated.ValueXY({ x: 0, y: 80 })

    Animated.spring(this.position, {
      toValue: { x: 0, y: 0 },
      duration: 500,
    }).start()
  }

  render() {
    const { selectedFlowers, removeSelectedFlower, navigate } = this.props
    return (
      <View style={styles.bottomContainer}>
        <View style={styles.bottomLeft}>
          {selectedFlowers.map((flower, key) => {
            const lastElement = key === selectedFlowers.length - 1

            if (lastElement) {
              return (
                <Animated.View key={flower._id} style={[this.position.getLayout(), styles.circle]}>
                  <Image source={{ uri: flower.image }} style={styles.selectedImage} />
                  <TouchableWithoutFeedback onPress={() => removeSelectedFlower(flower)}>
                    <MaterialCommunityIcons
                      style={styles.closeIcon}
                      name="close-circle"
                      size={20}
                      color="#000"
                    />
                  </TouchableWithoutFeedback>
                </Animated.View>
              )
            }

            return (
              <View key={flower._id} style={styles.circle}>
                <Image source={{ uri: flower.image }} style={styles.selectedImage} />
                <TouchableWithoutFeedback onPress={() => removeSelectedFlower(flower)}>
                  <MaterialCommunityIcons
                    style={styles.closeIcon}
                    name="close-circle"
                    size={20}
                    color="#000"
                  />
                </TouchableWithoutFeedback>
              </View>
            )
          })}
        </View>
        <View style={styles.bottomRight}>
          <TouchableOpacity onPress={() => navigate('ContactDetails')}>
            <FontAwesome name="arrow-right" size={40} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
