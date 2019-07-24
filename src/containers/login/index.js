import React from 'react'

import { useInjectSaga, useConnect } from '@hooks/index'
import Component from '@components/login/index'

import { actionCreators } from './action'
import saga from './saga'
import { key } from './constant'

const Container = props => {
  useInjectSaga({ key, saga })
  return <Component {...useConnect({ actions: actionCreators })} {...props} />
}
export default Container