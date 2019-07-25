import React from 'react'
import { routeConfig } from '@config/index'
import { Switch, Route } from 'react-router-dom'
import { useLocation } from '@hooks/index'

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
const createRoute = (config, globalProps = {}) => {
  const { path, props, name, exact = true, requireLogin } = config
  const { username } = globalProps
  const { navigate } = useLocation()
  return <Route
    exact={exact}
    path={path}
    key={name || 'not-found'}
    render={
      () => {
        if (requireLogin && !username) {
          navigate('/')
          return <></>
        }
        return <config.component {...props} {...globalProps} />
      }
    }
  />
}

const RouterContainer = props => {
  return (
    <Switch>
      {routes.map(config => createRoute(config, props))}
    </Switch>
  )
}

export default RouterContainer  