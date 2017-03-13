import Expo from 'expo';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native'
import { fetchFlowers } from './constants/api'

class App extends React.Component {
  static defaultProps = {
    fetchFlowers
  }

  state = {
    loading: false,
    flowers: []
  }

  async componentDidMount() {
    this.setState({ loading: true })
    const data = await this.props.fetchFlowers()
    setTimeout(() => this.setState({ loading: false, flowers: data.flowers }), 2000)
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large"></ActivityIndicator>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <Text>FloFun</Text>
        {
          this.state.flowers.map((flower, i) => 
            <Text key={i}>{flower.title}</Text>
          )
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

Expo.registerRootComponent(App)
