import { Alert, AsyncStorage } from 'react-native'
import { Facebook, Google } from 'expo'
import axios from 'axios'

import secrets from '../../../constants/secrets'
import {
  createUser,
  validateCode as validateCodeApi,
  currentUser,
  signOutUser,
} from '../../../constants/api'

export const CHANGE_PHONE = 'CHANGE_PHONE'
export const CHANGE_CODE = 'CHANGE_CODE'
export const START_CREATE_USER = 'START_CREATE_USER'
export const DONE_CREATE_USER = 'DONE_CREATE_USER'
export const DONE_VALIDATE_CODE = 'DONE_VALIDATE_CODE'
export const START_VALIDATE_CODE = 'START_VALIDATE_CODE'
export const PROCESS_ERROR = 'PROCESS_ERROR'
export const TOKEN_VALID = 'TOKEN_VALID'
export const SIGN_OUT = 'SIGN_OUT'
export const FACEBOOK_LOGIN_FAIL = 'FACEBOOK_LOGIN_FAIL'
export const FACEBOOK_LOGIN_SUCCESS = 'FACEBOOK_LOGIN_SUCCESS'

export const handleChangePhone = phone => ({
  type: CHANGE_PHONE,
  payload: phone,
})

export const handleChangeCode = code => ({
  type: CHANGE_CODE,
  payload: code,
})

export const startCreateUserAndSendCode = () => ({
  type: START_CREATE_USER,
})

export const doneCreateUserAndSendCode = phone => ({
  type: DONE_CREATE_USER,
  payload: phone,
})

export const processError = () => ({
  type: PROCESS_ERROR,
})

export const createUserAndSendCode = (phone, navigation) => async dispatch => {
  dispatch(startCreateUserAndSendCode())

  try {
    const { success } = await createUser({ phone: `+1${phone}` }, 'phone')
    if (success) {
      dispatch(doneCreateUserAndSendCode(phone))
      navigation.navigate('EnterCodeScreen')
    } else {
      dispatch(processError())
      Alert.alert('Error', 'Error sending sms')
    }
  } catch (err) {
    dispatch(processError())
    Alert.alert('Error', 'Error sending message, please try again')
  }
}

export const startValidateCode = () => ({
  type: START_VALIDATE_CODE,
})

export const doneValidateCode = phone => ({
  type: DONE_VALIDATE_CODE,
  payload: phone,
})

export const validateCode = (phone, code) => async dispatch => {
  dispatch(startValidateCode())

  try {
    const { token, success, user } = await validateCodeApi({ phone: `+1${phone}`, code })

    if (success) {
      axios.defaults.headers.common.Authorization = token
      await AsyncStorage.setItem('token', token)
      dispatch(tokenIsValid(user))
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

  const user = await currentUser(token)
  if (!user) {
    return await signOutUser()
  }

  dispatch(tokenIsValid(user))
}

export const tokenIsValid = user => ({
  type: TOKEN_VALID,
  user,
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

  const { token: apiToken, success, user } = await createUser({ token }, 'facebook')
  if (success) {
    axios.defaults.headers.common.Authorization = apiToken
    await AsyncStorage.setItem('token', apiToken)
    return dispatch(tokenIsValid(user))
  }

  return dispatch(signOut())
}

export const doGoogleLogin = () => async dispatch => {
  const { type, accessToken } = await Google.logInAsync({
    androidClientId: secrets.googleTokenAndroid,
    iosClientId: secrets.googleTokenIos,
    scopes: ['profile', 'email'],
  })

  if (type === 'cancel') {
    return dispatch(signOut())
  }

  const { token: apiToken, success, user } = await createUser({ token: accessToken }, 'google')
  if (success) {
    axios.defaults.headers.common.Authorization = apiToken
    await AsyncStorage.setItem('token', apiToken)
    return dispatch(tokenIsValid(user))
  }

  return dispatch(signOut())
}
