import './styles.css'

let counter = 0
let currentTheme = 'light'
const $counter = document.getElementById('counter')

const $addBtn = document.getElementById('add')
const $subBtn = document.getElementById('sub')
const $asyncBtn = document.getElementById('async')
const $themeBtn = document.getElementById('theme')

const renderCounter = () => {
  $counter.textContent = counter
}

const renderTheme = () => {
  document.body.classList.toggle('light', currentTheme === 'light')
  document.body.classList.toggle('dark', currentTheme === 'dark')
}

$addBtn.addEventListener('click', () => {
  counter++
  renderCounter()
})

$subBtn.addEventListener('click', () => {
  counter--
  renderCounter()
})

$asyncBtn.addEventListener('click', () => {
  counter++
  renderCounter()
})

$themeBtn.addEventListener('click', () => {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light'
  renderTheme()
})

renderCounter()
renderTheme()
