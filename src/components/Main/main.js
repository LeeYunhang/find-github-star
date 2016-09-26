import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Profile } from '../Profile/profile'
import './main.less'

class Main extends Component {

  createProfiles(profiles, repos) {
    return profiles.map((profile, index) =>
        <Profile key={index} {...profile} repo={repos[index]} />)
  }

  render() {
    return (
      <main>
        { this.createProfiles(this.props.profiles, this.props.repos) }
      </main>
    )
  }
}

function mapStateToProps(state) {
  return {
    profiles: state.profiles,
    repos: state.repos

  }
}

export default connect(
  mapStateToProps
)(Main)
