import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import mailIcon from "../assets/images/icons/mail.png"
import karena from "../assets/images/home/karena.png"
import Container from 'react-bootstrap/Container';
// import backButton from "../components/BackButton"
import BackButton from '../components/BackButton'

const Resume = () => {
  useEffect(() => {
    // console.log("run", document.readyState);
    const addClassToElement = () => {
      const resume = document.getElementById("resume");
      if (resume) {
        resume.classList.add("scrolled");
      }
    }
    if(document.readyState === "complete") {
      setTimeout(addClassToElement, 1000);
    } else {
      window.addEventListener("load", addClassToElement);
      return () => {
        window.removeEventListener("load", addClassToElement);
      }
    }
  }, []);

  return (
    <div id="resume">
      <Link to="/lets-talk" id="email"><img src={mailIcon} alt="email" loading="lazy"/></Link>
      <Container>
        <div className='flexbox' id="intro">
          <div className='image'>
            <img src={karena} alt="karena" loading="lazy"/>
          </div>
          <div className='content'>
            <h2 className='name'>KARENA <br/>LI</h2>
            <div className='position'>MULTIMEDIA<FontAwesomeIcon icon={faCircle} />GRAPHIC DESIGNER</div>
            <p>I am a creative person who with a background in Graphic and Multimedia Design, experience in creating digital , interactive graphics and ui/ux design for people. I thrive in a collaborative environment and enjoy exploring new innovative ideas. With 9 years of experience in the field. My passion for design and creativity has led me to develop a keen eye for details and strong understanding of principles of visual communication.</p>
          </div>
        </div>
        <BackButton />
        <h2>Experience</h2>
        <div className='flexbox section' id="experience">
          <div className='box'>
            <div className='position'>
              <h3>Digital Graphic Designer</h3>
              <div>EF Education First  丨  Hong Kong</div>
            </div>
            <p>EF Education First is an international education company focusing on language, academics, and cultural experience. While at EF, I was responsible for digital graphic development of their global website, both designing and adapting for countries and collaborated with creatives, designers, sales and marketing teams to create lead generation campaigns.</p>
            <p>Projects included: website, landing pages, EDMs, UI/UX elements, branding, printing materials and mock up.</p>
            <p>Edit and manipulate video footage to create visually engaging and cohesive videos for YouTube and other Social media channels.</p>
          </div>
          <div className='box'>
            <div className='position'>
              <h3>Product and Web Designer</h3>
              <div>Dream Skin Korean Cosmetics  丨  Hong Kong</div>
            </div>
            <p>Re-branded their corporate identity including the overall look and feel along their website design.</p>
            <p>Designing cost-effective, attractive, and safe packaging for commercial products.</p>
            <p>Collaborated with marketing team,  handle design artwork from concept development and combines the problem-solving aspect of design with deep empathy for the user.</p>
          </div>
          <div className='box'>
            <div className='position'>
              <h3>Junior Graphic Designer</h3>
              <div>Holiday XP  丨 Melbourne, Australia</div>
            </div>
            <p>Developed ability to merge creativity and technology in delivering integrated print and digital marketing solutions to leverage company’s market position.</p>
            <p>Developed strong creativity and organizational skill through multiple project design including branding and print design including posters, flyers and brochures.</p>
            <p>Collaborated with marketing team and sales to help plan unique trips and vacations for the clients.</p>
          </div>
        </div>
        <h2>Education</h2>
        <div className='flexbox' id="education">
          <div className='box'>
            <h3>Professional Certificate In Ux Design</h3>
            <p>Google online program</p> 
          </div>
          <div className='box'>
            <h3>Swimburne University Of Technology, Australia</h3>
            <p>Bachelor of communication Design  丨  Multimedia Design Melbourne, Australia</p> 
          </div>
          <div className='box'>
            <h3>First Institute of Art & Design</h3>
            <p>Diploma  丨  Graphic Design, Hong Kong</p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Resume