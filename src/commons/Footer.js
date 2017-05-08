import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import styles from './styles/Footer'

export default class Footer extends Component {
  render() {
    const { nextCallback } = this.props

    return (
      <View style={styles.root}>
        <View style={styles.bottomLeft} />
        <View style={styles.bottomRight}>
          <TouchableOpacity onPress={() => nextCallback()}>
            <FontAwesome
              name="arrow-right"
              size={40}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
