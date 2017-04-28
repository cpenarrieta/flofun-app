import axios from 'axios'
import {
  API_URL,
  FUNCTIONS_URL,
} from '../constants/secrets'

export const fetchFlowers = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/flower`)
    return data.flowers
  } catch (error) {
    console.error(error) // eslint-disable-line
  }
}

export const createUser = async (phone) => {
  try {
    axios.post(`${FUNCTIONS_URL}/createUser`, { phone });
  } catch (error) {
    console.error(error) // eslint-disable-line
  }
}

export const requestOneTimePassword = async (phone) => {
  try {
    axios.post(`${FUNCTIONS_URL}/requestOneTimePassword`, { phone });
  } catch (error) {
    console.error(error) // eslint-disable-line
  }
}
