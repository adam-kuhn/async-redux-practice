import {RECEIVE_POSTS, CLEAR_POSTS} from '../actions'

function subreddits (state = [], action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts

    case CLEAR_POSTS:
      return []

    default:
      return state
  }
}

export default subreddits
