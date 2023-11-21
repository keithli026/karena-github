import React from 'react'
import { useState, useLayoutEffect, useRef, useReducer, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { lg } from "../../GlobalStyle"
import "./header.scss";

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    return () => {
      window.removeEventListener("resize", updateSize);
    }
  }, []);
  return size;
}

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
  const [width, height] = useWindowSize();
  useEffect(() => {
    refMenu.current.style.top = `${refHeader.current.clientHeight}px`;
    if (window.innerWidth < lg) {
      // refMenu.current.style.top = `${refHeader.current.clientHeight}px`;
      // refMenu.current.style.height = `${window.innerHeight - refHeader.current.clientHeight}px`;
    }

  }, [loaded]);

  return (
    <>
      <div id="header" ref={refHeader}>
        <div className='wrapper'>
          <Link to="/" title="home" id="logo" onClick={closeMenu}>
            <img alt="site logo" src={process.env.PUBLIC_URL + '/icons/logo.png'} ref={refImg} onLoad={onLoad} onError={onError} />
          </Link>
          <div className="btn" onClick={showMenu}>
            {show ? <img alt="menu" src={process.env.PUBLIC_URL + '/icons/finger_down.png'} /> : <img alt="menu" src={process.env.PUBLIC_URL + '/icons/finger_left.png'} />}
          </div>
          <nav className={show ? "show" : null} ref={refMenu}>
            <ul>
              <li><Link to="/my-story" onClick={closeMenu}>My Story</Link></li>
              <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
              {/* <li><Link to="/lets-talk" onClick={closeMenu}>Let's Talk</Link></li> */}
              <li><a href="mailto: iamkarena66@gmail.com" onClick={closeMenu}>Let's Talk</a></li>
            </ul>
          </nav>
          {/* <Link to="/resume" title="resume" id="resume" className="btn">Resume</Link> */}
        </div>
      </div>
    </>
  );
}

export default Header