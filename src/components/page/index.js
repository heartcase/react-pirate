import React, { useRef } from 'react'
import text from '@markdown/plainText.md'
import Markdown from 'react-markdown'
import './style.scss'

const Component = props => {
  return <div>
    <div>{'The page is: ' + (props.pageName || 0)}</div>
    <div>{props.value}</div>
    <button onClick={() => { props.setValue({ value: props.value + 1 }) }}>
      Click me
    </button>
    <button onClick={() => { props.setValueWait({ value: props.value + 1, time: 1000 }) }}>
      Click me, but wait for magic
    </button>
    <div>
      <button onClick={() => { props.sayHi() }}>
        Say Hi!
      </button>
      <div className='my-div'>
        {`The response: ${props.text || '...'}`}
      </div>
    </div>
    <div className="markdown-body">
      <div>Markdown</div>
      <Markdown source={text} />
    </div>
  </div>
}

export default Component
