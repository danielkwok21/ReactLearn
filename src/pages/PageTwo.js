import React, { Component } from 'react'
import {connect} from 'react-redux'

import {addArticle} from '../redux/actions/article'

class PageOne extends Component {
  
  render() {

    return (
      <div className="App">
        This is page two
      </div>
    )
  }
}

const mapStateToProps = state => ({
  article: state.article,
})

export default connect(mapStateToProps)(PageOne)