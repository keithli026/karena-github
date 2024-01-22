import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import siteLogo from "../../assets/images/icons/logo.png"
import fingerDownIcon from "../../assets/images/icons/finger_down.png"
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

  const refHeader = useRef(null);
  const refMenu = useRef(null);
  useEffect(() => {
    refMenu.current.style.top = `${refHeader.current.clientHeight}px`;

  }, []);

  return (
    <div id="header" >
      <Navbar id="navTop" ref={refHeader}>
        <Container fluid>
          <Link to="/" title="home" id="logo" onClick={closeMenu}>
            <img alt="site logo" src={siteLogo} />
          </Link>
          <Button variant='outline-light' onClick={showMenu}>
            {show ? <img alt="menu" src={fingerDownIcon} /> : <img alt="menu" src={fingerLeftIcon} />}
          </Button>
        </Container>
      </Navbar>
      <Navbar className={show ? "show" : null} ref={refMenu} id="navMain">
        <ul>
          <li><Link to="/my-story" onClick={closeMenu}>My Story</Link></li>
          <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
          {/* <li><Link to="/lets-talk" state={{ targetId: "info" }} onClick={closeMenu}>Let's Talk</Link></li> */}
          <li><a href="mailto: iamkarena66@gmail.com" onClick={closeMenu}>Let's Talk</a></li>
        </ul>
      </Navbar>
    </div>
  );
}

export default Header