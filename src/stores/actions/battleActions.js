export const ADD_PLAYER = 'ADD_PLAYER'
export const REMOVE_PLAYER = 'REMOVE_PLAYER'
export const REMOVE_ALL_PLAYERS = 'REMOVE_ALL_PLAYERS'

export const removePlayer = name => {
  return dispatch => {
    dispatch({ type: REMOVE_PLAYER, name })
  }
}

export const addPlayer = data => {
  return dispatch => {
    dispatch({ type: ADD_PLAYER, payload: data })
  }
}

export const resetPlayers = () => {
  return dispatch => {
    dispatch({ type: REMOVE_ALL_PLAYERS })
  }
}