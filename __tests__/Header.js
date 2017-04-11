import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import EStyleSheet from 'react-native-extended-stylesheet'
import Colors from '../constants/colors'
import { Header } from '../src/commons'

beforeAll(() => { // eslint-disable-line
  EStyleSheet.build(Colors)
})

describe('Header', () => {
  test('renders correctly', () => {
    const loading = renderer.create(
      <Header title='foo test' />
    ).toJSON()

    expect(loading).toMatchSnapshot()
  })
})
