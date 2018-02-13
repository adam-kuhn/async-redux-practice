import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import Post from './Post'

import {clearPosts} from '../actions'

const Subreddit = ({subreddits, dispatch}) => (
  <div>
    <button onClick={() => dispatch(clearPosts())}>Clear Posts</button>
    {subreddits.map((post, i) =>
      <Post
        key={i}
        title={post.title}
        summary={post.selftext}
        created={post.created}
        />
    )}
  </div>
)

Subreddit.propTypes = {
  subreddits: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return {
    subreddits: state.subreddits
  }
}

export default connect(
  mapStateToProps
)(Subreddit)
