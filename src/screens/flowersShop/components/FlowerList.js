import React from 'react'
import { View, ScrollView } from 'react-native'
import styles from './styles/FlowerList'
import FlowerItem from './FlowerItem'

const FlowerList = ({ flowers, selectFlower, selectedFlowers }) =>
  <View style={styles.root}>
    <View style={styles.contentContainer}>
      <ScrollView vertical>
        {flowers.map((flower, key) =>
          <View key={flower._id} style={styles.flowerCard}>
            <FlowerItem
              flower={flower}
              selectFlower={selectFlower}
              selected={!!selectedFlowers.find(f => f._id === flower._id)}
              lastElement={key === flowers.length - 1}
            />
          </View>,
        )}
      </ScrollView>
    </View>
  </View>

export default FlowerList
