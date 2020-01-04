import * as actions from '../actions/popularReporsActions'

const initialState = {
  repos: {
    All: []
  },
  language: 'All',
  loading: false
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case actions.LOAD_REPOS:
      const repos = { ...state.repos }
      const { language, items } = action.payload
      repos[language] = items
      return { ...state, repos, language: action.payload.language }

    case actions.DELETE_REPOS:
      return { ...state, repos: { All: [] }, language: 'All' }


    case actions.CHANGE_LANGUAGE:
      return { ...state, language: action.language }

    case actions.START_LOADING:
      return { ...state, loading: true }

    case actions.STOP_LOADING:
      return { ...state, loading: false }

    default:
      return state
  }
}

export default reducer