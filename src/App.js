import React from 'react';
import './App.css';
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

class App extends React.Component {
  state = {
    todos: [
      {id:1, title: 'take out trash', completed: false},
      {id:2, title: 'dinner with wife', completed: false},
      {id:3, title: 'meeting with boss', completed: false},
    ]
  }

  toggleComplete = (todoItem)=>{
    
    // simple map function to create a new, updated version of todos array
    let newTodos = this.state.todos.map(todo=>{
      if(todo.id===todoItem.id){
        todo.completed = !todo.completed
      }
      return todo
    })

    // creating a new, updated version of state object
    let newState = {todos: newTodos}

    // using react setState() method to set new state
    this.setState(newState)
  }

  deleteItem = (todoItem)=>{
    // simple map function to create a new, updated version of todos array
    let newTodos = this.state.todos.filter(todo=>{
      return todo.id!==todoItem.id
    })

    // creating a new, updated version of state object
    let newState = {todos: newTodos}

    // using react setState() method to set new state
    this.setState(newState)
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AddTodo />
        <h1>this is App</h1>
        <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} deleteItem={this.deleteItem}/>
      </div>
    )
  }
}

export default App;
