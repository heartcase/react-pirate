import React from 'react'
import { routeConfig } from '@config/index'
import { Switch, Route } from 'react-router-dom'

// transform to a flat array
const routes = []
const addRoutes = route => {
  routes.push(route)
  if (route.routes) {
    route.routes.forEach(addRoutes);
  }
}
routeConfig.forEach(addRoutes)

// create route from config
const createRoute = config => {
  const { path, props, name, exact = true } = config
  return <Route
    exact={exact}
    path={path}
    key={name || 'not-found'}
    render={
      () => <config.component {...props} />
    }
  />
}

const RouterContainer = () => {
  return (
    <Switch>
      {routes.map(createRoute)}
    </Switch>
  )
}

export default RouterContainer  