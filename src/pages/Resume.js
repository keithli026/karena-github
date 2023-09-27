import React from 'react'
import "./resume.scss"

const Resume = () => {
  return (
    <div id="resume">
      <div className='image desktop'><img src={process.env.PUBLIC_URL + "/resume/resume_desktop.png"} alt="resume"/></div>
      <div className='image mobile'><img src={process.env.PUBLIC_URL + "/resume/resume_mobile.png"} alt="resume" /></div>
    </div>
  )
}

export default Resume