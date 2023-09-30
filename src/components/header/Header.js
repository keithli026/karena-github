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

  useEffect(() => {
    if (window.innerWidth < lg) {
      refMenu.current.style.top = `${refHeader.current.clientHeight}px`;
      refMenu.current.style.height = `${window.innerHeight - refHeader.current.clientHeight}px`;
    }

    // console.log(window.innerHeight, refHeader.current.clientHeight);
    // console.log("pathname: " + location.pathname + "; search: " + location.search);
    // console.log("after setShow: ",show);
    // console.log(initialState.about, state.about, initialState.ourteam, state.ourteam);
  }, [loaded]);
  // const initialState = {
  //   about: false,
  //   ourteam: false,
  //   services: false,
  //   gp: false,
  //   sp: false
  // };
  // const [state, dispatch] = useReducer(reducer, initialState);
  // function reducer(state, action) {
  //   switch (action.type) {
  //     case "about":
  //       return { ...state, about: !state.about, ourteam: false, services: false, gp: false };
  //     case "ourteam":
  //       return { ...state, about: true, ourteam: !state.ourteam, services: false, gp: false };
  //     case "services":
  //       return { ...state, about: false, ourteam: false, services: !state.services, gp: false };
  //     case "gp":
  //       return { ...state, about: false, ourteam: false, services: true, gp: !state.gp };
  //     default:
  //       return initialState;
  //   }
  // }

  // const showItemAbout = () => {
  //   dispatch({ type: "about" });
  // }
  // const showItemOurTeam = () => {
  //   dispatch({ type: "ourteam" });
  // }
  // const showItemServices = () => {
  //   dispatch({ type: "services" });
  // }
  // const showItemGP = () => {
  //   dispatch({ type: "gp" });
  // }
  const [width, height] = useWindowSize();
  if (loaded) {
    if (width < lg) {
      // refMenu.current.style.top = `${refHeader.current.clientHeight}px`;
      refMenu.current.style.height = `${height - refHeader.current.clientHeight}px`;
    } else {
      // refMenu.current.style.top = null;
      refMenu.current.style.height = null;
    }
  }
  if (show) {
    if (width < lg) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = null;
    }
  } else {
    document.body.style.overflowY = null;
  }

  return (
    <>
      <div id="header" ref={refHeader}>
        <Link to="/" title="home" id="logo" onClick={closeMenu}>
          <img alt="site logo" src={process.env.PUBLIC_URL + '/icons/logo.png'} ref={refImg} onLoad={onLoad} onError={onError} />
        </Link>
        <div className="btn" onClick={showMenu}>
          {show ? <img alt="menu" src={process.env.PUBLIC_URL + '/icons/cross.png'} /> : <img alt="menu" src={process.env.PUBLIC_URL + '/icons/menu.png'} />}
        </div>
        <nav className={show ? "show" : null} ref={refMenu}>
          <ul>
            <li><Link to="/my-story" onClick={closeMenu}>My Story<img src={process.env.PUBLIC_URL + '/icons/arrow_white.svg'} alt="arrow" /></Link></li>
            <li><Link to="/projects" onClick={closeMenu}>Projects<img src={process.env.PUBLIC_URL + '/icons/arrow_white.svg'} alt="arrow" /></Link></li>
            <li><Link to="/lets-talk" onClick={closeMenu}>Let's Talk<img src={process.env.PUBLIC_URL + '/icons/arrow_white.svg'} alt="arrow" /></Link></li>
          </ul>
        </nav>
        <Link to="/resume" title="resume" id="resume" className="btn">Resume</Link>
      </div>
    </>
  );
}

export default Header