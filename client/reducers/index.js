import { combineReducers } from 'redux'

import characters from './characters'
import selection from './selection'

export default combineReducers({
  characters,
  selection
})
