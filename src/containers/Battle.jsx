import React, { Component } from 'react'
import Players from '../components/Players/Players'
import { resetPlayers } from '../stores/actions/battleActions'
import { connect } from 'react-redux'
import Instructions from '../components/Instructions/Instructions'

class Battle extends Component {

  componentDidMount () {
    document.title = this.props.title
  }

  componentWillUnmount () {
    this.props.resetPlayers()
  }

  onStartBattle = () => {
    const players = this.props.players
    const search = `?playerOne=${players[0].name}&playerTwo=${players[1].name}`
    this.props.history.push({
      pathname: '/battle/results',
      search
    })
  }

  render () {
    const submitBtn = this.props.players.length === 2 && (
      <div className="row mt-5">
        <div className="col-12 col-md-2 offset-md-5">
          <button onClick={this.onStartBattle} className="btn btn-block btn-dark">Battle</button>
        </div>
      </div>
    )
    return (
      <>
        <Instructions />
        <Players />
        {submitBtn}
      </>
    )
  }
}

const mapStateToProps = state => ({
  players: state.battle.players
})

const mapDispatchToProps = { resetPlayers }

export default connect(mapStateToProps, mapDispatchToProps)(Battle)