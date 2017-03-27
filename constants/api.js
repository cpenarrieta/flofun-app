import axios from 'axios'

const API_URL = 'https://10a94547.ngrok.io/api'

export const fetchFlowers = async () => {
  const { data } = await axios.get(`${API_URL}/flower`)
  return data.flowers
}
