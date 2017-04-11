import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import EStyleSheet from 'react-native-extended-stylesheet'
import Colors from '../constants/colors'
import { LoadingScreen } from '../src/commons'

beforeAll(() => { // eslint-disable-line
  EStyleSheet.build(Colors)
})

describe('LoadingScreen', () => {
  test('renders correctly', () => {
    const loading = renderer.create(
      <LoadingScreen />
    ).toJSON()

    expect(loading).toMatchSnapshot()
  })
})
