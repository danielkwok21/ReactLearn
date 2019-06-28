import React, { Component } from 'react'

export class Postform extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            body: '',
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title: </label><br />
                        <input 
                            type="text" 
                            name="title"
                            onChange = {this.onChange}
                        />
                    </div>
                    <br />
                    <div>
                        <label>Body: </label><br />
                        <textarea 
                            name="body" 
                            onChange = {this.onChange}
                        />
                    </div>
                    <br />
                    <div>
                        <button type="submit" >Submit</button>
                    </div>
                </form>
            </div>
        )
    }

    onSubmit = e=>{
        e.preventDefault()
        const post = {
            title: this.state.title,
            body: this.state.body
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        .then(resp=>resp.json())
        .then(data=>console.log(data))
    }

    onChange = e=>{
        const input = e.target.value
        this.setState({[e.target.name]: input})
    }
}

export default Postform
