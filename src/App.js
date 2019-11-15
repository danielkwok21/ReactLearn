import React, { Component } from 'react'
import Feed from './components/Feed'
export default class App extends Component {

  state = {
    contacts: []
  }
  
  componentDidMount(){
    fetch('https://api.randomuser.me/?results=50')
    .then(resp=>resp.json())
    .then(data=>this.setState({contacts: data.results}))
  }

  render() {
    return (
      <Feed contacts={this.state.contacts} />
    )
  }
}

