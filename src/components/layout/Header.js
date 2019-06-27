import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <header style={headerStyle}>
                <h1>TodoList</h1>
                {/* a click on this link would essentially make a get reques to '/' */}
                <Link style={linkStyle} to='/'>Home</Link> |

                {/* a click on this link would make a get reques to '/about' */}
                <Link style={linkStyle}  to='/about'>About</Link>
            </header>
        )
    }
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

export default Header
