import { CHANGE_SENDER, CHANGE_RECIPIENT } from './actions'

const INITIAL_STATE = {
  senderName: '',
  recipientName: '',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_SENDER:
      return {
        ...state,
        senderName: action.payload,
      }
    case CHANGE_RECIPIENT:
      return {
        ...state,
        recipientName: action.payload,
      }
    default:
      return state
  }
}
