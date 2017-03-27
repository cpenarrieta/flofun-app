import React from 'react'
import { View, ScrollView } from 'react-native'
import styles from './styles/FlowerList'
import FlowerItem from './FlowerItem'

const FlowerList = ({ flowers }) => (
  <View style={styles.root}>
    <View style={styles.contentContainer}>
      <ScrollView vertical>
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
