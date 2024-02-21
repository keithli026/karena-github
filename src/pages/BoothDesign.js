import React, { useState, useEffect, useRef } from 'react'
import OtherProjectsButton from '../components/OtherProjectsButton'
import banner from "../assets/images/bookfair/banner.png"
import bannerMobile from "../assets/images/bookfair/banner_mobile.png"
import floorPlannerIcon from "../assets/images/icons/floorplanner.png"
import PSIcon from "../assets/images/icons/PS.png"
import AIIcon from "../assets/images/icons/AI.png"
import colours from "../assets/images/bookfair/colours.jpg"
import bookFairBackdrop from "../assets/images/bookfair/book-fair-2023-backdrop.jpg"
import booth from "../assets/images/bookfair/booth.png"
import floorPlan from "../assets/images/bookfair/floorplan2.png"
import booth1 from "../assets/images/bookfair/booth1.png"
import foamBoard1 from "../assets/images/bookfair/foamboard_1.jpg"
import foamBoard2 from "../assets/images/bookfair/foamboard_2.jpg"
import foamBoard3 from "../assets/images/bookfair/foamboard_3.jpg"
import igStory from "../assets/images/bookfair/ig_story.png"
import bookCoverBack from "../assets/images/bookfair/cover-back.png"
import bookCover from "../assets/images/bookfair/book-cover.png"
import video from "../assets/videos/bookfair/23bookfair.mov"
import useIntersectionObserver from '@react-hook/intersection-observer'
import Container from 'react-bootstrap/Container';

const BoothDesign = () => {
  const videoRef = useRef();
  const [isLoad, setIsLoad] = useState(false);
  const { isIntersecting } = useIntersectionObserver(videoRef);

  useEffect(() => {
    if (isIntersecting && !isLoad) {
      setIsLoad(true);
      // console.log("isLoad:", isLoad, ";isIntersecting:", isIntersecting);
    }

  }, [isIntersecting, isLoad]);
  return (
    <div id='booth_design' className='project'>
      <div className='banner'>
        <div className='image'>
          <img src={banner} alt="Book fair" className='desktop' />
          <img src={bannerMobile} alt="Book fair" className='mobile' />
        </div>
        <div className='title'>Book Fair</div>
        <div className='content'>
          <div className='keypoint'>
            <div>MY ROLE: <span>PRODUCT DESIGN 丨<span>BRANDING</span> 丨<span>3D DESIGN</span></span></div>
            <div>TIMELINE: <span>4 WEEKS, 2023</span></div>
          </div>
          <div className='icons'>
            <img src={floorPlannerIcon} alt="floorplanner icon" />
            <img src={PSIcon} alt="ps icon" />
            <img src={AIIcon} alt="ai icon" />
          </div>
        </div>
      </div>
      <Container>
        <div className='section'>
          <h2>Brief</h2>
          <p>Years of experience designing different exhibition booth, I responsible for creating visually appealing and all the materials both online and offline, including visual elements, space planning, 3D visualization, and materials on social media platform that effectively delivery key messages to the audiences.</p>
        </div>
        <div className='section'>
          <h2>Problem</h2>
          <p>How might we effective use of space and effectively communicate the brand identity.</p>
        </div>
        <div className='section'>
          <h2>Goal</h2>
          <ol>
            <li>Improved brand awareness by integrative displays, demonstrations, samples or hand- on activities to create a memorable and immersive experience</li>
            <li>Created eye-catching visuals to grab attendees' attention</li>
            <li>Incorporate social media elements into your booth design to encourage attendees to share their experience to increase online visibility and engagement</li>
          </ol>
        </div>
        <div className='section center'>
          <img src={colours} alt="Colours" loading="lazy" />
          <div className='video' ref={videoRef}>
            <video controls playsInline preload={isLoad ? "auto" : "none"} poster={booth}>
              <source src={video} type="video/mp4" />
              <img src={booth} alt="booth" loading="lazy" title="Your browser does not support the video tag." />
            </video>
          </div>
          <img src={bookFairBackdrop} alt="Book fair 2023 backdrop" loading="lazy" />
          <img src={booth} alt="Booth" loading="lazy" />
          <img src={floorPlan} alt="Floor plan" loading="lazy" />
          <img src={booth1} alt="Booth" loading="lazy" />
          <div className='flexbox_wrapper'>
            <div className='flexbox'>
              <img src={foamBoard1} alt="Foamboard" loading="lazy" />
            </div>
            <div className='flexbox'>
              <img src={foamBoard2} alt="Foamboard" loading="lazy" />
              <img src={foamBoard3} alt="Foamboard" loading="lazy" />
            </div>
          </div>
          <img src={igStory} alt="IG story" loading="lazy" />
        </div>
        <div className='section'>
          <h2>Book cover design</h2>
          <div className='center'>
            <img src={bookCoverBack} alt="Book cover back" loading="lazy" />
            <img src={bookCover} alt="Book cover" loading="lazy" id="book-cover" />
          </div>
        </div>
        <div className="section center">
          <OtherProjectsButton />
        </div>
      </Container>
    </div>
  )
}

export default BoothDesign