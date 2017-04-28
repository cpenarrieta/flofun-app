import { StackNavigator } from 'react-navigation'

import {
  LoginScreen,
  PhoneSignUpScreen,
} from '../screens'

export default StackNavigator({
  LoginScreen: { screen: LoginScreen },
  PhoneSignUpScreen: { screen: PhoneSignUpScreen },
}, {
  mode: 'modal',
  headerMode: 'none',
  navigationOptions: {
    cardStack: {
      gesturesEnabled: false,
    },
  },
})
