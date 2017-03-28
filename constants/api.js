import axios from 'axios'

const API_URL = 'https://ed7dcbf1.ngrok.io/api'

export const fetchFlowers = async () => {
  const { data } = await axios.get(`${API_URL}/flower`)
  return data.flowers
}
