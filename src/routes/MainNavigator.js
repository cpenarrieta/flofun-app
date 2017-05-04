import { StackNavigator, DrawerNavigator } from 'react-navigation'
import HomeNavigator from './HomeNavigator'

import {
  LoginScreen,
  PhoneSignUpScreen,
  EnterCodeScreen,
  ProfileScreen,
  SignOut,
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
  Main: {
    screen: DrawerNavigator({
      Home: { screen: HomeNavigator },
      Profile: { screen: ProfileScreen },
      SignOut: { screen: SignOut },
    }),
    navigationOptions: {
      header: null,
    },
  },
}, {
  lazy: true,
  mode: 'modal',
  navigationOptions: {
    cardStack: {
      gesturesEnabled: false,
    },
  },
})
