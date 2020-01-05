import React from 'react'

const GithubStarButton = props => (
    <a className="github-button" href={`https://github.com/${props.username}/${props.repo}`} data-size="large" data-show-count="true">{props.children}</a>
)

export default GithubStarButton