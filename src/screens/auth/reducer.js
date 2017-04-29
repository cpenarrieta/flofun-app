import {
  CHANGE_PHONE,
  CHANGE_CODE,
  START_CREATE_USER,
  DONE_CREATE_USER,
  DONE_VALIDATE_CODE,
} from './actions'

const INITIAL_STATE = {
  logged: false,
  phoneLogin: {
    phone: '',
    code: '',
    codeSent: false,
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
        phoneLogin: {
          code,
          phone: state.phoneLogin.phone,
        },
      }
    }
    case START_CREATE_USER:
      return {
        ...state,
      }
    case DONE_CREATE_USER:
      return {
        ...state,
      }
    case DONE_VALIDATE_CODE:
      return {
        ...state,
        logged: true,
      }
    default:
      return state
  }
}
