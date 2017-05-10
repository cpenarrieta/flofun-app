export const CHANGE_CARD_NAME = 'CHANGE_CARD_NAME'
export const CHANGE_CARD_NUMBER = 'CHANGE_CARD_NUMBER'
export const CHANGE_CCV = 'CHANGE_CCV'
export const CHANGE_EXPIRATION_DATE = 'CHANGE_EXPIRATION_DATE'

export const handleChangeCardName = (cardName) => ({
  type: CHANGE_CARD_NAME,
  payload: cardName,
})

export const handleChangeCardNumber = (cardNumber) => ({
  type: CHANGE_CARD_NUMBER,
  payload: cardNumber,
})

export const handleChangeCCV = (ccv) => ({
  type: CHANGE_CCV,
  payload: ccv,
})

export const handleChangeExpirationDate = (expirationDate) => ({
  type: CHANGE_EXPIRATION_DATE,
  payload: expirationDate,
})
