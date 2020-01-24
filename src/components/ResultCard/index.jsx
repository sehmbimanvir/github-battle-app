import React from 'react'
import classes from './ResultCard.module.css'
import { ReactComponent as CodeIcon } from '../UI/Icons/code.svg'
import { ReactComponent as FollowersIcon } from '../UI/Icons/users.svg'
import { ReactComponent as FollowingIcon } from '../UI/Icons/userFriends.svg'

const ResultCard = ({ winner, item }) => {
  return (
    <div className={`${classes.resultCard} text-center`}>
      <h3 className="title font-weight-light mt-3 mb-4">{winner ? 'Winner' : 'Loser'}</h3>
      <div className="profile">
        <img src={item.avatar_url} width="150px" alt="User Result Card" />
        <p className="score mt-3 mb-3 font-weight-bold">Score: {item.score}</p>
        <h4 className="username">{item.login}</h4>
        <ul className={`${classes.listDetails} mt-4`}>
          <li><FollowersIcon width="25px" fill="#3498db" /> {item.followers} Followers</li>
          <li><FollowingIcon width="25px" fill="#2ecc71" /> {item.following} Following</li>
          <li><CodeIcon width="25px" fill="#34495e" /> {item.public_repos} Repositories</li>
        </ul>
      </div>
    </div>
  )
}

export default ResultCard