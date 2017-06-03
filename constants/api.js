import { AsyncStorage } from 'react-native'
import axios from 'axios'

import secretConfig from './secrets'

const { API_URL, googleMapsApiKey } = secretConfig
const GETCODE_API = 'https://maps.googleapis.com/maps/api/geocode/json?'

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

const geoAddress = {}

const latLonExist = (key) => {
  if (key in geoAddress) {
    return geoAddress[key]
  }
  return false
}

export const getAddress = async (lat, lon) => {
  try {
    const key = `${lat},${lon}`
    const recurrentAddress = latLonExist(key)
    if (recurrentAddress) {
      return recurrentAddress
    }

    const { data } = await axios.get(`${GETCODE_API}latlng=${lat},${lon}&key=${googleMapsApiKey}`)
    const { results, status } = data
    if (status === 'OK') {
      geoAddress[key] = results[0].formatted_address
      return results[0].formatted_address
    }
    return false
  } catch (error) {
    console.log(error) // eslint-disable-line
    return false
  }
}
