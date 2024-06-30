import React from 'react'
import WebForm from '../components/WebForm'
import Container from "react-bootstrap/Container"
import ReactGA from 'react-ga4'

const LetsTalk = () => {
  ReactGA.send({ 
    hitType: "pageview", 
    page: "/", 
    title: "Let's talk" 
  });

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