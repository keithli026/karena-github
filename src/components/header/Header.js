import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import siteLogo from "../../assets/images/icons/logo.png"
import fingerTopIcon from "../../assets/images/icons/finger_top.svg"
import Button from 'react-bootstrap/Button'
import ScrollClassAdder from '../ScrollClassAdder'
import throttle from 'lodash.throttle'

const Header = () => {
  const [show, setShow] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
  const handleScroll = throttle(() => {
    setIsScrolled(true);
  }, 250);

  useEffect(() => {
    if (show) {
      refButton.current.classList.add("rotate");
    } else {
      refButton.current.classList.remove("rotate");
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, [show,isScrolled]);

  return (
    <>
      <Link to="/" title="home" id="logo" onClick={closeMenu} className={isScrolled ? "scrolled": null}>
        <img alt="site logo" src={siteLogo} />
      </Link>
      <div id="menu" onMouseEnter={rotateButton} onMouseLeave={() => { resetButton(); closeMenu(); }} className={isScrolled ? "scrolled": null}>
        <Button variant='link' size="sm" onClick={showMenu} ref={refButton}>
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