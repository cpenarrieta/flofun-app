import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import EStyleSheet from 'react-native-extended-stylesheet'
import Colors from '../constants/colors'
import Footer from '../src/commons/Footer'

beforeAll(() => {
  EStyleSheet.build(Colors)
})

describe('Footer', () => {
  test('renders correctly', () => {
    const footer = shallow(<Footer />)

    expect(toJson(footer)).toMatchSnapshot()
  })
})
