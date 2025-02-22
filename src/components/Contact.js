import React from 'react'
import { Link } from 'react-router-dom'
import ScrollClassAdder from './ScrollClassAdder'
import Button from 'react-bootstrap/Button'
const Contact = () => {

  return (
    <div className={`contact ${ScrollClassAdder(".contact", "scrolled", 200)}`}>
      <div className='title'>Let's Talk!</div>
      <p>I'd love to chat about new opportunities or anything design related!</p>
      {/* <Link to="/my-story" state={{ targetId: "info" }} className='btn btn-light'>Contact me</Link> */}
      {/* <Link to="/lets-talk" className='btn btn-light'>Contact me</Link> */}
       <Button variant='outline-dark' href="/lets-talk">CONTACT ME</Button>
    </div>
  )
}

export default Contact