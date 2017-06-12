import {
  FETCH_FLOWERS,
  SELECT_FLOWER,
  REMOVE_FLOWER,
  CHANGE_MESSAGE,
} from './actions'

const INITIAL_STATE = {
  selectedFlowers: [],
  flowers: {
    data: [],
    isFetched: false,
    error: {
      on: false,
      message: null,
    },
  },
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `${FETCH_FLOWERS}_FULFILLED`:
      return {
        ...state,
        flowers: {
          data: action.payload.map((f) => Object.assign(f, { quantity: 1 })),
          isFetched: true,
          error: {
            on: false,
            message: null,
          },
        },
      }
    case `${FETCH_FLOWERS}_REJECT`:
      return {
        ...state,
        flowers: {
          data: [],
          isFetched: true,
          error: {
            on: true,
            message: 'Error when fetching flowers',
          },
        },
      }
    case SELECT_FLOWER: {
      const tmpSelectedFlowers = state.selectedFlowers.slice()
      let modalMessage = ''
      if (tmpSelectedFlowers.length === 3) {
        modalMessage = 'Cart Full'
      } else {
        tmpSelectedFlowers.push({ ...action.payload, message: '' })
      }

      return {
        ...state,
        selectedFlowers: tmpSelectedFlowers,
        modalMessage,
      }
    }
    case REMOVE_FLOWER: {
      const newSelectedFlowers = state.selectedFlowers.filter((f) => f._id !== action.payload._id)

      return {
        ...state,
        selectedFlowers: newSelectedFlowers,
      }
    }
    case CHANGE_MESSAGE: {
      const tmpSelectedFlowers = state.selectedFlowers.slice()
      tmpSelectedFlowers[action.payload.key].message = action.payload.message

      return {
        ...state,
        selectedFlowers: tmpSelectedFlowers,
      }
    }
    default:
      return state
  }
}
