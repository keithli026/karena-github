import React from 'react'
import { Link } from 'react-router-dom'
import "./projectsOverview.scss"
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
        <div className='showcase'>
          <div className='image'><Link to="/projects/brand-design"><img src={pocina} alt="Pocina" /></Link></div>
          <div className='image'><Link to="/projects/re-home"><img src={reHome} alt="RE-HOME" /></Link></div>
          <div className='image'><Link to="/projects/booth-design"><img src={boothDesign} alt="Book fair booth" /></Link></div>
          <div className='image'><Link to="/projects/ef-set"><img src={efSet} alt="EF SET" /></Link></div>
          <div className='image'><Link to="/projects/badge-design"><img src={BadgeDesign} alt="Badge" /></Link></div>
          <div className='image'><Link to="/projects/web-design"><img src={englishTown} alt="Englishtown" /></Link></div>
        </div>
        <Contact />
      </div>
    </>
  )
}

export default ProjectsOverview