import React, { useRef } from 'react'

import { useInjectReducer, useConnect } from '@hooks'
import RouterContainer from './router'
import HeaderContainer from '@containers/header/index'

import reducer from '@global/reducer'
import { actionCreators } from '@global/action'
import { key } from '@global/constant'
import selectors from '@global/selectors'

const App = () => {
  useInjectReducer({ key, reducer })
  const injectProps = useConnect({ selectors, actions: actionCreators })
  return (
    <>
      <HeaderContainer {...injectProps} />
      <RouterContainer {...injectProps} />
    </>
  )
}

export default App