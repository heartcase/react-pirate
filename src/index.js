import '@style/github-markdown.css'
import 'semantic-ui-css/semantic.min.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'

import store from './store.js'
import App from './app.js'

// creating root element 
const root = document.createElement('div')
root.id = 'root'
document.body.appendChild(root)

// set base url for axios
axios.defaults.baseURL = window.location.origin + '/api/'

// render into dom
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)