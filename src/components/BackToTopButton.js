import React from 'react'
import backToTop from "../assets/images/icons/backtotop.png"
import Button from 'react-bootstrap/Button'

const BackToTopButton = () => {
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  return (
    <Button id="backToTopButton" onClick={ScrollToTop}>BACK TO TOP</Button>
    // <div className='back-to-top'>
    //   <img src={backToTop} alt="back to top icon" onClick={ScrollToTop} />
    // </div>
  )
}

export default BackToTopButton