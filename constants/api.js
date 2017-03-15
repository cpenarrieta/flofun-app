import axios from 'axios'

const API_URL = 'http://localhost:8080/api'

export const fetchFlowers = async () => {
  const { data } = await axios.get(`${API_URL}/flower`)
  return data.flowers
}
