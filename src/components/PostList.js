import React from 'react'
import PostCard from './PostCard'

export default function PostList ({ posts }) {
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