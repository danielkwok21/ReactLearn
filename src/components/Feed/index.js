import React, { Component } from 'react'
import Loading from '../Loading'
class Feed extends Component {
    render() {
        const {
            loadingTime,
            contacts
        } = this.props

        return (
            <div>
                Result returned in {loadingTime} ms
                {
                    contacts.map((contact, i)=>(
                        <div key={i}>
                            <img src={contact.picture.large}/>
                            <p>{contact.name.first}</p>
                            <p>{contact.email}</p>
                            <br />
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Loading(Feed, 'contacts')