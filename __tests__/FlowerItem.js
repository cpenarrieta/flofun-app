import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import EStyleSheet from 'react-native-extended-stylesheet'
import Colors from '../constants/colors'
import FlowerItem from '../src/screens/home/components/FlowerItem'

beforeAll(() => { // eslint-disable-line
  EStyleSheet.build(Colors)
})

describe('FlowerItem', () => {
  test('renders correctly', () => {
    const flower = renderer.create(
      <FlowerItem
        flower={{
          title: 'foo flower',
          image: 'https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg',
          price: 32.00,
        }}
      />
    ).toJSON()

    expect(flower).toMatchSnapshot()
  })
})
