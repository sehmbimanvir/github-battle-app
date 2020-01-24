import React from 'react'

const InstructionCard = props => {
    return (
        <div className="instruction-card text-center">
            <h3 className="font-weight-light mb-3">{props.title}</h3>
            <div className='instruction-icon'>{props.children}</div>
        </div>
    )
}

export default InstructionCard