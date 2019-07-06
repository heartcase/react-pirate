
import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Page from './containers/page'

const renderProps = (Components, props={}) => (() => <Components { ...props } />)

const App  = () => (
  <div>
    <Link to="/">Home</Link><br/>
    <Link to="/page-1">Page 1</Link><br/>
    <Link to="/page-2">Page 2</Link><br/>
    <Switch>
      <Route exact path="/" render={renderProps(Page, {pageName: 'Home'})} />
      <Route exact path="/page-1" render={renderProps(Page, {pageName: 'Page 1'})} />
      <Route exact path="/page-2" render={renderProps(Page, {pageName: 'Page 2'})} />
      <Route render={renderProps(Page, {pageName: 'Not Found Page'})} />
    </Switch>
  </div>
)

export default App