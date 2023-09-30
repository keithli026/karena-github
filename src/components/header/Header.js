import React from 'react'
import { useState, useLayoutEffect, useRef, useReducer, useEffect } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Container, Row, lg } from "../../GlobalStyle"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faPhone } from '@fortawesome/free-solid-svg-icons'
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
  let navigate = useNavigate();
  let location = useLocation();
  const [loaded, setLoaded] = useState(false);
  const [show, setShow] = useState(false);
  const showMenu = () => {
    setShow(!show);
  }
  const closeMenu = () => {
    setShow(false);
  }
  const onLoad = () => {
    console.log("Image onloaded", refImg.current, refImg.current.clientHeight);
    setLoaded(true);
  }
  const onError = () => {
    console.log("Image error");
  }

  const changeLocation = (placeToGo) => {
    navigate(placeToGo, { replace: true });
    window.location.reload();
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
      // document.querySelector(".backToTop").style.visibility = "hidden";
    } else {
      document.body.style.overflowY = null;
      // document.querySelector(".backToTop").style.visibility = null;
    }
  } else {
    document.body.style.overflowY = null;
    // document.querySelector(".backToTop").style.visibility = null;
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
      {/* <H.Header id="header">
        <Container sm100 md100 ref={refHeader}>
          <Row spaceBetween alignItemsCenter>
            <H.LogoDiv id="logo">
              <a href="/">
                <H.Logo alt="site-logo" src={process.env.PUBLIC_URL + '/logo.png'}></H.Logo>
              </a>
            </H.LogoDiv>
            <H.MenuWrapper>
              <H.MenuList level_0 className="level-0">
                <H.MenuItem className="expandable">
                  <Link to="/about">About</Link>
                  <H.MenuList className="level-1">
                    <H.MenuItem className="expandable">
                      <Link to="/about/our-team">Our Team</Link>
                      <H.MenuList className="level-2">
                        <H.MenuItem><Link to="/about/our-team/physiotherapists">Physiotherapists</Link></H.MenuItem>
                        <H.MenuItem><Link to="/about/our-team/remedial-massage-therapist">Remedial Massage Therapist</Link></H.MenuItem>
                      </H.MenuList>
                    </H.MenuItem>
                  </H.MenuList>
                </H.MenuItem>
                <H.MenuItem className="expandable">
                  <Link to="/services">Services</Link>
                  <H.MenuList className="level-1">
                    <H.MenuItem className="expandable">
                      <Link to="/services/general-physiotherapy">General Physiotherapy</Link>
                      <H.MenuList className="level-2">
                        <H.MenuItem><Link to="/services/general-physiotherapy/childrens-physiotherapy">Children's Physiotherapy</Link></H.MenuItem>
                        <H.MenuItem><Link to="/services/general-physiotherapy/DVA-physiotherapy">DVA Physiotherapy</Link></H.MenuItem>
                        <H.MenuItem><Link to="/services/general-physiotherapy/motor-vehicle-claims">Motor Vehicle Claims</Link></H.MenuItem>
                        <H.MenuItem><Link to="/services/general-physiotherapy/workcover-physiotherapy">Workcover Physiotherapy</Link></H.MenuItem>
                      </H.MenuList>
                    </H.MenuItem>
                    <H.MenuItem><Link to="/services/sports-physiotherapy">Sports Physiotherapy</Link></H.MenuItem>
                  </H.MenuList>
                </H.MenuItem>
                <H.MenuItem>
                  <Link to="/fees">Fees</Link>
                </H.MenuItem>
                <H.MenuItem>
                  <Link to="/conditions">Conditions</Link>
                </H.MenuItem>
                <H.MenuItem>
                  <Link to="/contact">Contact</Link>
                </H.MenuItem>
                <H.MenuItem>
                  <Link to="/book-online">Book Online</Link>
                </H.MenuItem>
              </H.MenuList>
            </H.MenuWrapper>
            <H.MenuButton className="menuBtn" onClick={showMenu}>
              <FontAwesomeIcon icon={show ? faTimes : faBars} />
            </H.MenuButton>
          </Row>
        </Container>
        <H.MobileMenuWrapper style={{ display: show ? "block" : "none" }} className="mnav">
          <H.MobileMenuList className="mlevel-0" ref={refMenu}>
            <H.MobileMenuItem style={{ paddingBottom: state.about ? "0" : "0.5rem" }}>
              <Link to="/about" style={{ paddingBottom: state.about ? "0.875rem" : "0.375rem" }} onClick={() => changeLocation('/about')}>About</Link>
              <div className="dropdownBtn" onClick={showItemAbout} aria-expanded={state.about ? "true" : "false"}>
                {state.about ? (<div className="up"></div>) : (<div className="down"></div>)}
              </div>
              <H.MobileMenuList className="mlevel-1" style={{ display: state.about ? "flex" : "none" }}>
                <H.MobileMenuItem style={{ paddingBottom: state.ourteam ? "0" : "0.5rem" }}>
                  <Link to="/about/our-team" style={{ paddingBottom: state.ourteam ? "0.875rem" : "0.375rem" }} onClick={() => changeLocation('/about/our-team')}>Our Team</Link>
                  <div className="dropdownBtn" onClick={showItemOurTeam} aria-expanded={state.ourteam ? "true" : "false"}>
                    {state.ourteam ? (<div className="up"></div>) : (<div className="down"></div>)}
                  </div>
                  <H.MobileMenuList className="mlevel-2" style={{ display: state.ourteam ? "flex" : "none" }}>
                    <H.MobileMenuItem><Link to="/about/our-team/physiotherapists" onClick={() => changeLocation('/about/our-team/physiotherapists')}>Physiotherapists</Link></H.MobileMenuItem>
                    <H.MobileMenuItem><Link to="/about/our-team/remedial-massage-therapist" onClick={() => changeLocation('/about/our-team/remedial-massage-therapist')}>Remedial Massage Therapist</Link></H.MobileMenuItem>
                  </H.MobileMenuList>
                </H.MobileMenuItem>
              </H.MobileMenuList>
            </H.MobileMenuItem>
            <H.MobileMenuItem style={{ paddingBottom: state.services ? "0" : "0.5rem" }}>
              <Link to="/services" style={{ paddingBottom: state.services ? "0.875rem" : "0.375rem" }} onClick={() => changeLocation('/services')}>Services</Link>
              <div className="dropdownBtn" onClick={showItemServices} aria-expanded={state.services ? "true" : "false"}>
                {state.services ? (<div className="up"></div>) : (<div className="down"></div>)}
              </div>
              <H.MobileMenuList className="mlevel-1" style={{ display: state.services ? "flex" : "none" }}>
                <H.MobileMenuItem style={{ paddingBottom: state.gp ? "0" : "0.5rem" }}>
                  <Link to="/services/general-physiotherapy" style={{ paddingBottom: state.gp ? "0.875rem" : "0.375rem" }} onClick={() => changeLocation('/services/general-physiotherapy')}>General Physiotherapy</Link>
                  <div className="dropdownBtn" onClick={showItemGP} aria-expanded={state.gp ? "true" : "false"}>
                    {state.gp ? (<div className="up"></div>) : (<div className="down"></div>)}
                  </div>
                  <H.MobileMenuList className="mlevel-2" style={{ display: state.gp ? "flex" : "none" }}>
                    <H.MobileMenuItem><Link to="/services/general-physiotherapy/childrens-physiotherapy" onClick={() => changeLocation('/services/general-physiotherapy/childrens-physiotherapy')}>Children's Physiotherapy</Link></H.MobileMenuItem>
                    <H.MobileMenuItem><Link to="/services/general-physiotherapy/DVA-physiotherapy" onClick={() => changeLocation('/services/general-physiotherapy/DVA-physiotherapy')}>DVA Physiotherapy</Link></H.MobileMenuItem>
                    <H.MobileMenuItem><Link to="/services/general-physiotherapy/motor-vehicle-claims" onClick={() => changeLocation('/services/general-physiotherapy/motor-vehicle-claims')}>Motor Vehicle Claims</Link></H.MobileMenuItem>
                    <H.MobileMenuItem><Link to="/services/general-physiotherapy/workcover-physiotherapy" onClick={() => changeLocation('/services/general-physiotherapy/workcover-physiotherapy')}>Workcover Physiotherapy</Link></H.MobileMenuItem>
                  </H.MobileMenuList>
                </H.MobileMenuItem>
                <H.MobileMenuItem>
                  <Link to="/services/sports-physiotherapy" onClick={() => changeLocation('/services/sports-physiotherapy')}>Sports Physiotherapy</Link>
                </H.MobileMenuItem>
              </H.MobileMenuList>
            </H.MobileMenuItem>
            <H.MobileMenuItem>
              <Link to="/fees" onClick={() => changeLocation('/fees')}>Fees</Link>
            </H.MobileMenuItem>
            <H.MobileMenuItem>
              <Link to="/conditions" onClick={() => changeLocation('/conditions')}>Conditions</Link>
            </H.MobileMenuItem>
            <H.MobileMenuItem>
              <Link to="/contact" onClick={() => changeLocation('/contact')}>Contact</Link>
            </H.MobileMenuItem>
            <H.MobileMenuItem>
              <Link to="/book-online" onClick={() => changeLocation('/book-online')}>Book Online</Link>
            </H.MobileMenuItem>
          </H.MobileMenuList>
        </H.MobileMenuWrapper>
      </H.Header> */}
    </>
  );
}

export default Header