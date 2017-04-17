import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import EStyleSheet from 'react-native-extended-stylesheet'
import Colors from '../constants/colors'
import FlowerItem from '../src/screens/home/components/FlowerItem'

beforeAll(() => {
  EStyleSheet.build(Colors)
})

describe('FlowerItem', () => {
  test('renders correctly', () => {
    const flower = shallow(
      <FlowerItem
        flower={{
          title: 'foo flower',
          image: 'https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg',
          price: 32.00,
        }}
      />
    )

    expect(toJson(flower)).toMatchSnapshot()
  })
})
