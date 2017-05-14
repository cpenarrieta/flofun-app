import {
  CHANGE_PHONE,
  CHANGE_CODE,
  START_CREATE_USER,
  DONE_CREATE_USER,
  DONE_VALIDATE_CODE,
  START_VALIDATE_CODE,
  PROCESS_ERROR,
  TOKEN_VALID,
  SIGN_OUT,
} from './actions'

const INITIAL_STATE = {
  logged: false,
  loading: false,
  user: {},
  phone: '',
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
        loading: true,
      }
    case DONE_CREATE_USER:
      return {
        ...state,
        loading: false,
      }
    case START_VALIDATE_CODE:
      return {
        ...state,
        loading: true,
      }
    case DONE_VALIDATE_CODE:
      return {
        ...state,
        logged: true,
        loading: false,
        phone: action.payload,
      }
    case PROCESS_ERROR:
      return {
        ...state,
        loading: false,
      }
    case TOKEN_VALID:
      return {
        ...state,
        logged: true,
        user: action.user,
      }
    case SIGN_OUT:
      return {
        ...state,
        logged: false,
      }
    default:
      return state
  }
}
