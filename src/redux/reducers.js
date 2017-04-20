import { combineReducers } from 'redux'
import {
  FlowerShopReducer,
} from '../screens'

export default combineReducers({
  flowerShop: FlowerShopReducer,
})
