export const createStore = (state, rootReducer) => {
  state = rootReducer(state, '__CREATION__')
  const listeners = []

  return {
    dispatch(action) {
      state = rootReducer(state, action)
      listeners.forEach((listener) => listener())
    },

    subscribe(listener) {
      listeners.push(listener)
    },

    getState() {
      return state
    },
  }
}
