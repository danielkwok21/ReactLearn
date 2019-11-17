import React, { Component } from 'react'
import {connect} from 'react-redux'

import {addArticle} from './redux/actions/article'

class App extends Component {
  
  // dispatches the addArticle action
  componentDidMount(){
    this.props.dispatch(addArticle())
  }

  render() {
    return (
      <div className="App">
        {
          this.props.article.articles.map(a=><h1>{a.title}</h1>)
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  article: state.article,
})

export default connect(mapStateToProps)(App)


