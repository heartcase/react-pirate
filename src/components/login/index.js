
import React, { useRef } from 'react'
import { Button, Form, Grid, Header, Message, Segment, Input } from 'semantic-ui-react'

const getFormInputValue = ref => ref.current.inputRef.current.value

const LoginForm = props => {
  const username = useRef()
  const password = useRef()
  const { login } = props
  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          Log-in to your account
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Field>
              <Input
                fluid
                icon='user'
                iconPosition='left'
                placeholder='E-mail address'
                ref={username}
              />
            </Form.Field>

            <Form.Field>
              <Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                ref={password}
              />
            </Form.Field>
            <Button
              color='teal'
              fluid size='large'
              onClick={() => {
                login({
                  username: getFormInputValue(username),
                  password: getFormInputValue(password)
                })
              }}
            >
              Login
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  )
}

export default LoginForm