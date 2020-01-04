const NumberFormatter = props => {
    return new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(props.number)
}

export default NumberFormatter