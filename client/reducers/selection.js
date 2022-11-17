const initialState = [
  Math.floor(Math.random() * 125),
  Math.floor(Math.random() * 125),
]

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    // actions here
    case 'SELECT_CHAR': {
      let copy = [...state]
      copy[payload.index] = payload.id
      return copy
    }

    default:
      return state
  }
}

export default reducer
