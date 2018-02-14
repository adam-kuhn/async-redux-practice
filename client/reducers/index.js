import {combineReducers} from 'redux'

import errorMessage from './error-message'
import subreddits from './subreddits'
import waiting from './waiting'
import comicReducer from './comicReducer'

export default combineReducers({
  errorMessage,
  subreddits,
  waiting,
  comicReducer
})

