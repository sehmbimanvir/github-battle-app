import React, { useEffect, useState } from 'react'

const Loader = ({ text }) => {
    const [loading, setLoading] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => updateLoader(), 200)

        // Component will UnMount
        return () => {
            clearInterval(intervalId)
        }
    })

    const updateLoader = () => {
        if (loading === 3) {
            setLoading(0)
            return;
        }
        setLoading(loading + 1)
    }

    const dots = Array(loading + 1).join('.')

    return <h2 className='font-weight-light'>{text}{dots}</h2>
}

export default Loader