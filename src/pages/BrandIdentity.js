import React from 'react'
import OtherProjectsButton from '../components/OtherProjectsButton'
import banner from "../assets/images/brand_identity/banner.png"
import bannerMobile from "../assets/images/brand_identity/banner_mobile.jpg"
import AEIcon from "../assets/images/icons/AE.png"
import PSIcon from "../assets/images/icons/PS.png"
import AIIcon from "../assets/images/icons/AI.png"
import color4 from "../assets/images/brand_identity/color_4.jpg"
import greenPowder from "../assets/images/brand_identity/gt.png"
import combination from "../assets/images/brand_identity/combination.png"
import sm1 from "../assets/images/brand_identity/sm1.jpg"
import sm3 from "../assets/images/brand_identity/sm3.jpg"
import sm2 from "../assets/images/brand_identity/sm2.jpg"
import tea from "../assets/images/brand_identity/tea.png"
import diet from "../assets/images/brand_identity/diet.png"
import teaVideo from "../assets/videos/brand_identity/tea.mp4"
import dietVideo from "../assets/videos/brand_identity/diet.mp4"
import pocinaVideo from "../assets/videos/brand_identity/pocina.mp4"

import Container from 'react-bootstrap/Container';

const BrandDesign = () => {
  return (
    <div id='brand_identity' className='project'>
      <div className='banner'>
        <div className='image'>
          <img src={banner} alt="Brand identity banner" className='desktop' />
          <img src={bannerMobile} alt="Brand identity banner" className='mobile' />
        </div>
        <div className='title'>BRAND IDENTITY</div>
        <div className='content'>
          <div className='keypoint'>
            <div>MY ROLE: <span>BRANDING丨<span>MEDIA DESIGN</span> 丨<span>PHOTOGRAPHY</span></span></div>
            <div>TIMELINE: <span>3 WEEKS, 2022</span></div>
          </div>
          <div className='icons'>
            <img src={AEIcon} alt="ae icon" />
            <img src={PSIcon} alt="ps icon" />
            <img src={AIIcon} alt="ai icon" />
          </div>
        </div>
      </div>
      <Container>
        <div className='section'>
          <h2>Brief</h2>
          <p>Pocina meal replacement shakes are a popular type of meal replacement that comes in the form of a drink. They are made from protein powder, vitamins, and minerals, and are designed to provide a balanced and nutritious alternative to a traditional meal.</p>
          <h2>Problem</h2>
          <p>How might we effectively increase brand awareness and young tagetes audience.</p>
          <h2>Goal</h2>
          <ol>
            <li>Improved brand awareness by creating engaging and shareable content.</li>
            <li>Using eye-catching design elements and photograph.</li>
            <li>Creating motion graphics for social media to get target audience attention.</li>
          </ol>
        </div>
        <div className='section'>
          <div className='video'>
            <video autoPlay loop muted playsInline>
              <source src={pocinaVideo} type="video/mp4" />
              <img src={color4} alt="Four colors" loading="lazy" title="Your browser does not support the video tag." />
            </video>
          </div>
          <div className='ref'>
            <img src={greenPowder} alt="Green powder" loading="lazy" />
            <div className='text'>I took this product photo with great attention to detail and a keen eye for aesthetics. Capturing the essence if the product, I ensured that every angle, lighting, and composition was carefully considered.</div>
            {/* <img src={pocina} alt="POCINA" className='cover' loading="lazy" /> */}
          </div>
          <img src={combination} alt="Combination" loading="lazy" />
        </div>
        <div className='section'>
          <img src={sm1} alt="sm1" loading="lazy" className='mb-5'/>
          <img src={sm3} alt="sm3" loading="lazy" />
        </div>
        <div className='section'>
          <img src={sm2} alt="sm2" loading="lazy" />
        </div>
        <div className='section flexbox two'>
          <div className='video'>
            <video autoPlay loop muted playsInline>
              <source src={dietVideo} type="video/mp4" />
              <img src={diet} alt="Diet" loading="lazy" title="Your browser does not support the video tag." />
            </video>
          </div>
          <div className='video'>
            <video autoPlay loop muted playsInline>
              <source src={teaVideo} type="video/mp4" />
              <img src={tea} alt="Tea" loading="lazy" title="Your browser does not support the video tag." />
            </video>
          </div>
        </div>
        <div className="section center">
          <OtherProjectsButton />
        </div>
      </Container>
    </div>
  )
}

export default BrandDesign