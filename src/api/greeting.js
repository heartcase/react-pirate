import axios from 'axios'

const url = '/greeting'

export const sayHi = () => axios.get(url)
