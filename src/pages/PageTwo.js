import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'

class PageTwo extends Component {

  render() {

    return (
      <div className="App">
        This is page two

        <button onClick={() => { this.props.dispatch(push('/one')) }}>
          Go to page one
        </button>

        <button onClick={() => { this.props.dispatch(push('/three')) }}>
          Go to page three
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  article: state.article,
})

export default connect(mapStateToProps)(PageTwo)