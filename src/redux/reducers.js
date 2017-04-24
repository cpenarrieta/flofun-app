import { combineReducers } from 'redux'
import {
  FlowerShopReducer,
  UserReducer,
} from '../screens'
import navigation from '../routes/navigationReducer'

export default combineReducers({
  flowerShop: FlowerShopReducer,
  navigation,
  user: UserReducer,
})
