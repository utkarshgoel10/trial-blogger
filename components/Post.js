import React from 'react'
import Button from './Button'
import './Post.css'
const Post = () => {
  return (
    <div>
      <div>
  
  
    <a href="/" class="card">
      <div class="thumb" style={{backgroundImage: "url(https://images.unsplash.com/photo-1642388691919-231d16e51e7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80)"}}></div>
      <article>
        <h1>Created by You, July Edition</h1>
        <p>Welcome to our monthly feature of fantastic tutorial results created by you, the Envato Tuts+ community! </p>
        <span>Melody Nieves</span>
        <Button />
      </article>
      
    </a>
  
  
</div>
    </div>
  )
}

export default Post
