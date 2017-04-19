import React, { Component } from 'react'
import { View, Text, StatusBar } from 'react-native'
import { connect } from 'react-redux'

import { FlowerList, Footer } from './components'
import LoadingScreen from '../../commons/LoadingScreen'
import Colors from '../../../constants/colors'
import styles from './styles/HomeScreen'
import {
  fetchAvailableFlowers,
  selectFlower,
  removeSelectedFlower,
} from './actions'

@connect(
  state => ({
    flowers: state.home.flowers,
    selectedFlowers: state.home.selectedFlowers,
  }),
  {
    fetchAvailableFlowers,
    selectFlower,
    removeSelectedFlower,
  }
)
class HomeScreen extends Component {
  static navigationOptions = {
    title: 'flofun',
    header: {
      style: {
        backgroundColor: Colors.purpleDarkColor,
      },
      titleStyle: {
        fontSize: 20,
        fontFamily: 'montserratBold',
        color: Colors.whiteColor,
        textAlign: 'center',
      },
    },
  }

  componentDidMount() {
    this.props.fetchAvailableFlowers()
  }

  render() {
    const {
      flowers: {
        data,
        isFetched,
        error,
      },
      selectedFlowers,
    } = this.props

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

export default HomeScreen
