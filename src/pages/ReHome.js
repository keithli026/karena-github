import React from 'react'
import { Link } from 'react-router-dom'
import "./reHome.scss"
import BackButton from '../components/BackButton'

const ReHome = () => {
  return (
    <div id='re-home'>
      <div className='banner'>
        <div className='image'><img src={process.env.PUBLIC_URL + '/re-home/banner.png'} alt="RE-Home" /></div>
        <div className='title'>RE-Home</div>
        <div className='content'>
          <div className='keypoint'>
            <div>MY ROLE: <span>UI DESIGN 丨<span>UX RESEARCHER</span> 丨<span>BRANDING</span> 丨<span>DESIGNER STRATEGY</span></span></div>
            <div>TIMELINE: <span>12 WEEKS, 2023</span></div>
          </div>
          <div className='icons'>
            <img src={process.env.PUBLIC_URL + '/icons/XD.png'} alt="xd icon" />
            <img src={process.env.PUBLIC_URL + '/icons/PS.png'} alt="ps icon" />
            <img src={process.env.PUBLIC_URL + '/icons/AI.png'} alt="ai icon" />
            <img src={process.env.PUBLIC_URL + '/icons/figma.png'} alt="figma icon" />
          </div>
        </div>
      </div>
      <div className='wrapper'>
        <BackButton />
        <div className='section'>
          <h2>Design Approach</h2>
          <div className='center'>
            <img src={process.env.PUBLIC_URL + '/re-home/design-approach.png'} alt="Design approach" />
          </div>
        </div>
        <h2>Persona</h2>
        <p>By conducting research, we interviewed 2 people and identified few problems of adopting animals who could be our target users.</p>
      </div>
      <div className='bg section'>
          <div className='wrapper'>
            <div className='center'>
            <img src={process.env.PUBLIC_URL + '/re-home/persona.png'} alt="Persona" />
            </div>
          </div>
      </div>
      <div className='wrapper'>
        <div className='section'>
          <h2>Sitemap</h2>
          <p>
            Difficulty with website navigation was a primary pain point for user.<br />
            My goal here was to make strategic information architecture decisions that would improve overall responsive web flow.
          </p>
          <div className='center'>
            <img src={process.env.PUBLIC_URL + '/re-home/sitemap.png'} alt="Sitemap" />
          </div>
        </div>
        <div className='section'>
          <h2>User Insights</h2>
          <div className='list_title'>User needs</div>
          <ul>
            <li>Easy to search the animals by breed, age, gender or personality</li>
            <li>To get shelter response as soon as possibles and up-to-date informations</li>
            <li>To join a supportive training community sharing knowledge</li>
          </ul>
          <div className='list_title'>User Goals</div>
          <ul>
            <li>Easy to search and access to detailed information about the animals available for adoption </li>
            <li>To communication directly with the adoption centres or through the app and scheduling time to visit</li>
            <li>To connect with experienced people who can share their experience and knowledge with others</li>
          </ul>
        </div>
        <div className='section'>
          <h2>Paper wireframes</h2>
          <div className='center'>
            <img src={process.env.PUBLIC_URL + '/re-home/wireframe.png'} alt="Wireframe" />
          </div>
        </div>
        <div className='section'>
          <h2>Usability studies</h2>
          <p>Early design allowed for some text search but after usability studies, i added icons option to choose.</p>
          <div className='center'>
            <img src={process.env.PUBLIC_URL + '/re-home/usability-study.png'} alt="Usability study" />
          </div>
        </div>
      </div>
      <div className='bg'>
        <div className='wrapper'>
          <div className='flexbox'>
            <div className='content'>
              <h2>The solution</h2>
              <p>Easy to search and access to detailed information about the animals available for adoption</p>
            </div>
            <div className='image'><img src={process.env.PUBLIC_URL + '/re-home/login-open.png'} alt="Login open" /></div>
            <div className='image'><img src={process.env.PUBLIC_URL + '/re-home/search.png'} alt="Search" /></div>
            <div className='image'><img src={process.env.PUBLIC_URL + '/re-home/welcome.png'} alt="Welcome" /></div>
            <div className='image'><img src={process.env.PUBLIC_URL + '/re-home/confirmation.png'} alt="Confirmation" /></div>
            <div className='image'><img src={process.env.PUBLIC_URL + '/re-home/dog-infomation.png'} alt="Dog Infomation" /></div>
            <div className='image'><img src={process.env.PUBLIC_URL + '/re-home/booking.png'} alt="Booking" /></div>
          </div>
        </div>
      </div>
      <div className='section'>
      <div className='image'><img src={process.env.PUBLIC_URL + '/re-home/laptop.jpg'} alt="Laptop" /></div>
      </div>
      <div className='wrapper'>
        <div className="section center">
          <Link to="/projects" className='btn'>Other projects</Link>
        </div>
      </div>
    </div>
  )
}

export default ReHome