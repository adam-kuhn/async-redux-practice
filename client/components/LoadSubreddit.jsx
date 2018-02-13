import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'
// destructing dispatch from props, so we can just type dispatch, as below
class LoadSubreddit extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      subbreddit: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }
  render () {
    return (
      <div>
      <input onChange={this.handleChange} name='subbreddit' />
    <button
      onClick={() => this.props.dispatch(fetchPosts(this.state.subbreddit))}
      >Fetch Posts</button>
      </div>
    )
  }
}

// connecting our component to store so we can use dispatch
export default connect()(LoadSubreddit)
