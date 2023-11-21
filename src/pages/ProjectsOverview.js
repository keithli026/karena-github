import React from 'react'
import { Link } from 'react-router-dom'
import "./projectsOverview.scss"
import Contact from '../components/Contact'

const ProjectsOverview = () => {
  return (
    <>
      <div id='projects'>
        <div className='banner'>
          <div className='image'><img src={process.env.PUBLIC_URL + '/more_projects/banner.png'} alt="More projects banner" /></div>       
          <div className='title'>More projects</div>
        </div>
        <div className='showcase'>
          <div className='image'><Link to="/projects/brand-design"><img src={process.env.PUBLIC_URL + '/more_projects/pocina.png'} alt="Pocina" /></Link></div>
          <div className='image'><Link to="/projects/re-home"><img src={process.env.PUBLIC_URL + '/more_projects/RE-HOME.png'} alt="RE-HOME" /></Link></div>
          <div className='image'><Link to="/projects/booth-design"><img src={process.env.PUBLIC_URL + '/more_projects/book_fair_booth.png'} alt="Book fair booth" /></Link></div>
          <div className='image'><Link to="/projects/ef-set"><img src={process.env.PUBLIC_URL + '/more_projects/EFSET.png'} alt="EF SET" /></Link></div>
          <div className='image'><Link to="/projects/badge-design"><img src={process.env.PUBLIC_URL + '/more_projects/badge.png'} alt="Badge" /></Link></div>
          <div className='image'><Link to="/projects/web-design"><img src={process.env.PUBLIC_URL + '/more_projects/englishtown.png'} alt="Englishtown" /></Link></div>
        </div>
        <Contact />
      </div>
    </>
  )
}

export default ProjectsOverview