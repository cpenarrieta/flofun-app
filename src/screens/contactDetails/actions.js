export const CHANGE_SENDER = 'CHANGE_SENDER'
export const CHANGE_RECIPIENT = 'CHANGE_RECIPIENT'

export const handleChangeSender = sender => ({
  type: CHANGE_SENDER,
  payload: sender,
})

export const handleChangeRecipient = recipient => ({
  type: CHANGE_RECIPIENT,
  payload: recipient,
})
