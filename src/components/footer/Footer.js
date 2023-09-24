import React from 'react'
import "./footer.scss"

const Footer = () => {
  return (
    <div id="footer">Made with<img src={process.env.PUBLIC_URL + '/icons/heart.png'} alt="heart" />by Karena Li. Copyright 2023 - All rights reserved.</div>
  )
}

export default Footer