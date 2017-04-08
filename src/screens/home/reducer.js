import {
  FETCH_FLOWERS
} from './actions'

const INITIAL_STATE = {
  flowers: {
    data: [],
    isFetched: false,
    error: {
      on: false,
      message: null,
    }
  }
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `${FETCH_FLOWERS}_PENDING`:
      return INITIAL_STATE
    case `${FETCH_FLOWERS}_FULFILLED`:
      return {
        flowers: {
          data: action.payload,
          isFetched: true,
          error: {
            on: false,
            message: null,
          }
        }
      }
    case `${FETCH_FLOWERS}_REJECT`:
      return {
        flowers: {
          data: [],
          isFetched: true,
          error: {
            on: true,
            message: 'Error when fetching flowers',
          }
        }
      }
    default:
      return state
  }
}
