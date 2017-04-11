import React, { Component } from 'react'
import { View, Text, StatusBar } from 'react-native'
import { connect } from 'react-redux'

import { FlowerList } from './components'
import LoadingScreen from '../../commons/LoadingScreen'
import Colors from '../../../constants/colors'
import styles from './styles/HomeScreen'
import { fetchAvailableFlowers } from './actions'

@connect(
  state => ({
    flowers: state.home.flowers,
  }),
  { fetchAvailableFlowers }
)
class HomeScreen extends Component {
  static navigationOptions = {
    title: 'flofun',
    header: {
      style: {
        backgroundColor: Colors.headerColor,
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
          <FlowerList flowers={data} />
        </View>
        <View style={styles.bottomContainer}>
          <Text>Arreglo 1 - S./ 120</Text>
        </View>
      </View>
    )
  }
}

export default HomeScreen
