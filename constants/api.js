const API_URL = 'http://localhost:8080'

export const fetchFlowers = () => {
  return fetch(`${API_URL}/api/flower`)
    .then(res => res.json())
}
