import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class AddTodo extends Component {
    state = {
        title:''
    }

    onSubmit = e=>{
        e.preventDefault()
        this.props.addTodo(this.state)
        this.setState({title: ''})
    }

    render() {
        return (
            <div>
                <form style={{display: 'flex'}} onSubmit={this.onSubmit}>
                    <input
                        type='text'
                        name='title'
                        style={{flex: '10', padding: '5px'}}
                        placeholder='Add new todo!'

                        // setting value of this input as a state attr
                        value={this.state.title}

                        // implement onChange()
                        onChange={this.onChange}
                    />

                    <input
                        type='submit'
                        value="Submit"
                        className='btn'
                        style={{flex: 1}}
                    />
                </form>
            </div>
        )
    }

    onChange = (e)=>{

        // e.target.value is the webpage object attr
        const input = e.target.value

        // use react native function, setState() to update state object
        this.setState({[e.target.name]: input})
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
}

export default AddTodo

