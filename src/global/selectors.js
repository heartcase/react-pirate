import { createSelectorsFromReducers } from '@utils/redux'
import { reducers } from './reducer'
import { key } from './constant'

export default {
  ...createSelectorsFromReducers(key, reducers)
}