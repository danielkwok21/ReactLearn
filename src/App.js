import React from 'react';
import './App.css';
import Todos from './components/Todos'

class App extends React.Component {
  state = {
    todos: [
      {id:1, title: 'take out trash', completed: false},
      {id:2, title: 'dinner with wife', completed: false},
      {id:3, title: 'meeting with boss', completed: false},
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>this is App</h1>
        <Todos todos={this.state.todos} />
      </div>
    )
  }
}

export default App;
