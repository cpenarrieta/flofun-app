import { StackNavigator, DrawerNavigator } from 'react-navigation'

import HomeNavigator from './HomeNavigator'
import Colors from '../../constants/colors'

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
      Profile: { screen: StackNavigator({ ProfileScreen: { screen: ProfileScreen } }) },
      SignOut: { screen: SignOut },
    }, {
      contentOptions: {
        activeBackgroundColor: Colors.purpleDarkColor,
        labelStyle: {
          fontSize: 20,
        },
        activeTintColor: Colors.whiteColor,
        inactiveTintColor: Colors.purpleDarkColor,
      },
    }),
    navigationOptions: {
      header: null,
      gesturesEnabled: false,

    },
  },
}, {
  lazy: true,
  mode: 'modal',
  navigationOptions: {
    gesturesEnabled: false,
  },
})
