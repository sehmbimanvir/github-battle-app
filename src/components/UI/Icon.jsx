import React from 'react'

const Icon = props => (
    // React.lazy(() => import('./Icons/' + props.icon))
    <img src={`./Icons/${props.name}.svg`} />
)

export default Icon