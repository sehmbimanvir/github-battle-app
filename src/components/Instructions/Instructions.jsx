import React from 'react'
import InstructionCard from './InstructionCard/InstructionCard'
import { ReactComponent as UserFriendsIcon } from '../UI/Icons/userFriends.svg'
import { ReactComponent as FighterJetIcon } from '../UI/Icons/fighterJet.svg'
import { ReactComponent as AwardIcon } from '../UI/Icons/award.svg'

const Instructions = () => {
  return (
    <>
      <h1 className="text-center font-weight-light mt-4">Instructions</h1>
      <div className="row mt-4 mb-4">
        <div className="col-12 col-sm-12 col-md-4 mb-3">
          <InstructionCard title="Enter Users">
            <UserFriendsIcon fill="#f6e58d" width="200px" />
          </InstructionCard>
        </div>

        <div className="col-12 col-sm-12 col-md-4 mb-3">
          <InstructionCard title="Battle">
            <FighterJetIcon fill="#eb4d4b" width="200px" />
          </InstructionCard>
        </div>

        <div className="col-12 col-sm-12 col-md-4 mb-3">
          <InstructionCard title="See Winner">
            <AwardIcon fill="#f9ca24" width="120px" />
          </InstructionCard>
        </div>
      </div>
    </>
  )
}

export default Instructions