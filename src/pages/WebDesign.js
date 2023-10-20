import React from 'react'
import { Link } from 'react-router-dom'
import "./webDesign.scss"
import BackButton from '../components/BackButton'

const WebDesign = () => {
  return (
    <div id='web_design'>
      <div className='banner'>
        <div className='image'><img src={process.env.PUBLIC_URL + '/web_design/banner.png'} alt="Englishtown banner" /></div>
        <div className='title'>
          <img src={process.env.PUBLIC_URL + '/icons/EF_logo.png'} alt="EF Englishtown logo" />
        </div>
        <div className='content'>
          <div className='keypoint'>
            <div>MY ROLE: <span>UI/UX DESIGN</span></div>
            <div>TIMELINE: <span>12 WEEKS, 2014</span></div>
          </div>
          <div className='icons'>
            <img src={process.env.PUBLIC_URL + '/icons/XD.png'} alt="xd icon" />
            <img src={process.env.PUBLIC_URL + '/icons/PS.png'} alt="ps icon" />
          </div>
        </div>
      </div>
      <div className='wrapper'>
        <div className='section'>
          <h2>Brief</h2>
          <p>I was given the task to updated new logo, redesign visual content strategy and ensure that the website is responsiveness and optimized for version devices and screen size. Optimize landing pages and forms to improve conversion rates.</p>
          <h2>Problem</h2>
          <p>Through user research, we discovered the problems of low discoverability, inconsistency, and inefficiency. The flow was confusing and difficult to navigate. Lack of mobile optimization and poor user experience on small screen and content that is not properly adapted for mobile.</p>
          <h2>Goal</h2>
          <ol>
            <li>Streamlined navigation flow enhances the overall user experience, leading to higher satisfaction</li>
            <li>Well-designed and visually appealing layouts create a positive impression and engage user</li>
            <li>Adequate colour contrast ensures that contrast is accessible to all users, regardless of their visual abilities</li>
            <li>Mobile-optimized designs and responsive layouts provide a seamless experience across devices</li>
          </ol>
        </div>
      </div>
      <div className='bg'>
        <div className='wrapper'>
          {/* <BackButton /> */}
          <div className='section center'>
            <img src={process.env.PUBLIC_URL + '/web_design/ipad.gif'} alt="iPad layout design" />
          </div>
          <div className='section center'>
            <img src={process.env.PUBLIC_URL + '/web_design/web2.jpg'} alt="Englishtown desktop design" />
          </div>
        </div>
      </div>
      <div className='wrapper'>
        <div className='section'>
          <h2>Next Steps</h2>
          <p>Improve responsiveness on mobile and tablet</p>
          <div className='flexbox'>
            <div className='image'><img src={process.env.PUBLIC_URL + '/web_design/mobile1.png'} alt="Englishtown mobile design" /></div>
            <div className='image'><img src={process.env.PUBLIC_URL + '/web_design/mobile2.png'} alt="Englishtown mobile design" /></div>
            <div className='image'><img src={process.env.PUBLIC_URL + '/web_design/mobile3.png'} alt="Englishtown mobile design" /></div>
          </div>
          <div className='flexbox two'>
            <div className='image'><img src={process.env.PUBLIC_URL + '/web_design/web1.jpg'} alt="Englishtown desktop design" /></div>
            <div className='image'><img src={process.env.PUBLIC_URL + '/web_design/web3.jpg'} alt="Englishtown desktop design" /></div>
          </div>
          <div className='center'>
            <img src={process.env.PUBLIC_URL + '/web_design/web4.jpg'} alt="Englishtown desktop design" />
          </div>
        </div>
        <div className='section'>
          <h2>Reflection</h2>
          <p>I'm proud to work on such a large-scale project from the very beginning. Thanks a lot to my team for believing in me and supporting me throughout the process. I learned to collaborate with developers and hand off final deliverables. I challenged myself to think of a lot of iterations, present them to my manager, and test them with users.</p>
        </div>
        <div className="section center">
          <Link to="/projects" className='btn'>Other projects</Link>
        </div>
      </div>

    </div>
  )
}

export default WebDesign