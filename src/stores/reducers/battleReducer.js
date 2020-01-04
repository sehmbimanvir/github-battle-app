import * as actions from '../actions/battleActions'

const initialState = {
  players: []
}

const reducer = (state = initialState, action) => {
  const players = [...state.players]
  switch (action.type) {
    case actions.ADD_PLAYER:
      const payload = action.payload
      players.push({ name: payload.name })
      return { players };

    case actions.REMOVE_PLAYER:
      const index = state.players.findIndex(item => item.name === action.name)
      if (index !== -1) {
        players.splice(index, 1)
      }
      return { players }

    case actions.REMOVE_ALL_PLAYERS:
      return { players: [] }

    default:
      return state
  }
}

export default reducer