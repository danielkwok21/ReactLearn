import React, { Component } from 'react'

// redux imports
import store from './redux/store'
import {addArticle} from './redux/actions'

export default class App extends Component {
  
  render() {
    
    // dispatches the addArticle action
    store.dispatch(addArticle({
      title: "This is a new article"
    }))
    
    return (
      <div className="App">  
      </div>
    )
  }
}
