import React, { Component } from 'react'

const Loading = (WrappedComponent, field) => {
    return class LoadingHOC extends Component {
        componentDidMount(){
            this.startTime = Date.now()
        }

        componentWillUpdate(nextProps){
            nextProps[field]?
                this.endTime = Date.now()
            :
                this.endTime = null
        }

        render(){
            const hocProps = {
                loadingTime: ((this.endTime - this.startTime))
            }

            return (
                this.endTime?
                    <WrappedComponent {...this.props}{...hocProps}/>
                :       
                    <div>Loading...</div>
            )
        }
    }
}

export default Loading




