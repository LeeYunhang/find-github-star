import React, { Component } from 'react'
import './search.less'
import { fetchProfiles } from '../../actions/'

export class Search extends Component {

  constructor(props) {
    super(props)
    this.state = { username: '' }
  }

  click() {
    const store = this.context.store
    store.dispatch(fetchProfiles(this.state.username))
  }

  change(e) {
    this.setState({username: this.refs.input.value})
  }

  render() {
    return (
      <div id="search">
        <input type="text" placeholder="请输入用户id"
          ref="input"
          onClick={this.click.bind(this)}
          value={this.state.username}
          onChange={this.change.bind(this)}
        />
        <button onClick={this.click.bind(this)}>START!</button>
      </div>
    )
  }
}

Search.contextTypes = {
  store: React.PropTypes.object
}
