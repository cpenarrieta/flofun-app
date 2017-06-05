export const CHANGE_ADDRESS = 'CHANGE_ADDRESS'
export const CHANGE_CURRENT_POSITION = 'CHANGE_CURRENT_POSITION'
export const CHANGE_MARKER_POSITION = 'CHANGE_MARKER_POSITION'

export const changeAddress = (shippingAddress) => ({
  type: CHANGE_ADDRESS,
  shippingAddress,
})

export const changeCurrentPosition = (currentPosition) => ({
  type: CHANGE_CURRENT_POSITION,
  currentPosition,
})

export const changeMarkerPosition = (markerPosition) => ({
  type: CHANGE_MARKER_POSITION,
  markerPosition,
})
