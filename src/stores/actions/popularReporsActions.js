import { getRepositories } from '../../services/Github'

export const LOAD_REPOS = 'LOAD_REPOS'
export const DELETE_REPOS = 'DELETE_REPOS'
export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE'
export const START_LOADING = 'START_LOADING'
export const STOP_LOADING = 'STOP_LOADING'

export const setRepositories = payload => ({
  type: LOAD_REPOS,
  payload
})

export const unsetRepositories = () => ({
  type: DELETE_REPOS,
  payload: []
})

export const changeLanguage = language => ({
  type: CHANGE_LANGUAGE,
  language
})

export const setLoading = (type) => ({
  type
})

export const loadRepositories = language => {
  return (dispatch, getState) => {
    const oldRepos = getState().popular.repos[language]
    dispatch(changeLanguage(language))

    if (!oldRepos || !oldRepos.length) {
      dispatch(setLoading(START_LOADING))
      getRepositories(language).then(({ data }) => {
        dispatch(setRepositories({ ...data, language }))
        dispatch(setLoading(STOP_LOADING))
      })
    }
  }
}