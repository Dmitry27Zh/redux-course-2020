export const createStore = (state, rootReducer) => {
  state = rootReducer(state)
  const listeners = []

  return {
    dispatch(action) {
      state = rootReducer(state, action)
      listeners.forEach((listener) => listener())
    },

    subscribe(listener) {
      listeners.push(listener)
    },
  }
}
