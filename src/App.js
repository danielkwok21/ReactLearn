import React from 'react'
import uuid from 'uuid'
import './App.css';
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

class App extends React.Component {
  state = {
    todos: [
      {id:uuid.v4(), title: 'take out trash', completed: false},
      {id:uuid.v4(), title: 'dinner with wife', completed: false},
      {id:uuid.v4(), title: 'meeting with boss', completed: false},
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

  addTodo = (todoItemTitle)=>{
    const newTodoItem = {
      id: uuid.v4(),
      title: todoItemTitle.title,
      completed: false
    }
    this.state.todos.push(newTodoItem)

    console.log(this.state.todos)
    this.setState(this.state)
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AddTodo addTodo={this.addTodo}/>
        <h1>this is App</h1>
        <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} deleteItem={this.deleteItem}/>
      </div>
    )
  }
}

export default App;
