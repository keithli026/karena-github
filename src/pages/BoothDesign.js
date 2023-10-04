import React from 'react'
import { Link } from 'react-router-dom'
import "./boothDesign.scss"
import BackButton from '../components/BackButton'

const BoothDesign = () => {
  return (
    <div id='booth_design'>
      <div className='banner'>
        <div className='image'><img src={process.env.PUBLIC_URL + '/bookfair/banner.png'} alt="Book fair" /></div>
        <div className='title'>Badge Design</div>
        <div className='content'>
          <div className='keypoint'>
            <div>MY ROLE: <span>PRODUCT DESIGN 丨<span>BRANDING</span> 丨<span>3D DESIGN</span></span></div>
            <div>TIMELINE: <span>4 WEEKS, 2023</span></div>
          </div>
          <div className='icons'>
            <img src={process.env.PUBLIC_URL + '/icons/floorplanner.png'} alt="floorplanner icon" />
            <img src={process.env.PUBLIC_URL + '/icons/PS.png'} alt="ps icon" />
            <img src={process.env.PUBLIC_URL + '/icons/AI.png'} alt="ai icon" />
          </div>
        </div>
      </div>
      <div className='wrapper'>
        <div className='section'>
          <h2>Brief</h2>
          <p>Years of experience designing different exhibition booth, I responsible for creating visually appealing and all the materials both online and offline, including visual elements, space planning, 3D visualization, and materials on social media platform that effectively delivery key messages to the audiences.</p>
          <h2>Problem</h2>
          <p>How might we effective use of space and effectively communicate the brand identity.</p>
          <h2>Goal</h2>
          <ol>
            <li>Improved brand awareness by integrative displays, demonstrations, samples or hand- on activities to create a memorable and immersive experience</li>
            <li>Created eye-catching visuals to grab attendees' attention</li>
            <li>Incorporate social media elements into your booth design to encourage attendees to share their experience to increase online visibility and engagement</li>
          </ol>
        </div>
        <BackButton />
        <img src={process.env.PUBLIC_URL + '/bookfair/colours.jpg'} alt="Colours" />
        <img src={process.env.PUBLIC_URL + '/bookfair/book-fair-2023-backdrop.jpg'} alt="Book fair 2023 backdrop" />
        <img src={process.env.PUBLIC_URL + '/bookfair/booth.png'} alt="Booth" />
        <img src={process.env.PUBLIC_URL + '/bookfair/floorplan2.png'} alt="Floor plan" />
        <img src={process.env.PUBLIC_URL + '/bookfair/booth1.png'} alt="Booth" />
        <div className='flexbox_wrapper'>
          <div className='flexbox'>
            <img src={process.env.PUBLIC_URL + '/bookfair/foamboard_1.jpg'} alt="Foamboard" />
          </div>
          <div className='flexbox'>
            <img src={process.env.PUBLIC_URL + '/bookfair/foamboard_2.jpg'} alt="Foamboard" />
            <img src={process.env.PUBLIC_URL + '/bookfair/foamboard_3.jpg'} alt="Foamboard" />
          </div>
        </div>
        <img src={process.env.PUBLIC_URL + '/bookfair/ig_story.png'} alt="IG story" />
        <div className='section'>
          <h2>Book cover design</h2>
          <img src={process.env.PUBLIC_URL + '/bookfair/cover-back.png'} alt="Book cover back" />
          <img src={process.env.PUBLIC_URL + '/bookfair/book-cover.png'} alt="Book cover" />
        </div>
        <div className="section center">
          <Link to="/projects" className='btn'>Other projects</Link>
        </div>
      </div>
    </div>
  )
}

export default BoothDesign