import request from 'superagent'
// error
export const SHOW_ERROR = 'SHOW_ERROR'
//reddit
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const CLEAR_POSTS = 'CLEAR_POSTS'
// comics
export const REQUEST_COMIC = 'REQUEST_COMIC'
export const RECEIVE_COMIC = 'RECEIVE_COMIC'
//reddit cations
export const requestPosts = () => {
  return {
    type: REQUEST_POSTS
  }
}
export const receivePosts = (posts) => {
  return {
    type: RECEIVE_POSTS,
    posts: posts.map(post => post.data)
  }
}
export const clearPosts = () => {
  return {
    type: CLEAR_POSTS
  }
}
// error
export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}
// comic actions
export const requestComic = () => {
  return {
    type: REQUEST_COMIC
  }
}

export const receiveComic = (comic) => {
  return {
    type: RECEIVE_COMIC,
    image: comic.image
  }
}

// async actions

// this function is called when the Fetch post button is clicked
// get's reddit post
export function fetchPosts (subreddit) {
  // returns fat arrow function
  return (dispatch) => {
    dispatch(requestPosts())
    request
      .get(`/api/v1/reddit/subreddit/${subreddit}`)
      .end((err, res) => {
        if (err) {
          dispatch(showError(err.message))
          return
        }
        dispatch(receivePosts(res.body))
      })
  }
}
// get's XKCD comic
export function fetchComic (comic) {
  return (dispatch) => {
    dispatch(requestPosts())
    request
      .get(`/api/v1/xkcd/${comic}`)
      .end((err, res) => {
        if (err) {
          dispatch(showError(err.message))
          return
        }
        dispatch(receiveComic(res.body))
      })
  }
}
