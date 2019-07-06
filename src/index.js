import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'
import store from './store.js'
import App from './app.js'

// creating root element 
const root = document.createElement('div')
root.id = 'root'
document.body.appendChild(root)

// render into dom
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)