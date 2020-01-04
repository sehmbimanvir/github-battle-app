import React, { Component } from 'react'
import Navbar from '../components/shared/Navbar'
import GithubRepoList from '../components/RepoList/RepoList'
import { connect } from 'react-redux'
import { loadRepositories, unsetRepositories } from '../stores/actions/popularReporsActions'
import Loader from '../components/UI/Loader'

class Popular extends Component {
  componentDidMount () {
    this.props.onLoadRepos()
  }

  onChangeCategory = category => {
    this.props.onLoadRepos(category)
  }

  componentWillUnmount () {
    this.props.unsetRepositories()
  }

  render () {
    return (
      <>
        <Navbar language={this.props.language} onChange={this.onChangeCategory} />
        {!this.props.loading ? <GithubRepoList repos={this.props.items} /> : <div className="mt-5 text-center"><Loader text="Fetching Repositories" /></div>}
      </>
    )
  }
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