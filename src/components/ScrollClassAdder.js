import {useEffect, useState} from 'react'
import throttle from 'lodash.throttle'

const ScrollClassAdder = (el, className, throttleTime) => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollPosition = window.scrollY;
      // const targetElement = document.querySelector(el);
      const targetElement = typeof el === 'string' ? document.querySelector(el) : el;
      const targetElementTop = targetElement.getBoundingClientRect().top;
      if(scrollPosition > targetElementTop) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      console.log("scroll position:", scrollPosition, ", target element top:",targetElementTop, "target element:", targetElement);
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