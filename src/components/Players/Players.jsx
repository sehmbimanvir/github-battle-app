import React from 'react'
import Player from './Player/Player'

const Players = () => (
  <>
    <h1 className="text-center font-weight-light mt-4">Players</h1>
    <div className="row mt-4">
      <div className="col-12 col-sm-12 col-md-6 col-xl-6 mb-sm-4 mb-4 mb-md-0">
        <Player title="Player One" />
      </div>
      <div className="col-12 col-sm-12 col-md-6 col-xl-6">
        <Player title="Player Two" />
      </div>
    </div>
  </>
)

export default Players