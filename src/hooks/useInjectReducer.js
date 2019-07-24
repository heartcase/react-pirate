import { useStore } from 'react-redux'
import { combineReducers } from 'redux';
import { useEffect } from 'react'

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

export default useInjectReducer