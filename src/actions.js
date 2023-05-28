import { Action } from './root-reducer'

export const createIncrement = () => {
  return {
    type: Action.INCREMENT,
  }
}

export const createDecrement = () => {
  return {
    type: Action.DECREMENT,
  }
}
