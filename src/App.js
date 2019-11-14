import React, { Component } from 'react'
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import moment from 'moment'
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      chartInstance: null
    }
  }
  
  exportPDF = () => {
    console.log('export pdf!')

    const data = {
      vehicle: {
        'selectId': 'GPS100#864180034134648||WRJ8263||vhc#fd9bed20-85b5-11e9-89f5-adf28913c0aa',
        'startTime': 1573615033000,
        'endTime': 1573616033000,
        'status': [
          'MOVING',
          'PARKING',
        ],
      }, 

      'Items': [
        {
          'totalFuel': 0,
          'startAddress': '-',
          'avgSpeed': 18.89043673469388,
          'transitStatus': 'MOVING',
          'endLocation': {
            'lat': '3.179936666667',
            'lon': '101.684463333333'
          },
          'startTime': 1573691326000,
          'vid': 'vhc#fd9bed20-85b5-11e9-89f5-adf28913c0aa',
          'dvid': 'GPS100#864180034134648',
          'endTime': 1573691926000,
          'topSpeed': 33.62,
          'startLocation': {
            'lat': '3.17184',
            'lon': '101.685436666667'
          },
          'duration': 600000,
          'trid': 'tr#c468e350-0675-11ea-b0ee-4bc7be93fbba',
          'tsid': 'ts#c468e351-0675-11ea-b0ee-4bc7be93fbba',
          'mileage': 3.0854380000000003
        },
        {
          'startTime': 1573691926000,
          'vid': 'vhc#fd9bed20-85b5-11e9-89f5-adf28913c0aa',
          'totalFuel': 0,
          'dvid': 'GPS100#864180034134648',
          'endTime': 1573700927000,
          'startAddress': '-',
          'startLocation': {
            'lat': '3.179936666667',
            'lon': '101.684463333333'
          },
          'transitStatus': 'PARKING',
          'duration': 9001000,
          'trid': 'tr#1ebc8e50-0677-11ea-b0ee-4bc7be93fbba',
          'tsid': 'ts#1ebc8e51-0677-11ea-b0ee-4bc7be93fbba',
          'endLocation': {
            'lat': '3.17996',
            'lon': '101.684473333333'
          }
        },
        {
          'totalFuel': 0,
          'startAddress': '-',
          'avgSpeed': 18.89043673469388,
          'transitStatus': 'MOVING',
          'endLocation': {
            'lat': '3.179936666667',
            'lon': '101.684463333333'
          },
          'startTime': 1573691326000,
          'vid': 'vhc#fd9bed20-85b5-11e9-89f5-adf28913c0aa',
          'dvid': 'GPS100#864180034134648',
          'endTime': 1573691926000,
          'topSpeed': 33.62,
          'startLocation': {
            'lat': '3.17184',
            'lon': '101.685436666667'
          },
          'duration': 600000,
          'trid': 'tr#c468e350-0675-11ea-b0ee-4bc7be93fbba',
          'tsid': 'ts#c468e351-0675-11ea-b0ee-4bc7be93fbba',
          'mileage': 3.0854380000000003
        },
        {
          'startTime': 1573691926000,
          'vid': 'vhc#fd9bed20-85b5-11e9-89f5-adf28913c0aa',
          'totalFuel': 0,
          'dvid': 'GPS100#864180034134648',
          'endTime': 1573700927000,
          'startAddress': '-',
          'startLocation': {
            'lat': '3.179936666667',
            'lon': '101.684463333333'
          },
          'transitStatus': 'PARKING',
          'duration': 9001000,
          'trid': 'tr#1ebc8e50-0677-11ea-b0ee-4bc7be93fbba',
          'tsid': 'ts#1ebc8e51-0677-11ea-b0ee-4bc7be93fbba',
          'endLocation': {
            'lat': '3.17996',
            'lon': '101.684473333333'
          }
        },
        {
          'totalFuel': 0,
          'startAddress': '-',
          'avgSpeed': 18.89043673469388,
          'transitStatus': 'MOVING',
          'endLocation': {
            'lat': '3.179936666667',
            'lon': '101.684463333333'
          },
          'startTime': 1573691326000,
          'vid': 'vhc#fd9bed20-85b5-11e9-89f5-adf28913c0aa',
          'dvid': 'GPS100#864180034134648',
          'endTime': 1573691926000,
          'topSpeed': 33.62,
          'startLocation': {
            'lat': '3.17184',
            'lon': '101.685436666667'
          },
          'duration': 600000,
          'trid': 'tr#c468e350-0675-11ea-b0ee-4bc7be93fbba',
          'tsid': 'ts#c468e351-0675-11ea-b0ee-4bc7be93fbba',
          'mileage': 3.0854380000000003
        },
        {
          'startTime': 1573691926000,
          'vid': 'vhc#fd9bed20-85b5-11e9-89f5-adf28913c0aa',
          'totalFuel': 0,
          'dvid': 'GPS100#864180034134648',
          'endTime': 1573700927000,
          'startAddress': '-',
          'startLocation': {
            'lat': '3.179936666667',
            'lon': '101.684463333333'
          },
          'transitStatus': 'PARKING',
          'duration': 9001000,
          'trid': 'tr#1ebc8e50-0677-11ea-b0ee-4bc7be93fbba',
          'tsid': 'ts#1ebc8e51-0677-11ea-b0ee-4bc7be93fbba',
          'endLocation': {
            'lat': '3.17996',
            'lon': '101.684473333333'
          }
        },
        {
          'totalFuel': 0,
          'startAddress': '-',
          'avgSpeed': 18.89043673469388,
          'transitStatus': 'MOVING',
          'endLocation': {
            'lat': '3.179936666667',
            'lon': '101.684463333333'
          },
          'startTime': 1573691326000,
          'vid': 'vhc#fd9bed20-85b5-11e9-89f5-adf28913c0aa',
          'dvid': 'GPS100#864180034134648',
          'endTime': 1573691926000,
          'topSpeed': 33.62,
          'startLocation': {
            'lat': '3.17184',
            'lon': '101.685436666667'
          },
          'duration': 600000,
          'trid': 'tr#c468e350-0675-11ea-b0ee-4bc7be93fbba',
          'tsid': 'ts#c468e351-0675-11ea-b0ee-4bc7be93fbba',
          'mileage': 3.0854380000000003
        },
        {
          'startTime': 1573691926000,
          'vid': 'vhc#fd9bed20-85b5-11e9-89f5-adf28913c0aa',
          'totalFuel': 0,
          'dvid': 'GPS100#864180034134648',
          'endTime': 1573700927000,
          'startAddress': '-',
          'startLocation': {
            'lat': '3.179936666667',
            'lon': '101.684463333333'
          },
          'transitStatus': 'PARKING',
          'duration': 9001000,
          'trid': 'tr#1ebc8e50-0677-11ea-b0ee-4bc7be93fbba',
          'tsid': 'ts#1ebc8e51-0677-11ea-b0ee-4bc7be93fbba',
          'endLocation': {
            'lat': '3.17996',
            'lon': '101.684473333333'
          }
        },
      ]
    }

    const durationFormat = (duration) => {
      let momentDuration = moment.duration(duration);
      let days = parseInt(momentDuration.asDays(), 10);
      let hrs = momentDuration.hours();
      let mins = momentDuration.minutes();
      let secs = momentDuration.seconds();

      return (
          days ? 
              `${days}days${hrs}hrs${mins}mins`  
          :
              hrs ?
                  `${hrs}hrs${mins}mins`
              :
                  mins?  
                      `${mins}mins${secs}secs` 
                  :
                      `${secs}secs`
      )
  }

    const byTransitStatusTable = (title, items) => {
      return [
        { text: title, style: 'tableTitle' },
        {
          table: {
            widths: ['20%', '20%', '*', '*', '*', '20%'],
            headerRows: 1,
            body: [
              [
                { text: 'Begin', style: 'tableHeader' }, 
                { text: 'End', style: 'tableHeader' },
                { text: 'Duration', style: 'tableHeader' }, 
                { text: 'Mileage', style: 'tableHeader' },
                { text: 'Total fuel', style: 'tableHeader' }, 
                { text: 'Location', style: 'tableHeader' }, 
              ],
              ...items.map(item=>{
                let rowItem = []
                let rowFields = ['startTime', 'endTime', 'duration', 'mileage', 'totalFuel', 'startAddress']
                
                rowFields.map((field, i)=>{
                  if(Object.keys(item).find(objKey=>field===objKey)){
                    let formattedData = '-'
                    switch(field){
                      case 'startTime':
                      case 'endTime':
                        formattedData = moment(item[field]).format('DD-MM-YYYY hh:mm:ss a') || ''
                        break
                      case 'duration':
                        formattedData = durationFormat(item[field])
                        break
                      case 'startAddress':
                        formattedData = item[field]
                        break
                      case 'mileage':
                        formattedData = item[field].toFixed(3)+' km'
                        break
                      case 'totalFuel':
                        formattedData = item[field]+ '%'
                        break
                      default:
                        break
                    }
                    rowItem[i] = {
                      text: formattedData,
                      fontSize: 8
                    }
                  }else{
                    rowItem[i] = ''
                  }
                })
                return rowItem
              })
            ]
          },
          layout: 'lightHorizontalLines'
        }]
    }

    const overallTransitStatusTable = items => {
      return [
        { text: 'Overall records', style: 'tableTitle' },
        {
          table: {
            headerRows: 1,
            widths: ['*', '20%', '20%', '*', '*', '*', '20%'],
            body: [
              // header
              [
                { text: 'Transit Status', style: 'tableHeader' }, 
                { text: 'Begin', style: 'tableHeader' }, 
                { text: 'End', style: 'tableHeader' },
                { text: 'Duration', style: 'tableHeader' }, 
                { text: 'Mileage', style: 'tableHeader' },
                { text: 'Total fuel', style: 'tableHeader' }, 
                { text: 'Location', style: 'tableHeader' }, 
              ],
              // subsequent rows
              ...items.map(item=>{
                let rowItem = []
                let rowFields = ['transitStatus', 'startTime', 'endTime', 'duration', 'mileage', 'totalFuel', 'startAddress']
                
                rowFields.map((field, i)=>{
                  if(Object.keys(item).find(objKey=>field===objKey)){
                    let formattedData = '-'
                    switch(field){
                      case 'startTime':
                      case 'endTime':
                        formattedData = moment(item[field]).format('DD-MM-YYYY hh:mm:ss a') || ''
                        break
                      case 'duration':
                        formattedData = durationFormat(item[field])
                        break
                      case 'startAddress':
                        formattedData = item[field]
                        break
                      case 'mileage':
                        formattedData = item[field].toFixed(3)+' km'
                        break
                      case 'totalFuel':
                        formattedData = item[field]+ '%'
                        break
                      case 'transitStatus':
                        formattedData = item[field]
                        break
                      default:
                        break
                    }
                    rowItem[i] = {
                      text: formattedData,
                      style: 'tableRow'
                    }
                  }else{
                    rowItem[i] = ''
                  }
                })
                
                return rowItem
              })
            ]
          },
          layout: {
            fillColor: (rowIndex, node, columnIndex)=>{
              return (rowIndex % 2 === 1) ? '#CCCCCC' : null;
            }
          }
        }]
    }

    const docDefinition = {
      content: [
        { 
          text: `Fleet Record Report`, 
          style: 'header' 
        },
        { 
          text: `generated on ${moment().format('DD-MM-YYYY')}`, 
          style: 'subheader' 
        },
        {
          text: `Vehicle Plate: `, 
          style: 'key'
        },
        {text: data.vehicle.selectId.split('||')[1], style:'value'},
        {text: `Start time: `, style: 'key'},
        {text: moment(data.vehicle.startTime).format('DD-MM-YYYY hh:mm:ss a'), style:'value'},
        {text: `End time: `, style: 'key'},
        {text: moment(data.vehicle.endTime).format('DD-MM-YYYY hh:mm:ss a'), style:'value'},
        
        data.vehicle.status.map(s=>byTransitStatusTable(s+' RECORDS', data.Items.filter(item=>item.transitStatus===s))),

        overallTransitStatusTable(data.Items)

      ],
      styles: {
        header: {
          fontSize: 20,
          bold: true,
          margin: [0, 0, 0, 0]
        },
        subheader: {
          fontSize: 10,
          color: 'gray',
          italics: true,
          margin: [0, 0, 0, 10]
        },
        key: {
          bold: true,
          fontSize: 10,
          margin: [0, 0, 0, 5]
        },
        value: {
          fontSize: 8,
          margin: [0, 0, 0, 5]
        },
        tableTitle: {
          fontSize: 12,
          bold: true,
          margin: [0, 30, 0, 5]
        },
        tableExample: {
          // margin: [0, 5, 0, 15]
        },
        tableHeader: {
          bold: true,
          fontSize: 10,
          color: 'black'
        },
        table: {
          margin: [0, 10, 0, 5]
        },
        tableRow: {
          fontSize: 8,
        }
      },
      defaultStyle: {
        alignment: 'justify'
      }
    };

    pdfMake.createPdf(docDefinition).download();
  }

  componentDidMount = () => {
    this.exportPDF()
  }

  render() {
    return (
      <div id='capture' className='App'>  
      <h1>hello</h1>
      </div>
    )
  }
}
