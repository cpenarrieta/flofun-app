import { AsyncStorage } from 'react-native'
import axios from 'axios'

import secretConfig from './secrets'

const { API_URL } = secretConfig

export const fetchFlowers = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/flower`)
    return data.flowers
  } catch (error) {
    console.log(error) // eslint-disable-line
  }
}

export const createUser = async (user, provider) => {
  try {
    const { data } = await axios.post(`${API_URL}/auth/${provider}`, user)
    return data
  } catch (error) {
    console.log(error.response.data) // eslint-disable-line
    return error.response
  }
}

export const validateCode = async (req) => {
  try {
    const { data } = await axios.post(`${API_URL}/auth/validateCode`, req)
    return data
  } catch (error) {
    console.log(error.response.data) // eslint-disable-line
    return error.response
  }
}

export const signOutUser = async () => {
  await AsyncStorage.multiRemove(['token', 'phone'])
}

export const currentUser = async token => {
  axios.defaults.headers.common.Authorization = token
  try {
    const { data } = await axios.post(`${API_URL}/me/`)
    return data
  } catch (error) {
    console.log(error) // eslint-disable-line
    return false
  }
}
