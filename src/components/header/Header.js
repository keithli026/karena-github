import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./header.scss";
import siteLogo from "../../assets/images/icons/logo.png"
import fingerDownIcon from "../../assets/images/icons/finger_down.png"
import fingerLeftIcon from "../../assets/images/icons/finger_left.png"

const Header = () => {
  const [loaded, setLoaded] = useState(false);
  const [show, setShow] = useState(false);
  const showMenu = () => {
    setShow(!show);
  }
  const closeMenu = () => {
    setShow(false);
  }
  const onLoad = () => {
    // console.log("Image onloaded", refImg.current, refImg.current.clientHeight);
    setLoaded(true);
  }
  const onError = () => {
    console.log("Image error");
  }

  const refHeader = useRef(null);
  const refMenu = useRef(null);
  const refImg = useRef(null);
  useEffect(() => {
    refMenu.current.style.top = `${refHeader.current.clientHeight}px`;

  }, [loaded]);

  return (
    <>
      <div id="header" ref={refHeader}>
        <div className='wrapper'>
          <Link to="/" title="home" id="logo" onClick={closeMenu}>
            <img alt="site logo" src={siteLogo} ref={refImg} onLoad={onLoad} onError={onError} />
          </Link>
          <div className="btn" onClick={showMenu}>
            {show ? <img alt="menu" src={fingerDownIcon} /> : <img alt="menu" src={fingerLeftIcon} />}
          </div>
          <nav className={show ? "show" : null} ref={refMenu}>
            <ul>
              <li><Link to="/my-story" onClick={closeMenu}>My Story</Link></li>
              <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
              {/* <li><Link to="/my-story" state={{ targetId: "info" }} onClick={closeMenu}>Let's Talk</Link></li> */}
              <li><a href="mailto: iamkarena66@gmail.com" onClick={closeMenu}>Let's Talk</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header