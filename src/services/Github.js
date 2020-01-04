import Http from './Http'

export const getUser = (name) => {
    return Http.get(`/users/${name}`)
}

export const getRepositories = (language) => {
    return Http.get(`/search/repositories?q=stars:%3E1+language:${language}&sort=stars&order=desc&type=Repositories`)
}