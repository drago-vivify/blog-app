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
import { setUser } from './store/user'
import './App.css'

class App extends Component {
  handleLogin = (user) => {
    this.props.setUser(user);
  }

  handleLogout = () => {
    this.props.setUser(null);
  }

  render () {
    const AppLoginPage = (props) => {
      return (
        <AppLogin { ...props } onLogin={this.handleLogin} />
      )
    }

    const PostListPage = (props) => {
      return (
        <PostList { ...props } posts={this.props.posts} />
      )
    }

    const SinglePostPage = ({ match }) => {
      const { id } = match.params
      const post = this.props.posts.find(post => post.id === parseInt(id, 10))

      return post ? (
        <SinglePost post={post} />
      ) : (
        <NotFound />
      )
    }

    return (
      <Router>
        <div className="App">
          <AppHeader
            user={this.props.user}
            onLogout={this.handleLogout}
          />
          <Switch>
            <NonAuthenticatedRoute
              path='/login'
              user={this.props.user}
              component={AppLoginPage}
            />
            <ProtectedRoute
              exact
              path="/posts"
              component={PostListPage}
              user={this.props.user}
            />
            <Redirect
              from="/"
              to="/posts"
              exact
            />
            <ProtectedRoute
              path="/posts/:id"
              component={SinglePostPage}
              user={this.props.user}
            />
            <Route
              path="/not-found"
              component={NotFound}
            />
            <Redirect
              from=""
              to="/not-found"
            />
          </Switch>
        </div>
      </Router>
    );
  }
}


function mapStateToProps(state) {
  return {
    user: state.user,
    posts: state.posts
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
