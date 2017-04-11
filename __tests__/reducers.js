import { FETCH_FLOWERS } from '../src/screens/home/actions'
import reducer from '../src/redux/reducers'

const flowers = [
  { title: 'flower 1', image: 'img1', price: 30 },
  { title: 'flower 2', image: 'img2', price: 40 },
  { title: 'flower 3', image: 'img3', price: 50 },
]

describe('Home Reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {}).home
    ).toMatchSnapshot()
  })

  it('should return the initial if pending', () => {
    expect(
      reducer(undefined, {
        type: `${FETCH_FLOWERS}_PENDING`,
      }).home
    ).toMatchSnapshot()
  })

  it('should fill the data if fullfiled', () => {
    expect(
      reducer(undefined, {
        type: `${FETCH_FLOWERS}_FULFILLED`,
        payload: flowers,
      }).home
    ).toMatchSnapshot()
  })

  it('should return the error state if rejected', () => {
    expect(
      reducer(undefined, {
        type: `${FETCH_FLOWERS}_REJECT`,
      }).home
    ).toMatchSnapshot()
  })
})
