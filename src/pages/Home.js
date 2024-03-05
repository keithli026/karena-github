import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Contact from '../components/Contact'
import background from "../assets/images/home/container_1.png"
import arrow from "../assets/images/icons/arrow.png"
// import reHome from "../assets/images/home/rehome.png"
import badgeDesign from "../assets/images/home/badge_design.png"
import efSet from "../assets/images/home/EF_SET.png"
// import hult from "../assets/images/home/HULT.png"
import brochure from "../assets/images/home/brochure.png"
import XHS from "../assets/images/home/XHS_LP.png"
import arrowBlack from "../assets/images/icons/arrow_black.png"
import ScrollClassAdder from '../components/ScrollClassAdder'
import Container from "react-bootstrap/Container"
import Button from 'react-bootstrap/Button'
import throttle from 'lodash.throttle'

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const classNames = [
    ScrollClassAdder("#projects >div:first-child", "scrolled", 200),
    ScrollClassAdder("#projects >div:nth-child(2)", "scrolled", 200),
    ScrollClassAdder("#projects >div:nth-child(3)", "scrolled", 200),
    ScrollClassAdder("#projects >div:nth-child(4)", "scrolled", 200)
  ];

  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsScrolled(true);
    }, 250);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [isScrolled]);

  return (
    <div id="home">
      <div id="greeting" className={isScrolled ? "scrolled" : null}>
        <div className='banner'>
          <img src={background} alt="background" loading='lazy' className='bg' />
          <div className='overlay'></div>
        </div>
        <Container>
          <div className='flexbox'>
            <div className='content'>
              <div className='title'>Hello there! <span>I’m Karena</span></div>
              <p className='intro'>A Multimedia Designer at EF who loves to creating digital experience for <span>people</span>.</p>
              <Button variant='light' href="/my-story">About me</Button>
            </div>
          </div>
        </Container>
      </div>

      <div id="slogan" className={ScrollClassAdder("#slogan", "scrolled", 200)}>
        <Container>
          <div className='title'>“Simple is Better”</div>
          <p>Through my career as a designer, I am keen to deliver a meaningful design for social good and make the world a better place.</p>
          <p className='bold'>Here’s a few projects that I’d like to share.</p>
          <img src={arrow} alt="arrow" loading="lazy" />
        </Container>
      </div>

      <div id="projects">
        <div className={`project ${classNames[0]}`}>
          <div className='image'>
            <img src={brochure} alt="brochure" loading="lazy" />
          </div>
          <div className='content'>
            <div className='wrapper container'>
              <div className='hashtag'><span>#BRANDING</span><span>#PRINT</span><span>#GRAPHIC</span></div>
              <div className='title'>Print design</div>
              <p>Create visual concepts and develop the overall layout and production design for company such as advertisements, brochures, booklet, flyer...etc.</p>
              <Link to="/projects/print"><img src={arrowBlack} alt="arrow" loading="lazy" className='arrow' /></Link>
            </div>
          </div>
        </div>
        <div className={`project ${classNames[1]}`}>
          <div className='image'>
            <img src={XHS} alt="XHS Post" loading="lazy" />
          </div>
          <div className='content'>
            <div className='wrapper container'>
              <div className='hashtag'><span>#LANDINGPAGE</span><span>#GIFBANNER</span><span>#EDM</span><span>#DIGITALDESIGN</span></div>
              <div className='title'>Digital design</div>
              <p>Create an ideas and strategies into engaging multimedia content, to support digital marketing campaigns across social media and digital platforms.</p>
              <Link to="/projects/digital"><img src={arrowBlack} alt="arrow" loading="lazy" className='arrow' /></Link>
            </div>
          </div>
        </div>

        <div className={`project ${classNames[2]}`}>
          <div className='image'>
            <img src={badgeDesign} alt="Badge Design" loading="lazy" />
          </div>
          <div className='content'>
            <div className='wrapper container'>
              <div className='hashtag'><span>#BRANDING</span><span>#UI</span><span>#UXRESERCHER</span><span>#GRAPHIC</span></div>
              <div className='title'>Badge Design</div>
              <p>By offering badges as reward, its adds an element of challenge, competition, and achievement for users. This can motivate users to complete certain tasks.</p>
              <Link to="/projects/badge-design"><img src={arrowBlack} alt="arrow" loading="lazy" className='arrow' /></Link>
            </div>
          </div>
        </div>
        <div className={`project ${classNames[3]}`}>
          <div className='image'>
            <img src={efSet} alt="EF SET" loading="lazy" />
          </div>
          <div className='content'>
            <div className='wrapper container'>
              <div className='hashtag'><span>#BRANDING</span><span>#UI</span><span>#UX</span></div>
              <div className='title'>EF SET</div>
              <p>The EF Standard English Test (EF SET) is a free, online English test designed to meet the high technical standards as the other standardized tests in the field, such as the TOEFL or IELTS.</p>
              <Link to="/projects/ef-set"><img src={arrowBlack} alt="arrow" loading="lazy" className='arrow' /></Link>
            </div>
          </div>
        </div>

      </div>
      <Container>
        <Contact />
      </Container>
    </div>
  )
}

export default Home