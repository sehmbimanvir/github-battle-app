import React from 'react'
import Player from './Player/Player'

const Players = () => (
  <>
    <h2 className="text-center font-weight-light">Players</h2>
    <div className="row mt-4">
      <div className="col-12 col-sm-12 col-md-6 col-xl-6">
        <Player title="Player One" />
      </div>
      <div className="col-12 col-sm-12 col-md-6 col-xl-6">
        <Player title="Player Two" />
      </div>
    </div>
  </>
)

export default Players