import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className="contact container">
      <div className='title'>Let's Talk!</div>
      <p>I'd love to chat about new opportunities or anything design related!</p>
      <Link to="/my-story" state={{ targetId: "info" }} className='btn btn-light'>Contact me</Link>
    </div>
  )
}

export default Contact