const Action = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  THEME: 'THEME',
  INIT: '__INIT__',
}

const counterReducer = (state, action) => {
  switch (action.type) {
    case Action.INCREMENT:
      return { ...state, counter: state.counter + 1 }
    case Action.DECREMENT:
      return { ...state, counter: state.counter - 1 }
    default:
      return state
  }
}

const rootReducer = (state, action) => {
  return counterReducer(state, action)
}

export { rootReducer, Action }
