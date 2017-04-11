import { FETCH_FLOWERS, fetchAvailableFlowers } from '../src/screens/home/actions'

jest.mock('../constants/api.js') // eslint-disable-line

describe('actions', () => {
  it('should create an action to fetchAvailableFlowers', () => {
    const expectedAction = {
      type: FETCH_FLOWERS,
      payload: [
        { title: 'flower 1', image: 'img1', price: 30 },
        { title: 'flower 2', image: 'img2', price: 40 },
        { title: 'flower 3', image: 'img3', price: 50 },
      ],
    }

    expect(fetchAvailableFlowers()).toEqual(expectedAction)
  })
})
