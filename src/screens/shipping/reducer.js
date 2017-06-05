import {
  CHANGE_ADDRESS,
  CHANGE_CURRENT_POSITION,
  CHANGE_MARKER_POSITION,
} from './actions'

const INITIAL_STATE = {
  shippingAddress: {
    address: '',
  },
  currentPosition: null,
  markerPosition: null,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_ADDRESS:
      return {
        ...state,
        shippingAddress: action.shippingAddress,
      }
    case CHANGE_CURRENT_POSITION:
      return {
        ...state,
        currentPosition: action.currentPosition,
      }
    case CHANGE_MARKER_POSITION:
      return {
        ...state,
        markerPosition: action.markerPosition,
      }
    default:
      return state
  }
}
