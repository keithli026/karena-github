import React from 'react'
import { useNavigate } from 'react-router-dom'
import arrowPink from "../assets/images/icons/left_arrow_pink.png"
import Button from 'react-bootstrap/Button'
const BackButton = () => {
  let navigate = useNavigate();
  return (
    <Button variant="outline-light" className="backBtn" onClick={() => navigate(-1)}>
      <img src={arrowPink} alt="back arrow" />
    </Button>
  )
}

export default BackButton