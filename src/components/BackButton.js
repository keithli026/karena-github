import React from 'react'
import { useNavigate } from 'react-router-dom'
import arrowPink from "../assets/images/icons/arrow_pink.png"
const BackButton = () => {
  let navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)}>
      <img src={arrowPink} alt="back arrow" />Back
    </button>
  )
}

export default BackButton