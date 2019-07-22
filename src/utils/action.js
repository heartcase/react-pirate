import { ObjectMap, ObjectFill } from './object'

const buildCreator = defaults => (
  payload => ({ ...ObjectFill(defaults, payload) })
)

const getActionCreators = config => ObjectMap(config, v => buildCreator(v))

export { getActionCreators }