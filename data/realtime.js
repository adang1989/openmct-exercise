export default class Realtime {
    constructor() {
        this.ws = new WebSocket('ws://localhost:8080/realtime')
    }

    close() {
        this.ws.close()
    }

    subscribe(id) {
        this.ws.send('subscribe ' + id)
    }

    unsubscribe(id) {
        this.ws.send('unsubscribe ' + id)
    }

    setMessageHandler(handler) {
        this.ws.addEventListener('message', event => {
            handler(event.data)
        })
    }
}