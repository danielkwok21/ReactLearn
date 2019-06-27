import React from 'react'
import uuid from 'uuid'
import './App.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import axios from 'axios'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import About from './components/pages/About'

class App extends React.Component {

  state = {
    todos: [
    ]
  }


  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(resp=>{
      this.setState({todos: resp.data})
    })
  }

  render() {
    return (
      // router tag wraps everything
      <Router>
        <div className="App">
          <Header />

            <Route exact path='/' render={props=>(
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <h1>this is App</h1>
                <Todos todos={this.state.todos} 
                toggleComplete={this.toggleComplete} deleteItem={this.deleteItem}/>
              </React.Fragment>
            )} />

            <Route path='/about' component={About} />
        </div>
      </Router>
    )
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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoItem.id}`)
    .then(()=>{
      // simple map function to create a new, updated version of todos array
      let newTodos = this.state.todos.filter(todo=>{
        return todo.id!==todoItem.id
      })
  
      let newState = {todos: newTodos}
      
      this.setState(newState)
    })
    
  }

  addTodo = (todoItem)=>{
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: todoItem.title,
      completed: false
    })
    .then(resp=>{
      this.state.todos.push(resp.data)
      this.setState(this.state)
    })
  }
}

export default App;
