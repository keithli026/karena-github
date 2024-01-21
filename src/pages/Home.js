import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Contact from '../components/Contact'
import karena from "../assets/images/home/karena.png"
import arrow from "../assets/images/icons/arrow.png"
import reHome from "../assets/images/home/rehome.png"
import badgeDesign from "../assets/images/home/badge_design.png"
import efSet from "../assets/images/home/EF_SET.png"
import hult from "../assets/images/home/HULT.png"
import arrowBlack from "../assets/images/icons/arrow_black.png"
import ScrollClassAdder from '../components/ScrollClassAdder'
import Container from "react-bootstrap/Container"
import Button from 'react-bootstrap/Button'


const Home = () => {
  const classNames = [
    ScrollClassAdder("#projects .project:first-child", "scrolled", 200),
    ScrollClassAdder("#projects .project:nth-child(2)", "scrolled", 200),
    ScrollClassAdder("#projects .project:nth-child(3)", "scrolled", 200),
    ScrollClassAdder("#projects .project:nth-child(4)", "scrolled", 200)
  ];

  // console.log(className);
  useEffect(() => {
    const addClassToElement = () => {
      // console.log(document.querySelector("#projects >div:nth-child(2)"));
      // console.log(document.querySelector("#projects .project:nth-child(2)"));

      const greeting = document.getElementById("greeting");
      if (greeting) {
        greeting.classList.add("scrolled");
      }
    }
    window.addEventListener("load", addClassToElement);
    return () => {
      window.removeEventListener("load", addClassToElement);
    }
  }, []);

  return (
    <div id="home">
      <Container>
        <div id="greeting">
          <div className='flexbox'>
            <div className='content'>
              <div className='title'>Hello there! <span>I’m Karena</span></div>
              <p className='intro'>A Multimedia Designer at EF who loves to creating digital experience for <span>people</span>.</p>
              {/* <Link to="/my-story" className='btn'>About me</Link> */}
              <Button variant='light' href="/my-story">About me</Button>
            </div>
            <div className='image_wrapper'>
              <img src={karena} alt="karena" loading='lazy' />
            </div>
          </div>
        </div>
        <div id="slogan" className={ScrollClassAdder("#slogan", "scrolled", 200)}>
          <div className='title'>“Simple is Better”</div>
          <p>Through my career as a designer, I am keen to deliver a meaningful design for social good and make the world a better place.</p>
          <p className='bold'>Here’s a few projects that I’d like to share.</p>
          <img src={arrow} alt="arrow" loading="lazy" />
        </div>
      </Container>
      <div id="projects">
        <div className={`project ${classNames[0]}`}>
          <div className='image'>
            <img src={reHome} alt="RE-Home" loading="lazy" />
          </div>
          <div className='content'>
            <div className='wrapper container'>
              <div className='hashtag'><span>#BRANDING</span><span>#UI</span><span>#UXRESERCHER</span><span>#DESIGNER STRATEGY</span></div>
              <div className='title'>RE-Home</div>
              <p>Re-Home is a local animals adoption app that's help users easily to find the matched pet to adopt. Re-Home app strives to reduce the homeless dog numbers.They offer a high level flow to simplify the adoption process.</p>
              <Link to="/projects/re-home"><img src={arrowBlack} alt="arrow" loading="lazy" /></Link>
            </div>
          </div>
        </div>
        <div className={`project ${classNames[1]}`}>
          <div className='image'>
            <img src={badgeDesign} alt="Badge Design" loading="lazy" />
          </div>
          <div className='content'>
            <div className='wrapper container'>
              <div className='hashtag'><span>#BRANDING</span><span>#UI</span><span>#UXRESERCHER</span><span>#GRAPHIC</span></div>
              <div className='title'>Badge Design</div>
              <p>By offering badges as reward, its adds an element of challenge, competition, and achievement for users. This can motivate users to complete certain tasks.</p>
              <Link to="/projects/badge-design"><img src={arrowBlack} alt="arrow" loading="lazy" /></Link>
            </div>
          </div>
        </div>
        <div className={`project ${classNames[2]}`}>
          <div className='image'>
            <img src={efSet} alt="EF SET" loading="lazy" />
          </div>
          <div className='content'>
            <div className='wrapper container'>
              <div className='hashtag'><span>#BRANDING</span><span>#UI</span><span>#UX</span></div>
              <div className='title'>EF SET</div>
              <p>The EF Standard English Test (EF SET) is a free, online English test designed to meet the high technical standards as the other standardized tests in the field, such as the TOEFL or IELTS.</p>
              <Link to="/projects/ef-set"><img src={arrowBlack} alt="arrow" loading="lazy" /></Link>
            </div>
          </div>
        </div>
        <div className={`project ${classNames[3]}`}>
          <div className='image'>
            <img src={hult} alt="HULT" loading="lazy" />
          </div>
          <div className='content'>
            <div className='wrapper container'>
              <div className='hashtag'><span>#BRANDING</span><span>#WEBDESIGN</span><span>#UI</span><span>#UX</span><span>#LANDINGPAGE</span></div>
              <div className='title'>Landing Page / Web Design</div>
              <p>Plan to delivering top-notch quality UI/UX design for your Website, Landing page by using Figma and Adobe creative suite.</p>
              <p>Having usability and user experience in mind I will do brainstorming and research about your project to deliver attractively, user-friendly, and interactive UI designs.</p>
              <Link to="/projects/web-design"><img src={arrowBlack} alt="arrow" loading="lazy" /></Link>
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