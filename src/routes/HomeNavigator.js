import { StackNavigator } from 'react-navigation'

import {
  HomeScreen,
  ShippingScreen,
  ContactDetailsScreen,
  PaymentScreen,
  OrderStatusScreen,
} from '../screens'

export default StackNavigator({
  Home: { screen: HomeScreen },
  Shipping: { screen: ShippingScreen },
  ContactDetails: { screen: ContactDetailsScreen },
  Payment: { screen: PaymentScreen },
  OrderStatus: { screen: OrderStatusScreen },
}, {
  mode: 'modal',
})
