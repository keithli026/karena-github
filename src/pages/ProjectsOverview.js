import React from 'react'
import { Link } from 'react-router-dom'
import banner from "../assets/images/more_projects/banner.png"
import Contact from '../components/Contact'
import pocina from "../assets/images/more_projects/pocina.png"
import reHome from "../assets/images/more_projects/RE-HOME.png"
import boothDesign from "../assets/images/more_projects/book_fair_booth.png"
import efSet from "../assets/images/more_projects/EFSET.png"
import BadgeDesign from '../assets/images/more_projects/badge.png'
import englishTown from "../assets/images/more_projects/englishtown.png"
import Figure from 'react-bootstrap/Figure'
import Container from 'react-bootstrap/Container'

const ProjectsOverview = () => {
  return (
    <>
      <div id='projects'>
        <div className='banner'>
          <div className='image'><img src={banner} alt="banner" /></div>
          <div className='title'>More projects</div>
        </div>
        <Container>
          <div className='showcase'>
            <div className='project'>
              <Figure>
                <Link to="/projects/brand-design">
                  <Figure.Image src={pocina} alt="Pocina" loading="lazy" />
                </Link>
                <Figure.Caption>Creating engaging and shareable content, including eye-catching graphics, infographics and captivating videos for social media.</Figure.Caption>
              </Figure>
            </div>
            <div className='project'>
              <Figure>
                <Link to="/projects/booth-design">
                  <Figure.Image src={boothDesign} alt="Book fair booth" loading="lazy" />
                </Link>
                <Figure.Caption>Creating visually appealing and all the materials both online and offline for the exhibition booth.</Figure.Caption>
              </Figure>
            </div>
            <div className='project'>
              <Figure>
                <Link to="/projects/re-home">
                  <Figure.Image src={reHome} alt="RE-HOME" loading="lazy" />
                </Link>
                <Figure.Caption>Re-Home is a local animals adoption app that’s help users easily to find the matched pet to adopt.</Figure.Caption>
              </Figure>
            </div>
            <div className='project'>
              <Figure>
                <Link to="/projects/ef-set">
                  <Figure.Image src={efSet} alt="EF SET" loading="lazy" />
                </Link>
                <Figure.Caption>EF Set is an English standard test for non-native English speakers. I was given a task to ensure the landing page design aligns with overall brand identity.</Figure.Caption>
              </Figure>
            </div>
            <div className='project'>
              <Figure>
                <Link to="/projects/badge-design">
                  <Figure.Image src={BadgeDesign} alt="Badge" loading="lazy" />
                </Link>
                <Figure.Caption>Designing a badges at different stages or levels, which can enhance their motivation to continue engaging with a product.</Figure.Caption>
              </Figure>
            </div>
            <div className='project'>
              <Figure>
                <Link to="/projects/web-design">
                  <Figure.Image src={englishTown} alt="Englishtown" loading="lazy" />
                </Link>
                <Figure.Caption>Collaborating on a UI design project for a web that aims to provide a intuitive user experience for people.</Figure.Caption>
              </Figure>
            </div>
          </div>
        </Container>
        <Contact />
      </div>
    </>
  )
}

export default ProjectsOverview