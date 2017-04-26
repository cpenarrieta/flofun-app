import axios from 'axios'

const API_URL = 'https://cbd8058d.ngrok.io/api'

export const fetchFlowers = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/flower`)
    return data.flowers
  } catch (error) {
    console.error(error) // eslint-disable-line
  }
}
