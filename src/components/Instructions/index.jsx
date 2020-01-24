import React from 'react'
import InstructionCard from './InstructionCard'
import { ReactComponent as UserFriendsIcon } from '../UI/Icons/userFriends.svg'
import { ReactComponent as FighterJetIcon } from '../UI/Icons/fighterJet.svg'
import { ReactComponent as AwardIcon } from '../UI/Icons/award.svg'

const Instructions = () => {
  return (
    <>
      <h1 className="text-center font-weight-light mt-4">Instructions</h1>
      <div className="row mt-4 mb-4">
        <div className="col-12 col-md-10 col-lg-10 offset-lg-1 offset-md-1">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-4 mb-3">
              <InstructionCard title="Enter Users">
                <UserFriendsIcon fill="#1abc9c" width="200px" />
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
        </div>
      </div>
    </>
  )
}

export default Instructions