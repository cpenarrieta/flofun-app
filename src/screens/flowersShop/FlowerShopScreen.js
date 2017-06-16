import React, { Component } from 'react'
import { View, Text, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import { FontAwesome } from '@expo/vector-icons'

import { FlowerList, Footer } from './components'
import LoadingScreen from '../../commons/LoadingScreen'
import styles from './styles/FlowerShopScreen'
import HeaderStack from '../../commons/HeaderStack'
import { fetchAvailableFlowers, selectFlower, removeSelectedFlower } from './actions'

@connect(
  state => ({
    flowers: state.flowerShop.flowers,
    selectedFlowers: state.flowerShop.selectedFlowers,
  }),
  {
    fetchAvailableFlowers,
    selectFlower,
    removeSelectedFlower,
  },
)
export default class FlowerShopScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Select Flower',
    title: 'Select Flower',
    drawerIcon: ({ tintColor }) => <FontAwesome name="shopping-cart" size={20} color={tintColor} />,
    ...HeaderStack(navigation),
  })

  componentDidMount() {
    this.props.fetchAvailableFlowers()
  }

  render() {
    const { flowers: { data, isFetched, error }, selectedFlowers } = this.props

    if (!isFetched) {
      return <LoadingScreen />
    } else if (error.on) {
      return (
        <View>
          <Text>{error.message}</Text>
        </View>
      )
    }

    return (
      <View style={styles.root}>
        <StatusBar barStyle="light-content" />
        <View style={styles.contentContainer}>
          <FlowerList
            flowers={data}
            selectFlower={this.props.selectFlower}
            selectedFlowers={selectedFlowers}
          />
        </View>
        <Footer
          selectedFlowers={selectedFlowers}
          removeSelectedFlower={this.props.removeSelectedFlower}
          navigate={this.props.navigation.navigate}
        />
      </View>
    )
  }
}
