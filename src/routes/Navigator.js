import { DrawerNavigator } from 'react-navigation'
import HomeNavigator from './HomeNavigator'

import {
  ProfileScreen,
} from '../screens'

export default DrawerNavigator({
  Home: { screen: HomeNavigator },
  Profile: { screen: ProfileScreen },
})
