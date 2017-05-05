import { Alert, AsyncStorage } from 'react-native'
import { Facebook } from 'expo'
import axios from 'axios'

import secrets from '../../../constants/secrets'
import {
  createUser,
  requestOneTimePassword,
  verifyOneTimePassword,
} from '../../../constants/api'

export const CHANGE_PHONE = 'CHANGE_PHONE'
export const CHANGE_CODE = 'CHANGE_CODE'
export const START_CREATE_USER = 'START_CREATE_USER'
export const DONE_CREATE_USER = 'DONE_CREATE_USER'
export const DONE_VALIDATE_CODE = 'DONE_VALIDATE_CODE'
export const START_VALIDATE_CODE = 'START_VALIDATE_CODE'
export const PROCESS_ERROR = 'PROCESS_ERROR'
export const TOKEN_PRESENT = 'TOKEN_PRESENT'
export const SIGN_OUT = 'SIGN_OUT'
export const FACEBOOK_LOGIN_FAIL = 'FACEBOOK_LOGIN_FAIL'
export const FACEBOOK_LOGIN_SUCCESS = 'FACEBOOK_LOGIN_SUCCESS'

export const handleChangePhone = (phone) => ({
  type: CHANGE_PHONE,
  payload: phone,
})

export const handleChangeCode = (code) => ({
  type: CHANGE_CODE,
  payload: code,
})

export const startCreateUserAndSendCode = () => ({
  type: START_CREATE_USER,
})

export const doneCreateUserAndSendCode = (phone) => ({
  type: DONE_CREATE_USER,
  payload: phone,
})

export const processError = () => ({
  type: PROCESS_ERROR,
})

export const createUserAndSendCode = (phone, navigation) => async (dispatch) => {
  dispatch(startCreateUserAndSendCode())

  try {
    const { success: createUserSuccess } = await createUser({ uid: `+1${phone}`, source: 'phone', phone: `+1${phone}` })
    if (createUserSuccess) {
      const { success: requestOneTimePasswordSuccess } = await requestOneTimePassword(`+1${phone}`)
      if (requestOneTimePasswordSuccess) {
        dispatch(doneCreateUserAndSendCode(phone))
        navigation.navigate('EnterCodeScreen')
      } else {
        dispatch(processError())
        Alert.alert('Error', 'Error sending sms')
      }
    } else {
      dispatch(processError())
      Alert.alert('Error', 'This phone is already being used')
    }
  } catch (err) {
    dispatch(processError())
    Alert.alert('Error', 'Error sending message, please try again')
  }
}

export const startValidateCode = () => ({
  type: START_VALIDATE_CODE,
})

export const doneValidateCode = (phone) => ({
  type: DONE_VALIDATE_CODE,
  payload: phone,
})

export const validateCode = (phone, code) => async dispatch => {
  dispatch(startValidateCode())

  try {
    const { success, token } = await verifyOneTimePassword(`+1${phone}`, code)

    if (success) {
      await AsyncStorage.multiSet([['token', token], ['phone', phone]])
      dispatch(doneValidateCode(phone))
    } else {
      dispatch(processError())
      Alert.alert('Error', 'Incorrect Code')
    }
  } catch (err) {
    dispatch(processError())
    Alert.alert('Error', 'Error validating code')
  }
}

export const signInWithToken = () => async dispatch => {
  const token = await AsyncStorage.getItem('token')
  if (!token) return

  dispatch(tokenIsPresent())
}

export const tokenIsPresent = () => ({
  type: TOKEN_PRESENT,
})

export const signOut = () => ({
  type: SIGN_OUT,
})

export const doFacebookLogin = () => async dispatch => {
  const { type, token } = await Facebook.logInWithReadPermissionsAsync(secrets.facebookAppId, {
    permissions: ['public_profile'],
  })

  if (type === 'cancel') {
    return dispatch(signOut())
  }

  const { data } = await axios.get(`https://graph.facebook.com/me?access_token=${token}`)
  await createUser({ uid: data.id, source: 'facebook', name: data.name })

  await AsyncStorage.setItem('token', token)
  dispatch(tokenIsPresent())
}
