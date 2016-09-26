import { connect } from 'react-redux'
import React, { Component } from 'react'

import reducer from '../../reducers/test'
import { increaseAction, reduceAction } from '../../actions/test'
import './test.less'

class App extends Component {
  render() {
    const { value, onIncreaseClick, onReduceClick } = this.props
    return (
      <div id="test">
        <h1>{value}</h1>
        <button onClick={onIncreaseClick}>+</button>
        <button onClick={onReduceClick}>-</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    value: state.test
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction),
    onReduceClick: () =>   dispatch(reduceAction)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
