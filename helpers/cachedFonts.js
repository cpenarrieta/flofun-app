import { Font } from 'expo'

export const cachedFonts = fonts =>
  fonts.map(font => Font.loadAsync(font))
