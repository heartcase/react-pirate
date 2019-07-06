import React from 'react'
import actions from './action'
import reducer from './reducer'
import selectors from './selectors'
import Component from 'components/page'
import { useInjectReducer, useConnect } from 'hooks'

const Container = props => {
  const key = 'page'
  useInjectReducer({ key, reducer })
  return <Component {...useConnect({ key, selectors, actions })} {...props} />
}

export default Container