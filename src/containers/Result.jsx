import React, { Component } from 'react'
import queryString from 'query-string'
import { getUser } from '../services/Github'
import ResultCard from '../components/ResultCard/ResultCard'
import Loader from '../components/UI/Loader'

class Result extends Component {

  constructor (props) {
    super(props)
    this.state = {
      players: []
    }
  }

  componentDidMount () {
    document.title = this.props.title
    const urlParams = queryString.parse(this.props.location.search)
    this.setPlayerDetails(urlParams.playerOne)
    this.setPlayerDetails(urlParams.playerTwo)

  }

  setPlayerDetails = username => {
    getUser(username).then(response => {
      setTimeout(() => {
        const result = response.data
        const players = [...this.state.players]
        result.score = result.followers + result.public_repos
        players.push(response.data)
        this.setState({ players })
      }, 1500)
    })
  }

  resetBattle = () => {
    this.props.history.push('/battle')
  }

  render () {
    if (this.state.players.length === 2) {
      let [player1, player2] = this.state.players
      const winner = player2.score > player1.score

      /** Shift Winner to First Place */
      if (winner) {
        [player2, player1] = [player1, player2]
      }

      return (
        <>
          <div className="row mt-5">
            <div className="col-12 col-md-8 col-lg-8 offset-lg-2 offset-md-2">
              <div className="row">
                <div className="col-12 col-sm-6 col-md-6 col-lg-5 mb-4">
                  <ResultCard winner item={player1} />
                </div>
                {/* <div className="col-2"></div> */}
                <div className="col-12 col-sm-6 col-md-6 col-lg-5 offset-lg-2">
                  <ResultCard item={player2} />
                </div>
              </div>
            </div>

          </div>
          <div className="row mt-5 mb-4">
            <div className="col-md-2 col-12 offset-md-5 text-center">
              <button onClick={this.resetBattle} className="btn-block btn btn-dark">Reset</button>
            </div>
          </div>
        </>
      )
    }
    return (<div className="mt-5 text-center">
      <Loader text='Battling' />
    </div>)
  }
}

export default Result