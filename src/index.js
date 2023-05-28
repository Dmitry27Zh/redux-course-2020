import { createDecrement, createIncrement } from './actions'
import { Action, rootReducer } from './root-reducer'
import { createStore } from './store'
import './styles.css'

const Theme = {
  LIGHT: 'light',
  DARK: 'dark',
}

const $counter = document.getElementById('counter')
const $addBtn = document.getElementById('add')
const $subBtn = document.getElementById('sub')
const $asyncBtn = document.getElementById('async')
const $themeBtn = document.getElementById('theme')

const initialState = {
  counter: 0,
  theme: Theme.LIGHT,
}
const store = createStore(initialState, rootReducer)

const renderCounter = () => {
  $counter.textContent = store.getState().counter
}

const renderTheme = () => {
  document.body.classList.toggle(Theme.LIGHT, store.getState().theme === Theme.LIGHT)
  document.body.classList.toggle(Theme.DARK, store.getState().theme === Theme.DARK)
}

store.subscribe(() => {
  renderCounter()
})

$addBtn.addEventListener('click', () => {
  store.dispatch(createIncrement())
})

$subBtn.addEventListener('click', () => {
  store.dispatch(createDecrement())
})

$asyncBtn.addEventListener('click', () => {
  counter++
  renderCounter()
})

$themeBtn.addEventListener('click', () => {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light'
  renderTheme()
})

store.dispatch(Action.INIT)
