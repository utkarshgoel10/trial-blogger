import React from 'react'
// import Cards from './Cards'
import Post from './Post'
import './Posts.css'
const Posts = () => {
  return (
    <div>
      <div className="posts-div" id='pg'>
        <h2>Latest Updates</h2>
        <div className="cards-div">
            {/* <Cards /> */}
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
      </div>
    </div>
  )
}

export default Posts
