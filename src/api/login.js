import axios from 'axios'

const url = '/login'

export const login = ({ username, password, token }) => axios.post(url, { data: { username, password, token } })
