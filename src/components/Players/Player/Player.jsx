import React from 'react'
import { addPlayer, removePlayer } from '../../../stores/actions/battleActions'
import { connect } from 'react-redux'
import { getUser } from '../../../services/Github'
import classes from './Player.module.css'
import { ReactComponent as TimesCircle } from '../../UI/Icons/timesCircle.svg'

class Player extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      name: '',
      image: null,
      error: false,
      submitted: false
    }
  }

  onSubmitName = e => {
    e.preventDefault()

    const image = `https://github.com/${this.state.name}.png?size=200`

    getUser(this.state.name).then(response => {
      this.setState({
        submitted: true,
        image,
        error: false
      })
      this.props.onNameSave({ name: this.state.name })
    }, error => {
      this.setState({ error: 'User Not Found' })
    })
  }

  handleInputChange = e => {
    this.setState({
      name: e.target.value
    })
  }

  onPlayerClose = () => {
    this.props.onNameDelete(this.state.name)
    this.setState({ submitted: false, name: '', error: false })
  }

  render () {
    const result = !this.state.submitted ? (
      <form className="player" onSubmit={this.onSubmitName}>
        <label className={classes.playerLabel}>{this.props.title}</label>
        <div className="input-group mb-3">
          <input required value={this.state.name} onChange={this.handleInputChange} type="text" className="form-control" placeholder="Github Username" />
          <div className="input-group-append">
            <button disabled={!this.state.name} className="btn btn-outline-dark" type="submit">Submit</button>
          </div>
        </div>
        {this.state.error && <span className="text-danger">{this.state.error}</span>}
      </form>
    ) : (
        <div className="player">
          <h4 className={classes.playerLabel}>{this.props.title}</h4>
          <div className={`row m-0 ` + classes.boxBgLight}>
            <div className={classes.playerInfo}>
              <img width="50px" className="mr-4" src={this.state.image} alt="User" />
              <a rel="noopener noreferrer" target="_blank" href={`https://github.com/${this.state.name}`}>{this.state.name}</a>
            </div>
            <button className="pull-right" onClick={this.onPlayerClose}>
              <TimesCircle width="30px" fill='#d35400' />
            </button>
          </div>
        </div>
      )

    return result
  }
}

const mapDispatchToProps = {
  onNameSave: (data) => addPlayer(data),
  onNameDelete: (name) => removePlayer(name)
}

export default connect(null, mapDispatchToProps)(Player)