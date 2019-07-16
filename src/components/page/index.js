import React from 'react'

const Component = props => {
  return <div>
    <div>{ 'The page is: ' + (props.pageName || 0) }</div>
    <div>{props.value}</div>
    <button onClick={ ()=>{ props.setValue(props.value + 1) } }>
      Click me
    </button>
    <button onClick={ ()=>{ props.setValueWait(props.value + 1, 1000) } }>
      Click me, but wait for magic
    </button>
  </div>
}

export default Component
