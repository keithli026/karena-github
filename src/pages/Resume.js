import React from 'react'

const Resume = () => {
  return (
    <>
      <img src={process.env.PUBLIC_URL + "/resume/resume_desktop.png"} alt="resume"/>
      <img src={process.env.PUBLIC_URL + "/resume/resume_mobile.png"} alt="resume"/>
    </>
  )
}

export default Resume