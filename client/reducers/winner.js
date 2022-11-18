const initialState = {}

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    // actions here
    case 'DECLARE_WINNER': {
      return payload
    }

    default:
      return state
  }
}

export default reducer
