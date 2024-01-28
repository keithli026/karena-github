import React from 'react'
import WebForm from '../components/WebForm'
import Container from "react-bootstrap/Container"

const LetsTalk = () => {
  return (
    <div id="lets-talk">
      <Container>
        <div className='title'>Let's talk</div>
        <WebForm />
      </Container>
    </div>
  )
}

export default LetsTalk