import React, {useEffect, useState} from 'react'
import throttle from 'lodash.throttle'

const ScrollClassAdder = (targetElementId, className, throttleTime) => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(()=> {
    const handleScroll = throttle(() => {
      const scrollPosition = window.scrollY;
      const targetElement = document.getElementById(targetElementId);
      const targetElementTop = targetElement.getBoundingClientRect().top;
      if(scrollPosition > targetElementTop) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      // console.log("scrolling");
    }, throttleTime);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[targetElementId, throttleTime]);

  const updateClassName = isScrolled ? className : "";
  return updateClassName;
}

export default ScrollClassAdder