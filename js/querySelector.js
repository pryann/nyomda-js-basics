const buttons = document.querySelectorAll('.btn')

const handleClick = (button) => {
  button.addEventListener('click', () => {
    console.log(button.textContent)
  })
}

buttons.forEach(handleClick)
