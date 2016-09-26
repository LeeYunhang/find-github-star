import React, { Component } from 'react'

import './profile.less'

export class Profile extends Component {

  createReps(repo) {
    let Reps
    console.dir(repo)
    console.log(1)
    if (Array.isArray(repo)) {
      Reps = repo.map(rep => {
        return (
          <div className="rep">
            <a className="rep-name" href={`https://github.com/${this.props.login}/${rep.name}`}>{rep.name}</a>
            <span className="rep-star">{rep.star}</span>
            <svg fill="#FDD835" height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"/>
              <path d="M0 0h18v18H0z" fill="none"/>
            </svg>
            <span className="rep-description">{rep.description}</span>
          </div>
        )
      })
    }

    return (
      <div className="reps">
        {Reps}
      </div>
    )
  }

  createProfile(props) {
    const {
      login,
      avatar_url,
      public_repos,
      followers,
      following,
      repo
    } = props

    return (
      <div className="profile">
        <div className="top">
          <img className="avatar" src={avatar_url} />
          <a className="username" href={`https://github.com/${login}`}>{login}</a>
        </div>
        <div className="content">
          <span className="left">粉丝数:</span>
          <span className="right">{followers}</span>
          <span className="left">关注人数:</span>
          <span className="right">{following}</span>
          <span className="left">仓库数量:</span>
          <span className="right">{public_repos}</span>
        </div>
        {this.createReps(repo)}
      </div>
    )
  }

  render() {
    return this.createProfile(this.props)
  }
}
