export default class Button {
    constructor(selector, activeCb, inactiveCb) {
        this.element = document.querySelector(selector)
        this.activeCb = activeCb
        this.inactiveCb = inactiveCb
        this.active = false
        document.querySelector(selector).addEventListener('click', () => this.toggle())
    }

    toggle() {
        this.active = !this.active

        if (this.active) {
            this.element.classList.remove('btn-outline-default')
            this.element.classList.add('btn-default')
            this.activeCb(this.element.value)
        } else {
            this.element.classList.remove('btn-default')
            this.element.classList.add('btn-outline-default')
            this.inactiveCb(this.element.value)
        }
    }
}
