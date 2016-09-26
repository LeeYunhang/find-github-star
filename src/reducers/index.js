import { combineReducers } from 'redux'

import { REQUEST_PROFILE } from '../actions/'
import { REQUEST_FAILED } from '../actions/'
import { REQUEST_SUCCESS } from '../actions/'
import { REQUEST_REPOS_SUCCESS } from '../actions/'

const initState = {
  isFetching: false,
  profiles: [
    {
      id: 'mrcodehang',
      avatar: 'https://cdn.v2ex.co/avatar/1a9c/be7b/182064_large.png?m=1473176331',
      reps: 17,
      stars: 241,
      followers: 14,
      following: 58,
      popularReps: [
        {
          name: 'shadowsocks-node',
          description: 'a shadowsocks gui based on node.js',
          star: 3
        },
        {
          name: 'shadowsocks-node',
          description: 'a shadowsocks gui based on node.js',
          star: 3
        },
        {
          name: 'shadowsocks-node',
          description: 'a shadowsocks gui based on node.js',
          star: 3
        }
      ]
    },
    {
      id: 'mrcodehang',
      avatar: 'https://cdn.v2ex.co/avatar/1a9c/be7b/182064_large.png?m=1473176331',
      reps: 17,
      stars: 241,
      followers: 14,
      following: 58,
      popularReps: [
        {
          name: 'shadowsocks-node',
          description: 'a shadowsocks gui based on node.js',
          star: 3
        },
        {
          name: 'shadowsocks-node',
          description: 'a shadowsocks gui based on node.js',
          star: 3
        },
        {
          name: 'shadowsocks-node',
          description: 'a shadowsocks gui based on node.js',
          star: 3
        }
      ]
    },
    {
      id: 'mrcodehang',
      avatar: 'https://cdn.v2ex.co/avatar/1a9c/be7b/182064_large.png?m=1473176331',
      reps: 17,
      stars: 241,
      followers: 14,
      following: 58,
      popularReps: [
        {
          name: 'shadowsocks-node',
          description: 'a shadowsocks gui based on node.js',
          star: 3
        },
        {
          name: 'shadowsocks-node',
          description: 'a shadowsocks gui based on node.js',
          star: 3
        },
        {
          name: 'shadowsocks-node',
          description: 'a shadowsocks gui based on node.js',
          star: 3
        }
      ]
    }
  ],
  repos: [
  ]
}

function requestProfile(state = initState.isFetching, action) {
    return action.type === REQUEST_PROFILE
    switch (action.type) {
      case REQUEST_PROFILE:
        return true
      case REQUEST_SUCCESS:
      case REQUEST_REPOS_SUCCESS:
      case REQUEST_FAILED:
        return false
      default:
        return state
    }
}

function profiles(state = initState.profiles, action) {
  return action.type === REQUEST_SUCCESS? action.payload:state
}

function repos(state = initState.repos, action) {
  return action.type === REQUEST_REPOS_SUCCESS? action.payload:state
}

export default combineReducers({
  isFetching: requestProfile,
  profiles, repos
})
