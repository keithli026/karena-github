import React from 'react'
import { Link } from 'react-router-dom'
import banner from "../assets/images/more_projects/banner.png"
import bannerMobile from "../assets/images/more_projects/banner_mobile.png"
import Contact from '../components/Contact'
import pocina from "../assets/images/more_projects/pocina.png"
import reHome from "../assets/images/more_projects/RE-HOME.png"
import boothDesign from "../assets/images/more_projects/book_fair_booth.png"
import digital from '../assets/images/more_projects/digital.png'
import print from "../assets/images/more_projects/print.png"
import efSet from "../assets/images/more_projects/EFSET.png"
import badgeDesign from '../assets/images/more_projects/badge.png'
import englishTown from "../assets/images/more_projects/englishtown.png"
// import fitsio from "../assets/images/more_projects/fitsio.png"
import arrowBlack from "../assets/images/icons/arrow_black.png"
import Figure from 'react-bootstrap/Figure'
import Container from 'react-bootstrap/Container'

const ProjectsOverview = () => {
  return (
    <>
      <div id='projects' className='project'>
        <div className='banner'>
          <div className='image'>
            <img src={banner} alt="More projects banner" className='desktop' />
            <img src={bannerMobile} alt="More projects banner" className='mobile' />
          </div>
          <div className='title'>MORE PROJECTS</div>
        </div>
        <Container>
          <div className='showcase'>
            <div className='project'>
              <Link to="/projects/digital">
                <Figure>
                  <div className='image'>
                    <Figure.Image src={digital} alt="Digital" loading="lazy" />
                  </div>
                  <Figure.Caption>
                    Click here to view more digital works.<img src={arrowBlack} alt="arrow" loading="lazy" /><br />
                    (Landing page, edm, gif banner, gif poster, social media post and video)
                  </Figure.Caption>
                </Figure>
              </Link>
            </div>
            <div className='project'>
              <Link to="/projects/print">
                <Figure>
                  <div className='image'>
                    <Figure.Image src={print} alt="Print" loading="lazy" />
                  </div>
                  <Figure.Caption>
                    Click here to view more print works.<img src={arrowBlack} alt="arrow" loading="lazy" /><br />
                    (Brochures, flyers, posters, banners, postcard, booklet, calendar, recycle-bag and billboard)
                  </Figure.Caption>
                </Figure>
              </Link>
            </div>
            <div className='project'>
              <Link to="/projects/brand-identity">
                <Figure>
                  <div className='image'>
                    <Figure.Image src={pocina} alt="Pocina" loading="lazy" />
                  </div>
                  <Figure.Caption>Creating engaging and shareable content, including eye-catching graphics, infographics and captivating videos for social media.<img src={arrowBlack} alt="arrow" loading="lazy" /></Figure.Caption>
                </Figure>
              </Link>

            </div>
            <div className='project'>
              <Link to="/projects/booth-design">
                <Figure>
                  <div className='image'>
                    <Figure.Image src={boothDesign} alt="Book fair booth" loading="lazy" />
                  </div>
                  <Figure.Caption>Creating visually appealing and all the materials both online and offline for the exhibition booth.<img src={arrowBlack} alt="arrow" loading="lazy" /></Figure.Caption>
                </Figure>
              </Link>
            </div>
            <div className='project'>
              <Link to="/projects/re-home">
                <Figure>
                  <div className='image'>
                    <Figure.Image src={reHome} alt="RE-HOME" loading="lazy" />
                  </div>
                  <Figure.Caption>Google ux case study:  Re-Home is a local animals adoption app that’s help users easily to find the matched pet to adopt.<img src={arrowBlack} alt="arrow" loading="lazy" /></Figure.Caption>
                </Figure>
              </Link>
            </div>
            <div className='project'>
              <Link to="/projects/ef-set">
                <Figure>
                  <div className='image'>
                    <Figure.Image src={efSet} alt="EF SET" loading="lazy" />
                  </div>
                  <Figure.Caption>EF Set is an English standard test for non-native English speakers. I was given a task to ensure the landing page design aligns with overall brand identity.<img src={arrowBlack} alt="arrow" loading="lazy" /></Figure.Caption>
                </Figure>
              </Link>
            </div>
            <div className='project'>
              <Link to="/projects/badge-design">
                <Figure>
                  <div className='image'>
                    <Figure.Image src={badgeDesign} alt="Badge" loading="lazy" />
                  </div>
                  <Figure.Caption>Designing a badges at different stages or levels, which can enhance their motivation to continue engaging with a product.<img src={arrowBlack} alt="arrow" loading="lazy" /></Figure.Caption>
                </Figure>
              </Link>
            </div>
            <div className='project'>
              <Link to="/projects/web-design">
                <Figure>
                  <div className='image'>
                    <Figure.Image src={englishTown} alt="Englishtown" loading="lazy" />
                  </div>
                  <Figure.Caption>Collaborating on a UI design project for a web that aims to provide a intuitive user experience for people.<img src={arrowBlack} alt="arrow" loading="lazy" /></Figure.Caption>
                </Figure>
              </Link>
            </div>
            {/* <div className='project'>
              <Link to="/projects/fitsio">
                <Figure>
                  <div className='image'>
                    <Figure.Image src={fitsio} alt="Fitsio" loading="lazy" />
                  </div>
                  <Figure.Caption>Designing a branding guideline for physiotherapy company...project in progress.<img src={arrowBlack} alt="arrow" loading="lazy" /></Figure.Caption>
                </Figure>
              </Link>
            </div> */}
          </div>
          <Contact />
        </Container>
      </div>
    </>
  )
}

export default ProjectsOverview