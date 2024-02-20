import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import siteLogo from "../../assets/images/icons/logo.png"
import fingerLeftIcon from "../../assets/images/icons/finger_left.png"
import fingerTopIcon from "../../assets/images/icons/finger_top.svg"
import Button from 'react-bootstrap/Button'

const Header = () => {

  const [show, setShow] = useState(false);

  const showMenu = () => {
    setShow(!show);
  }
  const closeMenu = () => {
    setShow(false);
  }

  const rotateButton = () => {
    refButton.current.classList.add("rotate");
  }
  const resetButton = () => {
    refButton.current.classList.remove("rotate");
  }

  const refButton = useRef(null);

  const addClassToElement = () => {
    const logo = document.getElementById("logo");
    if (logo) {
      logo.classList.add("scrolled");
    }
    const menu = document.getElementById("menu");
    if (menu) {
      menu.classList.add("scrolled");
    }
  }

  useEffect(() => {
    if (show) {
      refButton.current.classList.add("rotate");
    } else {
      refButton.current.classList.remove("rotate");
    }
    if(document.readyState === "complete") {
      setTimeout(addClassToElement, 1000);
    } else {
      window.addEventListener("load", addClassToElement);
      return () => {
        window.removeEventListener("load", addClassToElement);
      }
    }
  }, [show]);

  return (
    <>
      <Link to="/" title="home" id="logo" onClick={closeMenu}>
        <img alt="site logo" src={siteLogo} />
      </Link>
      <div id="menu" onMouseEnter={rotateButton} onMouseLeave={() => { resetButton(); closeMenu(); }}>
        <Button variant='outline-light' onClick={showMenu} ref={refButton}>
          <img alt="menu" src={fingerTopIcon} />
          {/* {show ? <img alt="menu" className="rotate1" src={fingerLeftIcon} /> : <img alt="menu" src={fingerLeftIcon} />} */}
        </Button>
        <ul className={show ? "show" : null}>
          <li><Link to="/my-story" onClick={closeMenu}>My Story</Link></li>
          <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
          <li><Link to="/lets-talk" onClick={closeMenu} onBlur={closeMenu}>Let's Talk</Link></li>
        </ul>
      </div>
    </>
  );
}

export default Header