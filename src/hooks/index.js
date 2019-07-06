import { useDispatch, useSelector, useStore } from 'react-redux'
import { combineReducers } from 'redux';
import { useEffect } from 'react'

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
export const useConnect = ({ key, selectors, actions }) => {
  const injectedProps = {}
  const dispatch = useDispatch()
  Object.entries(selectors(key)).forEach(
    ([name, selector]) => {
      injectedProps[name] = useSelector(selector) 
    }
  )
  Object.entries(actions).forEach(
    ([name, action]) => { 
      injectedProps[name] = parameters => {
        dispatch(typeof action === 'function' ? action(parameters) : action)
      }
    } 
  )
  return injectedProps
}
/**
 * A custome hooks that did two things
 * - load the local reducer of the component and replace the reducer with a combination of all loaded reducer
 * - save the reference of the component so it can be used when another replacement occur
 * @param {string} key
 * the identifier of the container working as namespace
 * @param {function} reducer
 * injecting reducer
 * Modified from:
 * https://github.com/react-boilerplate/react-boilerplate/blob/master/app/utils/injectReducer.js
 */
export const useInjectReducer = ({ key, reducer }) => {
  const store = useStore();
  useEffect(() => {
    store.injectedReducers[key] = reducer;
    store.replaceReducer(combineReducers(store.injectedReducers));
  }, []);
};
