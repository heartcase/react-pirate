import Page from '@containers/page/index'
import Login from '@containers/login/index'

export const routeConfig = [
  {
    name: 'Home',
    path: '/',
    exact: true,
    component: Page,
    props: {}
  },
  {
    name: 'Login',
    path: '/login',
    exact: true,
    component: Login,
    props: {}
  },


]