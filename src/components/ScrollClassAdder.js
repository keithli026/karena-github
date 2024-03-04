import {useEffect, useState } from 'react'
import throttle from 'lodash.throttle'

const ScrollClassAdder = (el, className, throttleTime) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = throttle(() => {
    const scrollPosition = window.innerHeight;
    // const targetElement = document.querySelector(el);
    const targetElement = typeof el === 'string' ? document.querySelector(el) : el;
    if(targetElement) {
      const targetElementMiddle = (targetElement.getBoundingClientRect().top + targetElement.getBoundingClientRect().bottom) * 0.5;
      if(document.documentElement.scrollTop !== 0 && scrollPosition > targetElementMiddle) {;
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      // console.log("scroll position:", scrollPosition, ", target element middle:",targetElementMiddle, "target element:", targetElement);
    }

  }, throttleTime);
  useEffect(() => {

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[]);

  const updateClassName = isScrolled ? className : "";
  return updateClassName;
}

export default ScrollClassAdder