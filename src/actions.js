import { Action } from './root-reducer'

export const createInit = () => {
  return {
    type: Action.INIT,
  }
}

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

export const createAsyncIncrement = () => {
  return function (dispatch) {
    setTimeout(() => {
      dispatch(createIncrement())
    }, 2000)
  }
}
