import { StackNavigator } from 'react-navigation'

import {
  HomeScreen,
  ShippingScreen,
} from '../screens'

export default StackNavigator({
  Home: { screen: HomeScreen },
  Shipping: { screen: ShippingScreen },
}, {
  mode: 'modal',
})
