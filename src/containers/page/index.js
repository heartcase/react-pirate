import React from 'react'

import { useInjectReducer, useInjectSaga, useConnect } from '@hooks'
import Component from '@components/page'

import reducer from './reducer'
import selectors from './selectors'
import { actionCreators } from './action'
import saga from './saga'
import { key } from './constant'

const Container = props => {
  useInjectReducer({ key, reducer })
  useInjectSaga({ key, saga })
  return <Component {...useConnect({ selectors, actions: actionCreators })} {...props} />
}

export default Container