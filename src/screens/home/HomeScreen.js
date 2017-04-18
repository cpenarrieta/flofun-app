import React, { Component } from 'react'
import { View, Text, StatusBar, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { FlowerList } from './components'
import LoadingScreen from '../../commons/LoadingScreen'
import Colors from '../../../constants/colors'
import styles from './styles/HomeScreen'
import {
  fetchAvailableFlowers,
  selectFlowerAction,
} from './actions'

@connect(
  state => ({
    flowers: state.home.flowers,
    selectedFlowers: state.home.selectedFlowers,
  }),
  {
    fetchAvailableFlowers,
    selectFlowerAction,
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
    const selectFlower = this.props.selectFlowerAction

    if (!isFetched) {
      return <LoadingScreen />
    } else if (error.on) {
      return (
        <View>
          <Text>{error.message}</Text>
        </View>
      )
    }

    const footer = selectedFlowers.length > 0 ?
    (
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('ContactDetails')}>
          {selectedFlowers.map((flower, id) =>
            <Text key={id}>{flower.title}</Text>
          )}
        </TouchableOpacity>
      </View>
    )
    : null

    return (
      <View style={styles.root}>
        <StatusBar barStyle="light-content" />
        <View style={styles.contentContainer}>
          <FlowerList
            flowers={data}
            selectFlower={selectFlower}
            selectedFlowers={selectedFlowers}
          />
        </View>
        {footer}
      </View>
    )
  }
}

export default HomeScreen
