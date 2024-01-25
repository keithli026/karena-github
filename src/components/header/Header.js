import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import siteLogo from "../../assets/images/icons/logo.png"
import fingerUpWhiteIcon from "../../assets/images/icons/finger_up_white.png"
import fingerUpIcon from "../../assets/images/icons/finger_up.png"
import fingerLeftIcon from "../../assets/images/icons/finger_left.png"
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'

// import ScrollClassAdder from '../ScrollClassAdder'

const Header = () => {
  // const [loaded, setLoaded] = useState(false);
  // const className = ScrollClassAdder("header", "scrolled", 200);
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
  const refHeader = useRef(null);
  const refMenu = useRef(null);
  const refButton = useRef(null);
  useEffect(() => {
    if(show) {
      refButton.current.classList.add("rotate");
    } else {
      refButton.current.classList.remove("rotate");
    }
    // refMenu.current.style.top = `${refHeader.current.clientHeight}px`;

  }, [show]);

  return (
    <div id="header" >
      <Navbar id="navTop" ref={refHeader}>
        <Container fluid className='wrapper'>
          <Link to="/" title="home" id="logo" onClick={closeMenu}>
            <img alt="site logo" src={siteLogo} />
          </Link>
          <div id="menu" onMouseEnter={rotateButton} onMouseLeave={() => {resetButton(); closeMenu();}}>
            <Button variant='outline-light' onClick={showMenu} ref={refButton}>
              <img alt="menu" src={fingerLeftIcon} />
              {/* {show ? <img alt="menu" className="rotate1" src={fingerLeftIcon} /> : <img alt="menu" src={fingerLeftIcon} />} */}
            </Button>
            <ul className={show ? "show" : null}>
              <li><Link to="/my-story" onClick={closeMenu}>My Story</Link></li>
              <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
              {/* <li><Link to="/lets-talk" state={{ targetId: "info" }} onClick={closeMenu}>Let's Talk</Link></li> */}
              <li><a href="mailto: iamkarena66@gmail.com" onClick={closeMenu}>Let's Talk</a></li>
            </ul>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header