import { useDispatch, useSelector } from 'react-redux'

/**
 * Custom connect hooks that create injectedProps for components wrapped by the container
 * 
 * @param { string } key
 * The identifier of the container working as namespace
 * @param { actions } [Action]
 * Collection of action object or getter function that will be dispatched by this component
 * @param { selectors } [Selector]
 * Collection of redux state selectors that gives store access to the component
 * @returns the feeding data to wrapped component's prop
 * 
 */
export const useConnect = ({ key, selectors = {}, actions = {} }) => {
  const injectedProps = {}
  const dispatch = useDispatch()
  Object.entries(selectors(key)).forEach(
    ([name, selector]) => { injectedProps[name] = useSelector(selector) }
  )
  Object.entries(actions).forEach(
    ([name, action]) => {
      injectedProps[name] = parameters => { dispatch(action(parameters)) }
    }
  )
  return injectedProps
}

export default useConnect