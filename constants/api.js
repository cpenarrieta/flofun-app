import { AsyncStorage } from 'react-native'
import firebase from 'firebase'
import axios from 'axios'

import secretConfig from './secrets'

const { FUNCTIONS_URL, API_URL } = secretConfig

export const fetchFlowers = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/flower`)
    return data.flowers
  } catch (error) {
    console.log(error) // eslint-disable-line
  }
}

export const createUser = async (phone) => {
  try {
    const { data } = await axios.post(`${FUNCTIONS_URL}/createUser`, { phone })
    return data
  } catch (error) {
    console.log(error.response.data) // eslint-disable-line
    return error.response
  }
}

export const requestOneTimePassword = async (phone) => {
  try {
    const { data } = await axios.post(`${FUNCTIONS_URL}/requestOneTimePassword`, { phone })
    return data
  } catch (error) {
    console.log(error.response.data) // eslint-disable-line
    return error.response
  }
}

export const verifyOneTimePassword = async (phone, code) => {
  try {
    const { data } = await axios.post(`${FUNCTIONS_URL}/verifyOneTimePassword`, { phone, code })
    return data
  } catch (error) {
    console.log(error.response.data) // eslint-disable-line
    return error.response
  }
}

export const signInWithToken = async () => {
  const token = await AsyncStorage.getItem('token')
  if (!token) return false

  let success = false
  await firebase.auth().signInWithCustomToken(token)
    .then(user => { // eslint-disable-line
      success = true
    })
    .catch(err => {
      console.log(err) // eslint-disable-line
      success = false
    })
  return success
}

export const signOut = async () => {
  await AsyncStorage.removeItem('token')
  await firebase.auth().signOut()
}
