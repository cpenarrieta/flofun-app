import { StackNavigator } from 'react-navigation'

import {
  HomeScreen,
} from '../screens'

export default StackNavigator({
  Home: { screen: HomeScreen },
}, {
  mode: 'modal',
})
