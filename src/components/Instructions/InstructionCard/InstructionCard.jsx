import React from 'react'
import classes from './InstructionCard.module.css'

const InstructionCard = props => {
    return (
        <div className="instruction-card">
            <h3 className="font-weight-light mb-3">{props.title}</h3>
            <div className={`instruction-icon text-center ${classes.instructionIcon}`}>{props.children}</div>
        </div>
    )
}

export default InstructionCard