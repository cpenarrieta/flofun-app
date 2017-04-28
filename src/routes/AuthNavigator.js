import { StackNavigator } from 'react-navigation'

import {
  LoginScreen,
  PhoneSignUpScreen,
  EnterCodeScreen,
} from '../screens'

export default StackNavigator({
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  },
  PhoneSignUpScreen: { screen: PhoneSignUpScreen },
  EnterCodeScreen: { screen: EnterCodeScreen },
}, {
  mode: 'modal',
  navigationOptions: {
    cardStack: {
      gesturesEnabled: false,
    },
  },
})
