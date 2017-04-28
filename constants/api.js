import axios from 'axios'
import { API_URL } from '../constants/secrets'

export const fetchFlowers = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/flower`)
    return data.flowers
  } catch (error) {
    console.error(error) // eslint-disable-line
  }
}
