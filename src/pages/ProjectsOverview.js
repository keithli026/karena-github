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

const ProjectsOverview = () => {
  return (
    <>
      <div id='projects'>
        <div className='banner'>
          <div className='image'><img src={banner} alt="banner" /></div>       
          <div className='title'>More projects</div>
        </div>
        <div className='showcase container'>
          <div className='image'><Link to="/projects/brand-design"><img src={pocina} alt="Pocina" loading="lazy"/></Link></div>
          <div className='image'><Link to="/projects/re-home"><img src={reHome} alt="RE-HOME" loading="lazy"/></Link></div>
          <div className='image'><Link to="/projects/booth-design"><img src={boothDesign} alt="Book fair booth" loading="lazy"/></Link></div>
          <div className='image'><Link to="/projects/ef-set"><img src={efSet} alt="EF SET" loading="lazy"/></Link></div>
          <div className='image'><Link to="/projects/badge-design"><img src={BadgeDesign} alt="Badge" loading="lazy"/></Link></div>
          <div className='image'><Link to="/projects/web-design"><img src={englishTown} alt="Englishtown" loading="lazy"/></Link></div>
        </div>
        <Contact />
      </div>
    </>
  )
}

export default ProjectsOverview