import React from 'react'
import { Menu } from 'semantic-ui-react'

import { useLocation } from '@hooks/index'

const items = [
  { key: 'boards', name: 'Boards', link: true },
  { key: 'career', name: 'Career', link: true, requireLogin: true, path: '/career' },
  { key: 'assets', name: 'Assets', link: true, requireLogin: true },
  { key: 'ships', name: 'Ships', link: true, requireLogin: true },
  { key: 'crews', name: 'Crews', link: true, requireLogin: true },
  { key: 'login', name: 'Login', link: true, position: 'right', path: '/login' },
]

const HeaderView = props => {
  const { username } = props
  const { navigate } = useLocation()
  return <>
    <Menu>
      {
        items.map(item => {
          const { path = '/' } = item
          const { requireLogin, ...otherProps } = item
          return <Menu.Item {...otherProps} onClick={() => { navigate(path) }} disabled={requireLogin && !username} />
        })
      }
    </Menu>
  </>
}

export default HeaderView