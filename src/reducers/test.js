import { combineReducers } from 'redux'
import { ADD_ONE, REDUCE_ONE } from '../actions/test'

const initState = {
  test: 0
}

export default function(state = initState, action) {
  switch (action.type) {
    case ADD_ONE:
      return { test: state.test + 1 }
    case REDUCE_ONE:
      return { test: state.test - 1 }
    default:
      return state
  }
}
