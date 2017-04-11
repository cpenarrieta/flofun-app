import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import EStyleSheet from 'react-native-extended-stylesheet'
import Colors from '../constants/colors'
import { Header } from '../src/commons'

beforeAll(() => {
  EStyleSheet.build(Colors)
})

describe('Header', () => {
  test('renders correctly', () => {
    const header = shallow(
      <Header title='foo test' />
    )

    expect(toJson(header)).toMatchSnapshot()
  })
})
