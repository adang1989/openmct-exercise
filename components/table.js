export default class Table {
    constructor(selector) {
        this.element = document.querySelector(selector)
        this.tableData = {}
        this.asc = true
        this.timestamp = document.querySelector('#timestamp')
        this.timestamp.addEventListener('click', () => this.toggleSort())
    }

    setTableData(data) {
        this.tableData = data
    }

    append(data) {
        this.tableData.append(data)
        this.render()
    }

    remove(id) {
        this.tableData.remove(id)
        this.render()
    }

    realtime(row) {
        if (this.asc) {
            this.tableData.data.push(row)
            this.insertHtmlRow(row, -1)
        } else {
            this.tableData.data.unshift(row)
            this.insertHtmlRow(row, 0)
        }
    }

    toggleSort() {
        this.asc = !this.asc

        if (!this.asc) {
            this.tableData.desc()
            this.timestamp.querySelector('.fas').classList.remove('fa-sort-up')
            this.timestamp.querySelector('.fas').classList.add('fa-sort-down')
        } else {
            this.tableData.asc()
            this.timestamp.querySelector('.fas').classList.remove('fa-sort-down')
            this.timestamp.querySelector('.fas').classList.add('fa-sort-up')
        }

        this.render()
    }

    render() {
        this.element.innerHTML = ''

        if (!this.asc) {
            this.tableData.desc()
        } else {
            this.tableData.asc()
        }

        this.tableData.data.forEach(row => {
            this.insertHtmlRow(row, -1)
        })
    }

    insertHtmlRow(row, position) {
        const tableRow = this.element.insertRow(position)

        const id = tableRow.insertCell(0)
        const timestamp = tableRow.insertCell(1)
        const value = tableRow.insertCell(2)

        id.innerHTML = row.id
        timestamp.innerHTML = new Date(row.timestamp).toISOString()
        value.innerHTML = row.value
    }
}