import { StackNavigator } from 'react-navigation'

import {
  FlowerShopScreen,
  ShippingScreen,
  ContactDetailsScreen,
  PaymentScreen,
  OrderStatusScreen,
} from '../screens'

export default StackNavigator({
  Shipping: { screen: ShippingScreen },
  FlowerShop: { screen: FlowerShopScreen },
  ContactDetails: { screen: ContactDetailsScreen },
  Payment: { screen: PaymentScreen },
  OrderStatus: { screen: OrderStatusScreen },
}, {
  mode: 'modal',
  navigationOptions: {
    gesturesEnabled: false,
  },
})
