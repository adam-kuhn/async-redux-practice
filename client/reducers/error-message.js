import {SHOW_ERROR, RECEIVE_POSTS} from '../actions'

function errorMessage (state = '', action) {
  switch (action.type) {
    case SHOW_ERROR:
      return action.errorMessage

    case RECEIVE_POSTS:
      return ''

    default:
      return state
  }
}

export default errorMessage
