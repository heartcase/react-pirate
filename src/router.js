import React from 'react'
import Page from '@containers/page'
import Login from '@containers/login'
import { Switch, Route } from 'react-router-dom'

const renderProps = (Components, props = {}) => (() => <Components {...props} />)

// define a tree like mapping for the website
// the properties is equivalent to the <Route> props
export const sitemap = [
  {
    path: '/',
    exact: true,
    render: renderProps(Page, { pageName: 'Home' })
  },
  {
    path: '/pages',
    exact: true,
    render: renderProps(Page, { pageName: 'Pages' }),
    routes: [
      {
        path: '/pages/page-1',
        exact: true,
        render: renderProps(Page, { pageName: 'Page-1' }),
      },
      {
        path: '/pages/page-2',
        exact: true,
        render: renderProps(Page, { pageName: 'Page-2' }),
      },
    ]
  },
  {
    path: '/login',
    exact: true,
    render: renderProps(Login, { pageName: 'Pages' }),
  },
  // catch unmatched path
  {
    render: renderProps(Page, { pageName: 'Page Not Found' })
  }
]

// transform to a flat array
const routes = []
const addRoutes = route => {
  routes.push(route)
  if (route.routes) {
    route.routes.forEach(addRoutes);
  }
}
sitemap.forEach(addRoutes)

export default (
  <Switch>
    {
      routes.map(
        route => <Route {...route} key={route.path || 'not-found'} />
      )
    }
  </Switch>
)