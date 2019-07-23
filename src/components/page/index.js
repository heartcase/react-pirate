import React, { useRef } from 'react'
import text from '@markdown/plainText.md'
import Markdown from 'react-markdown'
import './style.scss'

const LoginForm = props => {
  const username = useRef('');
  const password = useRef('');
  return (
    <>
      {
        (props.username && props.token) ?
          <>
            <input type="submit" value="Logout" onClick={
              e => {
                e.preventDefault();
                props.logout()
              }
            } />
          </>
          :
          <>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" ref={username} />
            <br />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" ref={password} />
            <br />
            <input type="submit" value="Login" onClick={
              e => {
                e.preventDefault();
                props.login({ username: username.current.value, password: password.current.value })
              }
            } />
          </>
      }
    </>
  )
}

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
    <form>
      <LoginForm {...props} />
    </form>
  </div>
}

export default Component
