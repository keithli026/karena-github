import React from 'react'
import "./badgeDesign.scss"
// import BackButton from '../components/BackButton'
import OtherProjectsButton from '../components/OtherProjectsButton'
import banner from "../assets/images/badge_design/banner.png"
import XDIcon from "../assets/images/icons/XD.png"
import PSIcon from "../assets/images/icons/PS.png"
import AIIcon from "../assets/images/icons/AI.png"
import badge30 from "../assets/images/badge_design/badge_30.png"
import badge40 from "../assets/images/badge_design/badge_40.png"
import badge50 from "../assets/images/badge_design/badge_50.png"
import badge60 from "../assets/images/badge_design/badge_60.png"
import badge70 from "../assets/images/badge_design/badge_70.png"
import badgeMobile from "../assets/images/badge_design/badge_on_phone.png"
import badgeDesign1 from "../assets/images/badge_design/badge_design_1.png"
import badgeDesign2 from "../assets/images/badge_design/badge_design_2.png"
import awardPage from "../assets/images/badge_design/award.png"

const BadgeDesign = () => {
  return (
    <div id='badge_design'>
      <div className='banner'>
        <div className='image'><img src={banner} alt="Badge design banner" /></div>
        <div className='title'>Badge Design</div>
        <div className='content'>
          <div className='keypoint'>
            <div>MY ROLE: <span>GRAPHIC DESIGN 丨<span>UI DESIGN</span></span></div>
            <div>TIMELINE: <span>4 WEEKS, 2015</span></div>
          </div>
          <div className='icons'>
            <img src={XDIcon} alt="xd icon" />
            <img src={PSIcon} alt="ps icon" />
            <img src={AIIcon} alt="ai icon" />
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
          {/* <BackButton /> */}
          <img src={badge40} alt="Badge 40" loading="lazy"/>
          <img src={badge60} alt="Badge 60" loading="lazy"/>
          <img src={badge30} alt="Badge 30" loading="lazy"/>
          <img src={badge50} alt="Badge 50" loading="lazy"/>
          <img src={badge70} alt="Badge 70" loading="lazy"/>
          <img src={badgeMobile} alt="badge on mobile" loading="lazy"/>
        </div>
        <div className='section'>
          <div className='image'><img src={badgeDesign1} alt="badge design" loading="lazy"/></div>
        </div>
        <div className='section'>
          <div className='image'><img src={badgeDesign2} alt="badge design" loading="lazy"/></div>
        </div>
        <div className='wrapper'>
          <img src={awardPage} alt="award page" loading="lazy"/>
          <div className="center">
            <OtherProjectsButton />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BadgeDesign