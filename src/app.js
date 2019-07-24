import React from 'react'

import { useInjectReducer, useInjectSaga, useConnect } from '@hooks'
import RouterContainer from './router'

import reducer from '@global/reducer'
import { actionCreators } from '@global/action'
import { key } from '@global/constant'

const App = () => {
  useInjectReducer({ key, reducer })
  useConnect({ actions: actionCreators })
  return (
    <>
      <RouterContainer />
    </>
  )
}

export default App