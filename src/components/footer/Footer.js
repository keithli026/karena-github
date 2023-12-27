import React from 'react'
import "./footer.scss"
import heartIcon from "../../assets/images/icons/heart.png"

const Footer = () => {
  return (
    <div id="footer">Made with<img src={heartIcon} alt="heart" />by Karena Li. Copyright 2023 - All rights reserved.</div>
  )
}

export default Footer