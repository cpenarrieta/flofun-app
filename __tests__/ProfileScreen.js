import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import EStyleSheet from 'react-native-extended-stylesheet'
import Colors from '../constants/colors'
import { ProfileScreen } from '../src/screens/profile'

beforeAll(() => {
  EStyleSheet.build(Colors)
})

describe('ProfileScreen', () => {
  test('renders correctly', () => {
    const profile = shallow(<ProfileScreen />)

    expect(toJson(profile)).toMatchSnapshot()
  })
})
