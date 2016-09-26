import React, { Component } from 'react'
import { Search } from './Search/search'
import Main from './Main/main'

export class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Search />
        <Main />
      </div>
    )
  }
}
