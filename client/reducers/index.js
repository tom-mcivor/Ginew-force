import { combineReducers } from 'redux'

import characters from './characters'
import selection from './selection'
import winner from './winner'

export default combineReducers({
  characters,
  selection,
  winner,
})
