import { ObjectMap, ObjectFill } from './object'
import { stringCamleToConstant } from '@utils/string'

const buildCreator = (defaults, type, key = '') => (
  payload => ({ ...ObjectFill(defaults, payload), type: actionFormatter(key, type) })
)

const actionFormatter = (key, type) => stringCamleToConstant(`@${key}/${type}`)

const getActionCreators = (config, key = '') => ObjectMap(config, (v, k) => buildCreator(v, k, key))

const getActionTypes = (config, key = '') => ObjectMap(config, (_, k) => actionFormatter(key, k))

const simpleSelector = (key, name) => (
  state => state[key] !== undefined ? state[key][name] : null
)

const createSelectorsFromReducers = (key, reducers) => (
  ObjectMap(reducers, (_, k) => simpleSelector(key, k))
)

export { getActionCreators, getActionTypes, simpleSelector, createSelectorsFromReducers }