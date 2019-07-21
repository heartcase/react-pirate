import React from 'react'
import { Link } from 'react-router-dom'
import router from './router'
import axios from 'axios'
import { Container, Menu } from 'semantic-ui-react'

axios.defaults.baseURL = window.location.origin + '/api/'

const App = props => (
  <div>
    {Object.keys(props) + ''}
    <Menu>
      <Container>
        <Menu.Item><Link to="/">Home</Link><br /></Menu.Item>
        <Menu.Item><Link to="/login">Login</Link><br /></Menu.Item>
        <Menu.Item><Link to="/pages/">Pages/</Link><Link to="/pages/page-1">Page 1</Link><br /></Menu.Item>
        <Menu.Item><Link to="/pages/">Pages/</Link><Link to="/pages/page-2">Page 2</Link><br /></Menu.Item>
      </Container>
    </Menu>
    {router}
  </div>
)

export default App