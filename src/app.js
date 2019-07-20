import React from 'react'
import { Link } from 'react-router-dom'
import router from './router'
import axios from 'axios'

axios.defaults.baseURL = window.location.origin + '/api/'

const App = props => (
  <div>
    {Object.keys(props) + ''}
    <Link to="/">Home</Link><br />
    <Link to="/pages/">Pages/</Link><Link to="/pages/page-1">Page 1</Link><br />
    <Link to="/pages/">Pages/</Link><Link to="/pages/page-2">Page 2</Link><br />
    {router}
  </div>
)

export default App