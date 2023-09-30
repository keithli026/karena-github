import React from 'react'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {
  let navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)}>
      <img src={process.env.PUBLIC_URL + "/icons/left_arrow_pink.png"} alt="back arrow"></img>Back
    </button>
  )
}

export default BackButton