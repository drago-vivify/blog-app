import React from 'react'
import { connect } from 'react-redux';
import PostCard from './PostCard'
import { getPosts, postsSelector } from '../store/posts'

function PostList ({ posts, getPosts }) {

  // dispatch the action for fetching posts from API
  getPosts();

  return (
    <div>
      {
        posts.map(post => (
          <PostCard post={post} key={post.id} />
        ))
      }
    </div>
  )
}

function mapStateToProps(state) {
  return {
    posts: postsSelector(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getPosts: () => dispatch(getPosts())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
