import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

function SinglePost({ posts, match }) {
  const { id } = match.params;
  const post = posts.find(post => post.id === parseInt(id, 10));

  return post ? (
    <div>
      <h2>{ post.title } </h2>
      <p>{ post.body }</p>
    </div>
  ) : (
    <Redirect to="/not-found" />
  );
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps)(SinglePost);
