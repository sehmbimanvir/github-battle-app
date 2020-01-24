import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import { getUser } from '../services/Github'
import ResultCard from '../components/ResultCard'
import Loader from '../components/UI/Loader'

const Result = ({ location, history }) => {
  const [players, updatePlayers] = useState([])

  const setPlayerDetails = ({ playerOne: user1, playerTwo: user2 }) => {
    Promise.all([getUser(user1), getUser(user2)]).then(response => {

      const [user1Details, user2Details] = response.map(item => {
        const data = item.data
        data.score = data.followers + data.public_repos
        return data
      })

      updatePlayers([...players, user1Details, user2Details])
    })
  }

  const resetBattle = () => {
    history.push('/battle')
  }

  const ResultCardWrapper = ({ player1, player2 }) => (
    <div className="row">
      <div className="col-12 col-sm-6 col-md-6 col-lg-5 mb-4">
        <ResultCard winner item={player1} />
      </div>

      <div className="col-12 col-sm-6 col-md-6 col-lg-5 offset-lg-2">
        <ResultCard item={player2} />
      </div>
    </div>
  )

  const ResetBattleBtn = () => (
    <div className="row mt-5 mb-4">
      <div className="col-md-2 col-12 offset-md-5 text-center">
        <button onClick={resetBattle} className="btn-block btn btn-dark">Reset</button>
      </div>
    </div>
  )

  useEffect(() => {
    const urlParams = queryString.parse(location.search)
    setPlayerDetails(urlParams)
  }, [])

  if (players.length === 2) {
    let [player1, player2] = players
    const winner = player2.score > player1.score

    /** Shift Winner to First Place */
    if (winner) {
      [player2, player1] = [player1, player2]
    }

    return (
      <>
        <div className="row mt-5">
          <div className="col-12 col-md-8 col-lg-8 offset-lg-2 offset-md-2">
            <ResultCardWrapper player1={player1} player2={player2} />
          </div>
        </div>
        <ResetBattleBtn />
      </>
    )
  }
  return (<div className="mt-5 text-center">
    <Loader text='Battling' />
  </div>)
}

export default Result