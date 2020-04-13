import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'

class PageThree extends Component {

  render() {

    return (
      <div className="App">
        This is page three

        <button onClick={() => { this.props.dispatch(push('/one')) }}>
          Go to page one
        </button>

        <button onClick={() => { this.props.dispatch(push('/two')) }}>
          Go to page two
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  article: state.article,
})

export default connect(mapStateToProps)(PageThree)