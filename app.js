import tD from './data/table.js'
import History from './data/history.js'
import Realtime from './data/realtime.js'
import Button from './components/button.js'
import tC from './components/table.js'

const tableData = new tD()
const tableComponent = new tC('#tableData')
const history = new History()
const realtime = new Realtime()
const selectors = ['#v', '#c']

tableComponent.setTableData(tableData)

realtime.setMessageHandler(data => {
    tableComponent.realtime(JSON.parse(data))
})

selectors.forEach(selector => {
    const btn = new Button(selector, elementValue => {
        history.fetch(elementValue).then(response => {
            tableComponent.append(JSON.parse(response))
            realtime.subscribe(elementValue)
        }).catch(err => {
            console.error(err)
        })
    }, elementValue => {
        tableComponent.remove(elementValue)
        realtime.unsubscribe(elementValue)
    })
})

window.onbeforeunload = () => {
    realtime.close()
}