import React, { Component } from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Index from './router'

export default class App extends Component {
  constructor(){
    super()
    this.state={
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
           <Index />
        </Router>
      </div>
    )
  }
}
