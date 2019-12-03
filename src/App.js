import React, { Component } from 'react'

export default class App extends Component {

  state = {
    data: ''
  }

  componentDidMount() {
    const url = `https://mrquwrjkri.execute-api.ap-southeast-1.amazonaws.com/v1/transitRecord/timeFrame/pdf`
    const body = {
      vid: "vhc#fd9bed20-85b5-11e9-89f5-adf28913c0aa",
      startTime: 1573169072000,
      endTime: 1573269072000,
      status: ['PARKING', 'MOVING', 'OVERSPEED', 'IDLING']
    }
    console.log('fetching...')

    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/pdf charset=utf-8',
        
      },
      body: JSON.stringify(body)
    })
    .then(response=>response.json())
    .then(json=>{
      console.log({json})
      const buffer = Buffer.from(json.buffer.data)
      const file = new Blob([buffer], {type: 'application/pdf'})
      const fileURL = URL.createObjectURL(file)

      const fileLink = document.createElement('a')
      fileLink.href = fileURL
      fileLink.download = json.name
      fileLink.click()
    })
  }

  render() {
    return (
      <div className="App">
        {JSON.stringify(this.state.data)}
      </div>
    )
  }
}
