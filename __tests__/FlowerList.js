import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import EStyleSheet from 'react-native-extended-stylesheet'
import Colors from '../constants/colors'
import { FlowerList } from '../src/screens/flowersShop/components/'

beforeAll(() => {
  EStyleSheet.build(Colors)
})

const img = 'https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg'
const flowers = [
  { title: 'flower 1', image: img, price: 10.90 },
  { title: 'flower 2', image: img, price: 12.50 },
  { title: 'flower 3', image: img, price: 14.20 },
]

describe('FlowerList', () => {
  test('renders correctly', () => {
    const flowersElement = shallow(
      <FlowerList
        flowers={flowers}
        selectedFlowers={[]}
      />
    )

    expect(toJson(flowersElement)).toMatchSnapshot()
  })
})
