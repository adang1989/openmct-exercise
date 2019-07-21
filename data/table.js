export default class TableData {
    constructor() {
        this.data = []
    }

    append(data) {
        this.data = [...this.data, ...data]
    }

    remove(id) {
        this.data = this.data.filter(row => row.id !== id)
    }

    asc() {
        this.data.sort((a, b) => a.timestamp - b.timestamp)
    }

    desc() {
        this.data.sort((a, b) => b.timestamp - a.timestamp)
    }
}
