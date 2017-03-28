import React, { Component } from 'react'
import { View, Text, StatusBar } from 'react-native'
import { fetchFlowers } from '../../../constants/api'
import { FlowerList } from './components'
import LoadingScreen from '../../commons/LoadingScreen'
import Colors from '../../../constants/colors'
import styles from './styles/HomeScreen'

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'flofun',
    header: {
      style: {
        backgroundColor: Colors.headerColor
      },
      titleStyle: {
        fontSize: 20,
        fontFamily: 'montserratBold',
        color: Colors.whiteColor,
        textAlign: 'center'
      }
    }
  }

  static defaultProps = {
    fetchFlowers
  }

  state = {
    loading: false,
    flowers: []
  }

  async componentDidMount() {
    this.setState({ loading: true })
    const flowers = await this.props.fetchFlowers()
    this.setState({ loading: false, flowers })
  }

  render() {
    if (this.state.loading) {
      return <LoadingScreen />
    }

    return (
      <View style={styles.root}>
        <StatusBar barStyle="light-content" />
        <View style={styles.contentContainer}>
          <FlowerList flowers={this.state.flowers} />
        </View>
        <View style={styles.bottomContainer}>
          <Text>Arreglo 1 - S./ 120</Text>
        </View>
      </View>
    )
  }
}

export default HomeScreen
