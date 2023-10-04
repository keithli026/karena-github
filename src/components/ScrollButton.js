import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const ScrollButton = () => {
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  return (
    <div className='back-to-top'>
      <img src={process.env.PUBLIC_URL + "/icons/backtotop.png"} alt="back to top icon" onClick={ScrollToTop} />
      {/* <FontAwesomeIcon icon={faArrowUp} onClick={ScrollToTop} /> */}
    </div>
  )
}

export default ScrollButton