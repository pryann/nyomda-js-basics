let counterValue = 0
const counterSpan = document.querySelector('.counter-app__value')
const increaseButton = document.querySelector('.counter-app__increase-btn')
const decreaseButton = document.querySelector('.counter-app__decrease-btn')

const increaseCounterValue = function () { counterValue += 1 }
const decreaseCounterValue = function () { counterValue -= 1 }
const showCounterValue = function () { counterSpan.textContent = counterValue }

increaseButton.addEventListener('click', increaseCounterValue)
increaseButton.addEventListener('click', showCounterValue)

decreaseButton.addEventListener('click', decreaseCounterValue)
decreaseButton.addEventListener('click', showCounterValue)

showCounterValue()
