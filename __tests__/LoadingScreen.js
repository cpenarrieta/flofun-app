import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import EStyleSheet from 'react-native-extended-stylesheet'
import Colors from '../constants/colors'
import { LoadingScreen } from '../src/commons'

beforeAll(() => {
  EStyleSheet.build(Colors)
})

describe('LoadingScreen', () => {
  test('renders correctly', () => {
    const loading = shallow(
      <LoadingScreen />
    )

    expect(toJson(loading)).toMatchSnapshot()
  })
})
