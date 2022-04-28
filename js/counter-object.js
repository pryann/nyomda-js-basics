const counterApp = {
  counterValue: 0,
  elements: {
    counterSpan: document.querySelector('.counter-app__value'),
    increaseButton: document.querySelector('.counter-app__increase-btn'),
    decreaseButton: document.querySelector('.counter-app__decrease-btn')
  },
  init () {
    this.showCounterValue()
    this.handleIncreaseBtnClick()
    this.handleDecreaseBtnClick()
  },
  increaseCounterValue () {
    this.counterValue += 1
  },
  decreaseCounterValue () {
    this.counterValue -= 1
  },
  showCounterValue () {
    this.elements.counterSpan.textContent = this.counterValue
  },
  handleIncreaseBtnClick () {
    this.elements.increaseButton.addEventListener(
      'click', () => this.increaseCounterValue()
    )
    this.elements.increaseButton.addEventListener(
      'click', () => this.showCounterValue()
    )
  },
  handleDecreaseBtnClick () {
    this.elements.decreaseButton.addEventListener(
      'click', () => this.decreaseCounterValue()
    )
    this.elements.decreaseButton.addEventListener(
      'click', () => this.showCounterValue()
    )
  }
}

// Object.freeze(counterApp)
// counterApp.elements.bubus = 'bubus'

counterApp.init()
