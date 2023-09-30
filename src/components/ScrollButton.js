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
    <div className='back-to-top'><FontAwesomeIcon icon={faArrowUp} onClick={ScrollToTop} /></div>
  )
}

export default ScrollButton