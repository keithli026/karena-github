import React from 'react'
import "./reHome.scss"
import OtherProjectsButton from '../components/OtherProjectsButton'
import banner from "../assets/images/re-home/banner.png"
import reHomeIcon from "../assets/images/icons/REHome_logo.png"
import XDIcon from "../assets/images/icons/XD.png"
import PSIcon from "../assets/images/icons/PS.png"
import AIIcon from "../assets/images/icons/AI.png"
import figmaIcon from "../assets/images/icons/figma.png"
import designApproach from "../assets/images/re-home/design-approach.png"
import persona from "../assets/images/re-home/persona.png"
import sitemap from "../assets/images/re-home/sitemap.png"
import wireframe from "../assets/images/re-home/wireframe.png"
import usabilityStudy from "../assets/images/re-home/usability-study.png"
import loginOpen from "../assets/images/re-home/login-open.png"
import search from "../assets/images/re-home/search.png"
import welcome from "../assets/images/re-home/welcome.png"
import confirmation from "../assets/images/re-home/confirmation.png"
import dogInformation from "../assets/images/re-home/dog-infomation.png"
import booking from "../assets/images/re-home/booking.png"
import laptop from "../assets/images/re-home/laptop.jpg"

const ReHome = () => {
  return (
    <div id='re-home'>
      <div className='banner'>
        <div className='image'><img src={banner} alt="banner" /></div>
        <div className='title'>
          <img src={reHomeIcon} alt="RE-Home logo" /><span>RE-Home</span>
        </div>
        <div className='content'>
          <div className='keypoint'>
            <div>MY ROLE: <span>UI DESIGN 丨<span>UX RESEARCHER</span> 丨<span>BRANDING</span> 丨<span>DESIGNER STRATEGY</span></span></div>
            <div>TIMELINE: <span>12 WEEKS, 2023</span></div>
          </div>
          <div className='icons'>
            <img src={XDIcon} alt="xd icon" />
            <img src={PSIcon} alt="ps icon" />
            <img src={AIIcon} alt="ai icon" />
            <img src={figmaIcon} alt="figma icon" />
          </div>
        </div>
      </div>
      <div className='wrapper'>
        {/* <BackButton /> */}
        <div className='section'>
          <h2>Design Approach</h2>
          <div className='center'>
            <img src={designApproach} alt="Design approach" />
          </div>
        </div>
        <h2>Persona</h2>
        <p>By conducting research, we interviewed 2 people and identified few problems of adopting animals who could be our target users.</p>
      </div>
      <div className='bg section'>
          <div className='wrapper'>
            <div className='center'>
            <img src={persona} alt="Persona" />
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
            <img src={sitemap} alt="Sitemap" />
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
            <img src={wireframe} alt="Wireframe" />
          </div>
        </div>
        <div className='section'>
          <h2>Usability studies</h2>
          <p>Early design allowed for some text search but after usability studies, i added icons option to choose.</p>
          <div className='center'>
            <img src={usabilityStudy} alt="Usability study" />
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
            <div className='image'><img src={loginOpen} alt="Login open" /></div>
            <div className='image'><img src={search} alt="Search" /></div>
            <div className='image'><img src={welcome} alt="Welcome" /></div>
            <div className='image'><img src={confirmation} alt="Confirmation" /></div>
            <div className='image'><img src={dogInformation} alt="Dog Infomation" /></div>
            <div className='image'><img src={booking} alt="Booking" /></div>
          </div>
        </div>
      </div>
      <div className='section'>
      <div className='image'><img src={laptop} alt="Laptop" /></div>
      </div>
      <div className='wrapper'>
        <div className="section center">
          <OtherProjectsButton />
        </div>
      </div>
    </div>
  )
}

export default ReHome