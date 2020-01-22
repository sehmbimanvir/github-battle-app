import React, { useEffect } from 'react'
import Navbar from '../shared/Navbar'
import GithubRepoList from '../components/RepoList/RepoList'
import { connect } from 'react-redux'
import { loadRepositories, unsetRepositories } from '../stores/actions/popularReporsActions'
import Loader from '../components/UI/Loader'

const Popular = ({ items, loading, language, onLoadRepos, unsetRepositories }) => {

  const onChangeCategory = category => {
    onLoadRepos(category)
  }

  useEffect(() => {
    onLoadRepos()
    return () => {
      unsetRepositories()
    }
  }, [onLoadRepos, unsetRepositories])

  return (
    <>
      <Navbar language={language} onChangeCategory={onChangeCategory} />
      {!loading ? <GithubRepoList repos={items} /> : <div className="mt-5 text-center"><Loader text="Fetching Repositories" /></div>}
    </>
  )
}

const mapStateToProps = state => ({
  items: state.popular.repos[state.popular.language],
  loading: state.popular.loading,
  language: state.popular.language
})

const mapDispatchToProps = {
  onLoadRepos: (language = 'All') => loadRepositories(language),
  unsetRepositories
}

export default connect(mapStateToProps, mapDispatchToProps)(Popular)
