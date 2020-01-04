import React from 'react'
import NumberFormatter from '../../UI/NumberFormatter'
import { ReactComponent as StarIcon } from '../../UI/Icons/star.svg'
import { ReactComponent as BranchIcon } from '../../UI/Icons/codeBranch.svg'
import { ReactComponent as ExclamationIcon } from '../../UI/Icons/exclamationTriangle.svg'

const Repo = props => {
  return (
    <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
      <div className="card custom mb-3">
        <img className="card-img-top" alt="None" src={props.item.owner.avatar_url} />
        <div className="card-body text-center">
          <a rel="noopener noreferrer" href={props.item.html_url} target="_blank" className="card-title font-weight-bold">#{props.rank} {props.item.owner.login}</a>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><StarIcon width="20px" fill="#ffd900" /> <NumberFormatter number={props.item.stargazers_count} /> Stars</li>
          <li className="list-group-item"><BranchIcon width="17px" fill="#81c3f5" /> <NumberFormatter number={props.item.forks_count} /> Forks</li>
          <li className="list-group-item"><ExclamationIcon width="20px" fill="#f18a93" /> <NumberFormatter number={props.item.open_issues_count} /> Open Issues</li>
        </ul>
      </div>
    </div>
  )
}

export default Repo