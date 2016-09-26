import fetch from 'isomorphic-fetch'

export const REQUEST_PROFILE = 1
export const REQUEST_FAILED = 2
export const REQUEST_SUCCESS = 3
export const REQUEST_REPOS_SUCCESS = 4

function requestProfile(username) {
  return {
    type: REQUEST_PROFILE,
    payload: username
  }
}

function requestSuccess(users) {
  let profiles = []

  users.forEach(user => {
    const {
      login,
      avatar_url,
      html_url,
      public_repos,
      followers,
      following
    } = user
    profiles.push({ login, avatar_url, html_url, public_repos, followers, following })
  })

  return {
    type: REQUEST_SUCCESS,
    payload: profiles
  }
}

function requestReposSuccess(repos) {
  repos = repos.map(repo => repo.sort((a, b) => b.stargazers_count - a.stargazers_count))
  repos = repos.map(repo => repo.map(r => ({
    star: r.stargazers_count,
    name: r.name,
    description: r.description.slice(0, 40) + '   ...'
  })))

  return {
    type: REQUEST_REPOS_SUCCESS,
    payload: repos
  }
}

function requestFailed(e) {
  return { type: REQUEST_FAILED, payload: e }
}

export const fetchProfiles = username => (dispatch, getState) => {
  dispatch(requestProfile(username))

  return fetch(`https://api.github.com/users/${username}`)
    .then((response) => {

      // 检查用户是否存在
      if (response.status !== 200) {
        throw new Error('profiles fetch failed')
      }

      return fetch(`https://api.github.com/users/${username}/following`)
    })
    .then(response => response.json())
    .then(following => {
      return Promise.all(following.map(f => {
        return fetch(`https://api.github.com/users/${f.login}`)
      }))
    })
    .then(responses => Promise.all(responses.map(response => response.json())))
    .then(followingUsers => {
      const sortedUsers = followingUsers.sort((a, b) => b.followers - a.followers)

      return sortedUsers.slice(0, 3)
    })
    .then((users) => {
      dispatch(requestSuccess(users))
      console.dir(users)
      return Promise.all(users.map(user =>
          fetch(`https://api.github.com/users/${user.login}/repos`)))
    })
    .then(responses => Promise.all(responses.map(res => res.json())))
    .then((repos) => {
      repos = repos.map(repo => repo.slice(0, 3))
      dispatch(requestReposSuccess(repos))
    })
    .catch((err) => dispatch(requestFailed(err)))
}
