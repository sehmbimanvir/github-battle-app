import React, { useEffect } from 'react'
import Players from '../components/Players/Players'
import { resetPlayers } from '../stores/actions/battleActions'
import { connect } from 'react-redux'
import Instructions from '../components/Instructions/Instructions'

const Battle = ({ players, resetPlayers, history }) => {

  useEffect(() => {
    return () => {
      resetPlayers()
    }
  }, [resetPlayers])

  const onStartBattle = () => {
    const search = `?playerOne=${players[0].name}&playerTwo=${players[1].name}`
    history.push({
      pathname: '/battle/results', search
    })
  }

  const submitBtn = players.length ? (
    <div className="row mt-5">
      <div className="col-12 col-md-2 offset-md-5">
        <button onClick={onStartBattle} className="btn btn-block btn-dark">Battle</button>
      </div>
    </div>
  ) : null

  return (
    <>
      <Instructions />
      <Players />
      {submitBtn}
    </>
  )

}

const mapStateToProps = state => ({
  players: state.battle.players
})

const mapDispatchToProps = { resetPlayers }

export default connect(mapStateToProps, mapDispatchToProps)(Battle)