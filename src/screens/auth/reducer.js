import { CHANGE_PHONE } from './actions'

const INITIAL_STATE = {
  logged: false,
  phoneLogin: {
    phone: '',
    code: '',
  },
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_PHONE: {
      const phone = action.payload

      return {
        ...state,
        phoneLogin: { phone },
      }
    }
    default:
      return state
  }
}
