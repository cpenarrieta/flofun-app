import {
  CHANGE_PHONE,
  CHANGE_CODE,
} from './actions'

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
    case CHANGE_CODE: {
      const code = action.payload

      return {
        ...state,
        phoneLogin: { code },
      }
    }
    default:
      return state
  }
}
