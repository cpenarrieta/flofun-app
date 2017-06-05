import { combineReducers } from 'redux'
import {
  FlowerShopReducer,
  AuthReducer,
  ContactDetailsReducer,
  ShippingReducer,
} from '../screens'
import navigation from '../routes/navigationReducer'

export default combineReducers({
  navigation,
  auth: AuthReducer,
  shipping: ShippingReducer,
  flowerShop: FlowerShopReducer,
  contactDetails: ContactDetailsReducer,
})
