import { FETCH_FLOWERS, fetchAvailableFlowers } from '../src/screens/home/actions'

jest.mock('../constants/api.js')

describe('actions', () => {
  it('should create an action to fetchAvailableFlowers', () => {
    const expectedAction = {
      type: FETCH_FLOWERS,
      payload: [
        { title: 'flower ', image: 'img1', price: 30 },
        { title: 'flower ', image: 'img2', price: 40 },
        { title: 'flower ', image: 'img3', price: 50 },
      ],
    }

    expect(fetchAvailableFlowers()).toEqual(expectedAction)
  })
})
