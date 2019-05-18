import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setUser, login } from '../store/user';

const users = [
  { email: 'john.doe@example.com', password: '12345' },
  { email: 'jane.doe@example.com', password: '12345' },
  { email: 'tom.doe@example.com', password: '12345' },
  { email: 'blair.doe@example.com', password: '12345' },
  { email: 'kate.doe@example.com', password: '12345' }
]

class AppLogin extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password:''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { email, password } = this.state

    this.props.login(email, password)
  }

  render () {
    return (
      <form
        className="border border-light p-5"
        onSubmit={this.handleSubmit}
      >
        <input
          type="email"
          className="form-control mb-4"
          placeholder="you@example.com"
          onInput={event => { this.setState({ email: event.target.value })}}
        />
        <input
          type="password"
          className="form-control mb-4"
          placeholder="******"
          onInput={event => { this.setState({ password: event.target.value })}}
        />
        <button
          className="btn btn-info btn-block"
          type="submit"
        >
          Sign in
        </button>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login: (email, password) => dispatch(login(email, password))
  }
}

export default connect(null, mapDispatchToProps)(AppLogin)
