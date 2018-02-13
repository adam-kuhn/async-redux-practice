import React from 'react'
import PropTypes from 'prop-types'

const Post = ({title, created, summary}) => (
  <div>
  <h3>{title}</h3>
  <p>{created}</p>
  <p>{summary}</p>
  </div>
)

Post.propTypes = {
  title: PropTypes.string.isRequired
}

export default Post
