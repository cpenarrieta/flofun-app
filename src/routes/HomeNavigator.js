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
  ContactDetails: { screen: ContactDetailsScreen },
  Shipping: { screen: ShippingScreen },
  Payment: { screen: PaymentScreen },
  OrderStatus: { screen: OrderStatusScreen },
}, {
  mode: 'modal',
  navigationOptions: {
    cardStack: {
      gesturesEnabled: false,
    },
  },
})
