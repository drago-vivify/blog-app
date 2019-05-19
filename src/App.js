import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import AppLogin from './components/AppLogin'
import PostList from './components/PostList'
import SinglePost from './components/SinglePost'
import AppHeader from './components/AppHeader'
import NonAuthenticatedRoute from './components/NonAuthenticatedRoute'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import { setUser, userSelector } from './store/user'
import './App.css'


class App extends Component {
  handleLogin = (user) => {
    this.props.setUser(user);
  }

  handleLogout = () => {
    this.props.setUser(null);
  }

  render () {

    return (
      <Router>
        <div className="App">
          <AppHeader/>
          <Switch>
            <NonAuthenticatedRoute
              path='/login'
              user={this.props.user}
              component={AppLogin}
            />
            <ProtectedRoute
              exact
              path="/posts"
              user={this.props.user}
              component={PostList}
            />
            <Redirect from="/" to="/posts" exact />
            <ProtectedRoute
              path="/posts/:id"
              user={this.props.user}
              component={SinglePost}
            />
            <Route
              path="/not-found"
              component={NotFound}
            />
            <Redirect from="" to="/not-found" />
          </Switch>
        </div>
      </Router>
    );
  }
}


function mapStateToProps(state) {
  return {
    user: userSelector(state),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setUser: user => dispatch(setUser(user))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
