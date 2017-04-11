import { fetchFlowers } from '../../../constants/api'

export const FETCH_FLOWERS = 'FETCH_FLOWERS'

export const fetchAvailableFlowers = () => ({
  type: FETCH_FLOWERS,
  payload: fetchFlowers(),
})
