import React from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

class Todos extends React.Component {
  
  render() {
    return (
      this.props.todos.map(todo=>{
          return <TodoItem key={todo.id} toggleComplete = {this.props.toggleComplete} todo={todo} deleteItem={this.props.deleteItem}/>
      })
    )
  }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default Todos;
