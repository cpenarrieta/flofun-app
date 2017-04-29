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

export const createUserAndSendCode = (phone, navigation) => async (dispatch) => {
  dispatch(startCreateUserAndSendCode())

  try {
    const { success: createUserSuccess } = await createUser(`+1${phone}`)
    if (createUserSuccess) {
      const { success: requestOneTimePasswordSuccess } = await requestOneTimePassword(`+1${phone}`)
      if (requestOneTimePasswordSuccess) {
        dispatch(doneCreateUserAndSendCode(phone))
        navigation.navigate('EnterCodeScreen')
      } else {
        // TODO
      }
    } else {
      // TODO
    }
  } catch (err) {
    console.log(err) //eslint-disable-line
  }
}

export const doneValidateCode = (phone, token) => ({
  type: DONE_VALIDATE_CODE,
  payload: { phone, token },
})

export const validateCode = (phone, code) => async (dispatch) => {
  try {
    const { success, token } = await verifyOneTimePassword(`+1${phone}`, code)

    if (success) {
      dispatch(doneValidateCode(phone, token))
    }
  } catch (err) {
    console.log(err) //eslint-disable-line
  }
}
