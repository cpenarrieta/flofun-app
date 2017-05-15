import 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import Colors from '../constants/colors'
import HeaderStack from '../src/commons/HeaderStack'

beforeAll(() => {
  EStyleSheet.build(Colors)
})

describe('Header', () => {
  test('renders correctly', () => {
    expect(HeaderStack()).toMatchSnapshot()
  })
})
