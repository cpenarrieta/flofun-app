import { Font } from 'expo'

const cachedFonts = fonts =>
  fonts.map(font => Font.loadAsync(font))

export const fontAssets = cachedFonts([
  { montserrat: require('../assets/fonts/Montserrat-Regular.ttf') },
  { montserratBold: require('../assets/fonts/Montserrat-Bold.ttf') },
  { montserratLight: require('../assets/fonts/Montserrat-Light.ttf') },
  { montserratMedium: require('../assets/fonts/Montserrat-Medium.ttf') },
])
