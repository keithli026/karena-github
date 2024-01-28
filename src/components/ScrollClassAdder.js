import {useEffect, useState, useContext} from 'react'
import { DataContext } from './DataContext'
import throttle from 'lodash.throttle'

const ScrollClassAdder = (el, className, throttleTime) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { elementRef } = useContext(DataContext);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollPosition = window.innerHeight;
      // const targetElement = document.querySelector(el);
      const targetElement = typeof el === 'string' ? document.querySelector(el) : el;
      const targetElementMiddle = (targetElement.getBoundingClientRect().top + targetElement.getBoundingClientRect().bottom) * 0.5;
      if(scrollPosition > targetElementMiddle) {;
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      // console.log("scroll position:", scrollPosition, ", target element middle:",targetElementMiddle, "target element:", targetElement);
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