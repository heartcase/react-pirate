import { useStore } from 'react-redux';
import { useEffect } from 'react'

/**
 * See useInject Reducer
 * @param {string} key
 * the identifier of the container working as namespace
 * @param {function} saga
 * injecting saga
 * Modified from:
 * https://github.com/react-boilerplate/react-boilerplate/blob/master/app/utils/injectSaga.js
 */

export const useInjectSaga = ({ key, saga }) => {
  const store = useStore();
  useEffect(() => {
    store.injectedSagas[key] && store.injectedSagas[key].cancel()
    store.injectedSagas[key] = store.runSaga(saga)
  }, []);
};

export default useInjectSaga