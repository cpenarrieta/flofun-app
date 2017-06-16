import { CHANGE_CARD_NAME, CHANGE_CARD_NUMBER, CHANGE_CCV, CHANGE_EXPIRATION_DATE } from './actions'

const INITIAL_STATE = {
  cardName: '',
  cardNumber: '',
  ccv: '',
  expirationDate: '',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_CARD_NAME:
      return {
        ...state,
        cardName: action.payload,
      }
    case CHANGE_CARD_NUMBER:
      return {
        ...state,
        cardNumber: action.payload,
      }
    case CHANGE_CCV:
      return {
        ...state,
        ccv: action.payload,
      }
    case CHANGE_EXPIRATION_DATE:
      return {
        ...state,
        expirationDate: action.payload,
      }
    default:
      return state
  }
}
