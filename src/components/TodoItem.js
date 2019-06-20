import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    setItemStyle = ()=>{
        if(this.props.todo.completed){
            return {
                background: '#f4f4f4',
                padding: '10px',
                borderBottom: '1px #ccc dotted',
                textDecoration: 'line-through'
            }
        }else{
            return {
                background: '#f4f4f4',
                padding: '10px',
                borderBottom: '1px #ccc dotted',
                textDecoration: 'none'
            }
        }
    }

    render() {
        return (
            <div style={this.setItemStyle()}>
                <p>
                    <input type='checkbox' onChange={this.props.toggleComplete.bind(this, this.props.todo)}/>{' '}
                    {this.props.todo.title}
                    <button style={deleteBtnStyle} onClick={this.props.deleteItem.bind(this, this.props.todo)}>x</button>
                </p>
            </div>
        )
    }
}

const deleteBtnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}



TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
