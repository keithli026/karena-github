import React from 'react'
import { Link } from 'react-router-dom'
import "./badgeDesign.scss"

const BadgeDesign = () => {
  return (
    <div id='badge_design'>
      <div className='banner'>
        <div className='image'><img src={process.env.PUBLIC_URL + '/badge_design/badge_design.png'} alt="Badge Design" /></div>
        <div className='title'>Badge Design</div>
        <div className='content'>
          <div className='keypoint'>
            <div>MY ROLE: <span>GRAPHIC DESIGN 丨UI DESIGN</span></div>
            <div>TIMELINE: <span>4 WEEKS, 2015</span></div>
          </div>
          <div className='icons'>
            <img src={process.env.PUBLIC_URL + '/icons/XD.png'} alt="xd icon" />
            <img src={process.env.PUBLIC_URL + '/icons/PS.png'} alt="ps icon" />
            <img src={process.env.PUBLIC_URL + '/icons/AI.png'} alt="ai icon" />
          </div>
        </div>
      </div>
      <div className='wrapper'>
        <div className='section'>
          <h2>Brief</h2>
          <p>The inspiration came from a anti-counterfeit design elements that are used for security purposes. Guilloche is a pattern of subtle thin lines interwoven according to the rules of geometry. It includes all wavy decorative lines and graphic patterns which are primarily used on banknotes and securities. The use of Guilloche lines might in itself prevent the counterfeiting of products (e.g. certificates, diplomas, gift vouchers, tickets, packaging, and badge). My teammates and I design its badge for EF Standard English Test. By earning badges at different stages or levels, users can see their advancement and feel a sense of progression, which can enhance their motivation to continue engaging with a product.</p>
          <h2>Problem</h2>
          <p>The traditional designs can sometimes appear outdated or lack visual, security anti-counterfeit problems, we also consider different formats, such as print and digital, and ensure the design maintains its visual integrity across platforms.</p>
          <h2>Goal</h2>
          <ol>
            <li>Balance between tradition, modernity, security and adaptability</li>
            <li>Define the desired visual style, considering branding guidelines</li>
          </ol>
        </div>
      </div>
      <div className='bg'>
        <div className='wrapper'>
          <img src={process.env.PUBLIC_URL + '/badge_design/badge_40.png'} alt="Badge 40" />
          <img src={process.env.PUBLIC_URL + '/badge_design/badge_60.png'} alt="Badge 60" />
          <img src={process.env.PUBLIC_URL + '/badge_design/badge_30.png'} alt="Badge 30" />
          <img src={process.env.PUBLIC_URL + '/badge_design/badge_50.png'} alt="Badge 50" />
          <img src={process.env.PUBLIC_URL + '/badge_design/badge_70.png'} alt="Badge 70" />
          <img src={process.env.PUBLIC_URL + '/badge_design/badge_on_phone.png'} alt="badge on mobile" />
        </div>
        <div className='section'>
          <div className='image'><img src={process.env.PUBLIC_URL + '/badge_design/badge_design_1.png'} alt="badge design" /></div>
        </div>
        <div className='section'>
          <div className='image'><img src={process.env.PUBLIC_URL + '/badge_design/badge_design_2.png'} alt="badge design" /></div>
        </div>
        <div className='wrapper'>
          <img src={process.env.PUBLIC_URL + '/badge_design/award.png'} alt="award page" />
          <div className="center">
            <Link to="/projects" className='btn'>Other projects</Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default BadgeDesign