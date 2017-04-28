import { combineReducers } from 'redux'
import {
  FlowerShopReducer,
  AuthReducer,
} from '../screens'
import navigation from '../routes/navigationReducer'

export default combineReducers({
  flowerShop: FlowerShopReducer,
  navigation,
  auth: AuthReducer,
})
