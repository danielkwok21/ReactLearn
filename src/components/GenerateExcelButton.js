import React, { Component } from 'react'
import Excel from 'exceljs'
import saveAs from 'file-saver'

export default class GenerateExcelButton extends Component {

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
        const blob = new Blob([data], {type: "GenerateExcelButtonlication/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
        saveAs(blob, filePath)
      })

    }
  }

  exportOnClick = () =>{
    console.log('generating excel...')

    this.generateExcel(this.props.data, this.props.title, this.props.filePath)
  }

  render() {
    console.log(this.props)
    return (
      <div className="GenerateExcelButton">
        <button
          onClick={this.exportOnClick}>
          Export
        </button>
      </div>
    )
  }
}
