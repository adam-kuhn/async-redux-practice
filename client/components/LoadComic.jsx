import React from 'react'
import {connect} from 'react-redux'
import {fetchComic} from '../actions'

class LoadComic extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      comic: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleClick () {
    this.props.dispatch(fetchComic(this.state.comic))
  }

  render () {
    return (
      <div>
        <input onChange={this.handleChange} name='comic' default='Enter a number' />
        <button onClick={this.handleClick}>Get Comic</button>
      </div>
    )
  }
}

export default connect()(LoadComic)
