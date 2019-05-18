import React from 'react'
import { connect } from 'react-redux';
import PostCard from './PostCard'

function PostList ({ posts }) {
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
    posts: state.posts
  }
}

export default connect(mapStateToProps)(PostList);
