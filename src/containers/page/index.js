import React from 'react'
import actions from './action'
import reducer from './reducer'
import saga from './saga'
import selectors from './selectors'
import Component from 'components/page'
import { useInjectReducer, useInjectSaga, useConnect } from 'hooks'

const Container = props => {
  const key = 'page'
  useInjectReducer({ key, reducer })
  useInjectSaga({key, saga})
  return <Component {...useConnect({ key, selectors, actions })} {...props} />
}

export default Container