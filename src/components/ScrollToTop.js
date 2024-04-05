import React from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = (props) => {
  // console.log(props);
  const location = useLocation();
  useEffect(() => {
    if(!location.hash) {
      window.scrollTo(0,0);
    } else {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  },[location]);
  return (
    <>{props.children}</>
  )
}

export default ScrollToTop