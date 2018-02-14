import {RECIEVE_COMIC} from '../actions'

const initialState = {
  image: ''
}
function comicReducer (state = initialState, action) {
  switch (action.type) {
    case RECIEVE_COMIC:
      return {
        image: action.image
      }

    default:
      return state
  }
}

export default comicReducer
