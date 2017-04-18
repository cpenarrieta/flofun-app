import { fetchFlowers } from '../../../constants/api'

export const FETCH_FLOWERS = 'FETCH_FLOWERS'
export const SELECT_FLOWER = 'SELECT_FLOWER'

export const fetchAvailableFlowers = () => ({
  type: FETCH_FLOWERS,
  payload: fetchFlowers(),
})

export const selectFlowerAction = (flower) => ({
  type: SELECT_FLOWER,
  payload: flower,
})
