import React, { Component } from 'react'
import Excel from 'exceljs'
import saveAs from 'file-saver'

export default class App extends Component {
  
  generateExcel = (data, title, filePath) => {
    if(data.length>0){

      let workbook = new Excel.Workbook()
      let sheet = workbook.addWorksheet(title)
      sheet.columns = Object.keys(data[0]).map(key=>{
          return {header: key, key: key}
      })
  
      data.map(item=>{
        console.log({item})
        sheet.addRow(item)
      })
  
      workbook.xlsx.writeBuffer().then(data=> {
        const blob = new Blob([data], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
        saveAs(blob, filePath)
      })

    }
  }

  exportOnClick = () =>{
    console.log('generating excel...')

    const items = [
      {
        "vid": "BL10S#6021181234",
        "transitTimeInit": 1568787001102,
        "dvid": "BL10S#0355951091790886",
        "topSpeed": 0,
        "transitStatus": "PARKING",
        "createdAt": 1568787000166,
        "totalMileage": 0,
        "endAt": 1568787001102,
        "cpyid": "cpyid#72a1b5f0-d912-11e9-92aa-49d22df56e6c",
        "tid": "trip#f2595730-d9da-11e9-b1d4-bb87161acb33",
        "duration": 936
      },
      {
        "vid": "BL10S#6021181234",
        "transitTimeInit": 1568784820852,
        "dvid": "BL10S#0355951091790886",
        "topSpeed": 0,
        "transitStatus": "PARKING",
        "createdAt": 1568784819444,
        "totalMileage": 0,
        "endAt": 1568784820852,
        "cpyid": "cpyid#72a1b5f0-d912-11e9-92aa-49d22df56e6c",
        "tid": "trip#df68f590-d9d5-11e9-a7c6-39a277428106",
        "duration": 1408
      },
      {
        "vid": "BL10S#6021181234",
        "transitTimeInit": 1568724849714,
        "dvid": "BL10S#0355951091790886",
        "topSpeed": 0,
        "transitStatus": "PARKING",
        "createdAt": 1568702051384,
        "totalMileage": 0.02,
        "endAt": 1568724849714,
        "cpyid": "cpyid#72a1b5f0-d912-11e9-92aa-49d22df56e6c",
        "tid": "trip#29027bc0-d915-11e9-b384-2597144fd658",
        "duration": 22798330
      },
      {
        "vid": "BL10S#6021181234",
        "transitTimeInit": 1568786998113,
        "dvid": "BL10S#0355951091790886",
        "topSpeed": 0,
        "transitStatus": "PARKING",
        "createdAt": 1568786991526,
        "totalMileage": 0,
        "endAt": 1568786998113,
        "cpyid": "cpyid#72a1b5f0-d912-11e9-92aa-49d22df56e6c",
        "tid": "trip#ee103bd0-d9da-11e9-b1d4-bb87161acb33",
        "duration": 6587
      },
      {
        "vid": "BL10S#6021181234",
        "transitTimeInit": 1568787004122,
        "dvid": "BL10S#0355951091790886",
        "topSpeed": 0,
        "transitStatus": "PARKING",
        "createdAt": 1568787002984,
        "totalMileage": 0,
        "endAt": 1568787004122,
        "cpyid": "cpyid#72a1b5f0-d912-11e9-92aa-49d22df56e6c",
        "tid": "trip#f4245330-d9da-11e9-b1d4-bb87161acb33",
        "duration": 1138
      }
    ]

    this.generateExcel(items, 'Trip', 'tripReport.xlsx')
  }

  render() {    
    return (
      <div className="App">  
        <button
          onClick={this.exportOnClick}>
            Export
        </button>
      </div>
    )
  }
}
