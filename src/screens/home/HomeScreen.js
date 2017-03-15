import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { fetchFlowers } from '../../../constants/api'
import { FlowerList } from './components'
import LoadingScreen from '../../commons/LoadingScreen'
import styles from './styles/HomeScreen'

class HomeScreen extends Component {
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
        <View style={styles.topContainer}>
          <FlowerList flowers={this.state.flowers} />
        </View>
        <View style={styles.bottomContainer}>
          <Text>Footer</Text>
        </View>
      </View>
    )
  }
}

export default HomeScreen
