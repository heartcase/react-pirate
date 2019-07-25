import Page from '@containers/page/index'
import Login from '@containers/login/index'

export const routeConfig = [
  {
    name: 'Boards',
    key: 'boards',
    path: '/',
    exact: true,
    component: Page,
    props: {}
  },
  {
    name: 'Career',
    key: 'career',
    path: '/career',
    exact: true,
    component: Page,
    requireLogin: true,
    props: {},
    routes: [
      {
        name: 'Page-1',
        path: '/pages/page-1',
        exact: true,
        component: Page,
        props: {}
      },
      {
        name: 'Page-2',
        path: '/pages/page-2',
        exact: true,
        component: Page,
        props: {}
      },
    ]
  },
  {
    name: 'Login',
    path: '/login',
    exact: true,
    component: Login,
    props: {},
    hide: true
  },


]