import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import styles from './styles/FlowerList'
import FlowerItem from './FlowerItem'

const FlowerList = ({ flowers }) => (
  <View style={styles.root}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>My Flowers</Text>
    </View>
    <View style={styles.contentContainer}>
      <ScrollView horizontal>
        {flowers.map((flower, i) => (
          <View key={i} style={styles.flowerCard}>
            <FlowerItem flower={flower} />
          </View>
        ))}
      </ScrollView>
    </View>
  </View>
)

export default FlowerList
