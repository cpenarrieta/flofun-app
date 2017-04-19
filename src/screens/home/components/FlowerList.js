import React from 'react'
import { View, ScrollView } from 'react-native'
import styles from './styles/FlowerList'
import FlowerItem from './FlowerItem'

const FlowerList = ({ flowers, selectFlower, selectedFlowers }) => (
  <View style={styles.root}>
    <View style={styles.contentContainer}>
      <ScrollView vertical>
        {flowers.map((flower, i) => (
          <View key={i} style={styles.flowerCard}>
            <FlowerItem
              flower={flower}
              selectFlower={selectFlower}
              selected={!!selectedFlowers.find((f) => f._id === flower._id)}
              lastElement={i === flowers.length - 1}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  </View>
)

export default FlowerList
