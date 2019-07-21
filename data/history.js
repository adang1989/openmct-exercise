export default class History {
    constructor() {
        this.xhttp = new XMLHttpRequest();
    }

    fetch(point) {
        return new Promise((resolve, reject) => {
            const currentDate = Date.now()
            const previousDate = Date.now() - (15 * 60000)

            this.xhttp.open('GET', 'http://localhost:8080/history/' + point + '?start=' + previousDate + '&end=' + currentDate)
            this.xhttp.setRequestHeader("Content-Type", "application/json")
            this.xhttp.send()

            this.xhttp.onreadystatechange = () => {
                if (this.xhttp.readyState === this.xhttp.DONE) {
                    if (this.xhttp.status === 200) {
                        resolve(this.xhttp.responseText)
                    } else {
                        reject(this.xhttp.responseText)
                    }
                }
            }
        })
    }
}