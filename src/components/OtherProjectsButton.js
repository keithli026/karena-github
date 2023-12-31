import React from 'react'
import { Link } from 'react-router-dom'
import "./otherProjectButton.scss"

const OtherProjectsButton = () => {
  return (
    <Link to="/projects" className='backButton'>Other projects</Link>
  )
}

export default OtherProjectsButton