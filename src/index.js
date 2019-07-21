import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import store from './store.js'
import App from './app.js'
import '@style/github-markdown.css'
import 'semantic-ui-css/semantic.min.css'

// creating root element 
const root = document.createElement('div')
root.id = 'root'
document.body.appendChild(root)

// render into dom
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)