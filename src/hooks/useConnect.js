import { useDispatch, useSelector } from 'react-redux'
import { ObjectForEach } from '@utils/object'
/**
 * Custom connect hooks that create injectedProps for components wrapped by the container
 * 
 * @param { actions } [Action]
 * Collection of action object or getter function that will be dispatched by this component
 * @param { selectors } [Selector]
 * Collection of redux state selectors that gives store access to the component
 * @returns the feeding data to wrapped component's prop
 * 
 */
export const useConnect = ({ selectors = {}, actions = {} }) => {
  const injectedProps = {}
  const dispatch = useDispatch()
  console.log(selectors, actions)
  ObjectForEach(selectors, (selector, name) => {
    injectedProps[name] = useSelector(selector)
  })
  ObjectForEach(actions, (action, name) => {
    injectedProps[name] = parameters => { dispatch(action(parameters)) }
  })
  return injectedProps
}

export default useConnect