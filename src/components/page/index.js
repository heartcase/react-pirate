import React from 'react'
import text from 'markdown/plainText.md'
import Markdown from 'react-markdown'

const Component = props => {
  return <div>
    <div>{ 'The page is: ' + (props.pageName || 0) }</div>
    <div>{props.value}</div>
    <Markdown source={text} />
    <button onClick={ ()=>{ props.setValue(props.value + 1) } }>
      Click me
    </button>
    <button onClick={ ()=>{ props.setValueWait(props.value + 1, 1000) } }>
      Click me, but wait for magic
    </button>
  </div>
}

export default Component
