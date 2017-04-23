import { combineReducers } from 'redux'
import {
  FlowerShopReducer,
} from '../screens'
import navigation from '../routes/navigationReducer'

export default combineReducers({
  flowerShop: FlowerShopReducer,
  navigation,
})
