import {useEffect, useState} from 'react'
import throttle from 'lodash.throttle'

const ScrollClassAdder = (el, className, throttleTime) => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollPosition = window.innerHeight;
      // const targetElement = document.querySelector(el);
      const targetElement = typeof el === 'string' ? document.querySelector(el) : el;
      const targetElementMiddle = (targetElement.getBoundingClientRect().top + targetElement.getBoundingClientRect().bottom) * 0.5;
      if(scrollPosition > targetElementMiddle) {
        console.log("into view");
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      console.log("scroll position:", scrollPosition, ", target element middle:",targetElementMiddle, "target element:", targetElement);
    }, throttleTime);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[el, throttleTime]);

  const updateClassName = isScrolled ? className : "";
  return updateClassName;
}

export default ScrollClassAdder