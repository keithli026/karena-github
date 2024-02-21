import React, { useState, useEffect, useRef } from 'react'
import OtherProjectsButton from '../components/OtherProjectsButton'
import banner from "../assets/images/fitsio/banner.png"
import bannerMobile from "../assets/images/fitsio/banner_mobile.png"
import AEIcon from "../assets/images/icons/AE.png"
import PSIcon from "../assets/images/icons/PS.png"
import AIIcon from "../assets/images/icons/AI.png"
import fitsio from "../assets/images/fitsio/fitsio_white.png"
import Container from 'react-bootstrap/Container';
const Fitsio = () => {
  return (
    <div id='fitsio' className='project'>
      <div className='banner'>
        <div className='image'>
          <img src={banner} alt="Book fair" className='desktop' />
          <img src={bannerMobile} alt="Book fair" className='mobile' />
        </div>
        <div className='title'>project in progress...</div>
        <div className='content'>
          <div className='keypoint'>
            <div>MY ROLE: <span>BRANDING</span></div>
            {/* <div>TIMELINE: <span>4 WEEKS, 2023</span></div> */}
          </div>
          <div className='icons'>
            <img src={AEIcon} alt="ae icon" />
            <img src={PSIcon} alt="ps icon" />
            <img src={AIIcon} alt="ai icon" />
          </div>
        </div>
      </div>
      <div className='section' id="intro">
        <Container>
          <img src={fitsio} alt="fitsio logo" loading="lazy"></img>
          <p>People all have something they enjoy doing; whether it be sports or family activities. They all have goals they want to achieve. At Fitsio, guided by our core values, we empower people to live a better life. We love to see people who enjoy their life and do what they enjoy doing. To do that, we treat people as unique individuals. We discuss rehabilitation roadmap to achieve their personal goals. We use a holistic approach by taking into consideration both conditions and general well-being. We provide physiotherapy and prescribe exercises to enhance better outcomes.</p>
        </Container>
      </div>

      <Container>
        <div className="section center">
          <OtherProjectsButton />
        </div>
      </Container>
    </div>
  )
}

export default Fitsio