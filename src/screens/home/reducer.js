import {
  FETCH_FLOWERS,
  SELECT_FLOWER,
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
    case `${FETCH_FLOWERS}_PENDING`:
      return INITIAL_STATE
    case `${FETCH_FLOWERS}_FULFILLED`:
      return {
        selectedFlowers: [],
        flowers: {
          data: action.payload,
          isFetched: true,
          error: {
            on: false,
            message: null,
          },
        },
      }
    case `${FETCH_FLOWERS}_REJECT`:
      return {
        selectedFlowers: [],
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
      tmpSelectedFlowers.push(action.payload)
      return {
        ...state,
        selectedFlowers: tmpSelectedFlowers,
      }
    }
    default:
      return state
  }
}
