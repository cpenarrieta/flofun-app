import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import EStyleSheet from 'react-native-extended-stylesheet'
import { ProfileScreen } from '../src/screens/profile'
import Colors from '../constants/colors'

beforeAll(() => { // eslint-disable-line
  EStyleSheet.build(Colors)
});

describe('ProfileScreen', () => {
  test('renders correctly', () => {
    const profile = renderer.create(
      <ProfileScreen />
    ).toJSON()

    expect(profile).toMatchSnapshot()
  })
})
