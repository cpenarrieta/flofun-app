import React from 'react'
import { View, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import styles from './styles/Footer'

const Footer = ({ selectedFlowers, removeSelectedFlower, navigate }) => (
  selectedFlowers.length > 0 ?
  (
    <View style={styles.bottomContainer}>
      <View style={styles.bottomLeft}>
        {selectedFlowers.map((flower, id) =>
          <View key={id} style={styles.circle}>
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
        )}
      </View>
      <View style={styles.bottomRight}>
        <TouchableOpacity onPress={() => navigate('ContactDetails')}>
          <FontAwesome
            name="arrow-right"
            size={40}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
    </View>
  )
  : null
)

export default Footer
