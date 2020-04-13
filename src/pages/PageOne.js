import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'

class PageOne extends Component {

  render() {

    return (
      <div className="App">
        This is page one

        {/* STEP 4: Navigate with push and redux */}
        <button onClick={() => { this.props.dispatch(push('/two')) }}>
          Go to page two
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

export default connect(mapStateToProps)(PageOne)