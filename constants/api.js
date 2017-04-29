import axios from 'axios'
import secretConfig from './secrets'

const { FUNCTIONS_URL, API_URL } = secretConfig

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
    const { data } = await axios.post(`${FUNCTIONS_URL}/createUser`, { phone })
    return data
  } catch (error) {
    console.error(error) // eslint-disable-line
  }
}

export const requestOneTimePassword = async (phone) => {
  try {
    const { data } = await axios.post(`${FUNCTIONS_URL}/requestOneTimePassword`, { phone })
    return data
  } catch (error) {
    console.error(error) // eslint-disable-line
  }
}

export const verifyOneTimePassword = async (phone, code) => {
  try {
    const { data } = await axios.post(`${FUNCTIONS_URL}/verifyOneTimePassword`, { phone, code })
    return data
  } catch (error) {
    console.error(error) // eslint-disable-line
  }
}
