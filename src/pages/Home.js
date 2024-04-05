import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Contact from '../components/Contact'
import background from "../assets/images/home/container_1.png"
import arrow from "../assets/images/icons/arrow.png"
import reHome from "../assets/images/home/rehome.png"
import badgeDesign from "../assets/images/home/badge_design.png"
import efSet from "../assets/images/home/EF_SET.png"
import hult from "../assets/images/home/HULT.png"
import brochure from "../assets/images/home/brochure.png"
import XHS from "../assets/images/home/XHS_LP.png"
import arrowBlack from "../assets/images/icons/arrow_black.png"
import circle from "../assets/images/icons/icon_circle.png"
import ScrollClassAdder from '../components/ScrollClassAdder'
import Container from "react-bootstrap/Container"
import Button from 'react-bootstrap/Button'
import throttle from 'lodash.throttle'
import { ReactTyped } from "react-typed"

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
      <div id="greeting">
        {/* <div className='banner'>
          <img src={background} alt="background" loading='lazy' className='bg' />
          <div className='overlay'></div>
        </div> */}
        <Container>
          <div className='flexbox'>
            <div className='content'>
              <div className='title'>Hello there! <span>I’m Karena Li</span></div>
              <p className='intro'>
                <span>A</span><Button variant="outline-primary" size="sm">
                  {" "}
                  <ReactTyped
                    strings={["graphic", "multimedia", "UI/UX", "brand", "website"]}
                    typeSpeed={50}
                    loop
                    backSpeed={20}
                    cursorChar="|"
                    showCursor={true}
                  />
                </Button>
                <span>designer at EF who loves to creating digital experience for <span style={{textDecoration: "underline"}}>people</span>.</span>
              </p>
              {/* <Button variant='light' href="/my-story">About me</Button> */}
            </div>
          </div>
        </Container>
      </div>
      <div class="quick_link">
      <ul>
        <li><Link to="/my-story#about">About me</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/my-story#resume">Resume</Link></li>
        <li><Link to="/my-story#my_value">My Value</Link></li>
        <li><Link to="/lets-talk">Email</Link></li>
      </ul>
      </div>
      <div id="slogan" className={ScrollClassAdder("#slogan", "scrolled", 200)}>
        <Container>
          {/* <div className='title'>“Simple is Better”</div> */}
          {/* <p>Through my career as a designer, I am keen to deliver a meaningful design for social good and make the world a better place.</p> */}
          <p className='bold'>Here’s a few projects that I’d like to share.</p>
          <img src={arrow} alt="arrow" loading="lazy" />
        </Container>
      </div>

      <div id="projects">
        <div className={`project ${classNames[0]}`}>
          <div className='image' style={{ position: "relative", zIndex: "1" }}>
            <img src={hult} alt="HULT" loading="lazy" />
          </div>
          <div className='content'>
            <div className='wrapper container'>
              <div className='hashtag'><span>#BRANDING</span><span>#WEBDESIGN</span><span>#LANDINGPAGE</span><span>#UI</span><span>#UX</span></div>
              <div className='title'>Landing Page / Web design</div>
              <p>Plan to delivering top-notch quality UI/UX design for your Website, Landing page by using Figma and Adobe creative suite.</p>
              <p>Having usability and user experience in mind I will do brainstorming and research about your project to deliver attractively, user-friendly, and interactive UI designs.</p>
              <Link to="/projects/web-design"><img src={arrowBlack} alt="arrow" loading="lazy" className='arrow' /></Link>
            </div>
          </div>
        </div>
        <div className={`project ${classNames[1]}`}>
          <div className='image'>
            <img src={reHome} alt="RE-Home App" loading="lazy" />
          </div>
          <div className='content'>
            <div className='wrapper container'>
              <div className='hashtag'><span>#BRANDING</span><span>#UI</span><span>#UXRESERCHER</span><span>#DESIGNER STRATEGY</span><span>#LOGODESIGN</span></div>
              <div className='title'>Re-Home</div>
              <p>Re-Home is a local animals adoption app that’s help users easily to find the matched pet to adopt. Re-Home app strives to reduce the homeless dog numbers.They offer a high level flow to simplify the adoption process.</p>
              <Link to="/projects/re-home"><img src={arrowBlack} alt="arrow" loading="lazy" className='arrow' /></Link>
            </div>
          </div>
        </div>
        <div className={`project ${classNames[2]}`}>
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
        {/* <div className={`project ${classNames[4]}`}>
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
        </div> */}
        {/* <div className={`project ${classNames[5]}`}>
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
        </div> */}
      </div>
      <Container>
        <div className='message'>
          <span>Reach out to create something</span> <Button variant="outline-primary" size="sm">
            {" "}
            <ReactTyped
              strings={["modern", "dynamic", "stylish", "joyful", "exciting"]}
              typeSpeed={50}
              loop
              backSpeed={20}
              cursorChar="|"
              showCursor={true}
            />
          </Button>
        </div>
        <div className='email'>
          <div className='content'>Email</div>
          <Link to="/lets-talk"><img src={circle} alt="arrow" loading="lazy" /></Link>
        </div>
        {/* <Contact /> */}
      </Container>
    </div>
  )
}

export default Home