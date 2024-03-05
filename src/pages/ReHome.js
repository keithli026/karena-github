import React, { useState, useEffect, useRef } from 'react'
import OtherProjectsButton from '../components/OtherProjectsButton'
import banner from "../assets/images/re-home/banner.png"
import bannerMobile from "../assets/images/re-home/banner_mobile.png"
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
import reHomeApp from "../assets/images/re-home/rehome_1.png"
import video from "../assets/videos/re-home/comp_1.mp4"
import loginOpen from "../assets/images/re-home/login-open.png"
import search from "../assets/images/re-home/search.png"
import welcome from "../assets/images/re-home/welcome.png"
import confirmation from "../assets/images/re-home/confirmation.png"
import dogInformation from "../assets/images/re-home/dog-infomation.png"
import booking from "../assets/images/re-home/booking.png"
import laptop from "../assets/images/re-home/laptop.jpg"
import cert1 from "../assets/images/re-home/Coursera_UXC1.jpg"
import cert2 from "../assets/images/re-home/Coursera_UXC2.jpg"
import cert3 from "../assets/images/re-home/Coursera_UXC3.jpg"
import cert4 from "../assets/images/re-home/Coursera_UXC4.jpg"
import cert5 from "../assets/images/re-home/Coursera_UXC5.jpg"
import cert6 from "../assets/images/re-home/Coursera_UXC6.jpg"
import cert7 from "../assets/images/re-home/Coursera_UXC7.jpg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Container from 'react-bootstrap/Container'
import useIntersectionObserver from '@react-hook/intersection-observer'

const ReHome = () => {
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };

  const videoRef = useRef();
  const [isLoad, setIsLoad] = useState(false);
  const { isIntersecting } = useIntersectionObserver(videoRef);

  useEffect(() => {
    if (isIntersecting && !isLoad) {
      setIsLoad(true);
      // console.log(isLoad, isIntersecting);
    }

  }, [isIntersecting, isLoad]);

  return (
    <div id='re-home' className='project'>
      <div className='banner'>
        <div className='image'>
          <img src={banner} alt="RE-Home banner" className='desktop' />
          <img src={bannerMobile} alt="RE-Home banner" className='mobile' />
        </div>
        <div className='title'>
          <img src={reHomeIcon} alt="RE-Home logo" /><span>RE-HOME</span>
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
      <Container>
        <div className='section'>
          <h2>Brief</h2>
          <p>Millions of animals are currently in shelters and foster homes awaiting adoption. During the pandemic increase the number of homeless animals in Hong Kong. Many pets owner moved aboard.  Sadly, most of the animals that end up in shelters are euthanised due to lack of space. Although many people are interested in adopting an animals, the process can be difficult.</p>
          <p>Re-Home is a local animals adoption app that’s help users easily to find the matched pet to adopt. Re-Home app strives to reduce the homeless dog numbers, improve the adoption rate. They offer an experience that would easily connect people to animals and provide a simple adoption process. I design its mobile application for a case study project.</p>
        </div>
        <div className='section'>
          <h2>Problem</h2>
          <p>How might we create responsive application and a sustainable community with engaging strategies that can help connect people?</p>
          <p>
            People assuming shelter animals have behaviour and health issue<br />
            Many potential adopters may not be aware of the availability of animals for adoption<br />
            People worry specific adoption requirement can be challenges and deter potential adopters
          </p>
        </div>
        <div className='section'>
          <h2>Goal</h2>
          <ol>
            <li>Improved user-friendly application that showcases available animals for adoption. Include clear and detailed information about each animals. The platforms allow potential adopters to search for available animals based on their preferences and location.</li>
            <li>Created booking system</li>
            <li>Streamline the adoption process to make more efficient and user- friendly. Simplify paperwork, provide clear instructions.</li>
            <li>Created a education workshop & training system help improve dog-human understanding</li>
            <li>Prioritize mobile optimization to provide a user-friendly experience for mobile user </li>
          </ol>
        </div>

        <div className='section'>
          <h2>Design Approach</h2>
          <div className='center'>
            <img src={designApproach} alt="Design approach" loading="lazy" />
          </div>
        </div>
        <div className='section'>
          <h2>Persona</h2>
          <p>By conducting research, we interviewed 2 people and identified few problems of adopting animals who could be our target users.</p>
          <img src={persona} alt="Persona" loading="lazy" />
        </div>
        <div className='section'>
          <h2>Sitemap</h2>
          <p>
            Difficulty with website navigation was a primary pain point for user.<br />
            My goal here was to make strategic information architecture decisions that would improve overall responsive web flow.
          </p>
          <div className='center'>
            <img src={sitemap} alt="Sitemap" loading="lazy" />
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
            <img src={wireframe} alt="Wireframe" loading="lazy" />
          </div>
        </div>
        <div className='section'>
          <h2>Usability studies</h2>
          <p>Early design allowed for some text search but after usability studies, i added icons option to choose.</p>
          <div className='center'>
            <img src={usabilityStudy} alt="Usability study" loading="lazy" />
          </div>
        </div>
        <div className='section'>
          <h2>The solution</h2>
          <div className='video' ref={videoRef}>
            <video controls playsInline preload={isLoad ? "auto" : "none"} poster={reHomeApp}>
              <source src={video} type="video/mp4" />
              <img src={reHomeApp} alt="reHome app" loading="lazy" title="Your browser does not support the video tag." />
            </video>
          </div>
        </div>
        <div className='flexbox'>
          <div className='content'>
            Easy to search and access to detailed information about the animals available for adoption
          </div>
          <div className='image' id="one"><img src={loginOpen} alt="Login open" loading="lazy" /></div>
          <div className='content shift'>
            Scheduling time to visit  through the app
          </div>
          <div className='image'><img src={search} alt="Search" loading="lazy" /></div>
          <div className='image' id="three"><img src={welcome} alt="Welcome" loading="lazy" /></div>
          <div className='image'><img src={confirmation} alt="Confirmation" loading="lazy" /></div>
          <div className='image'><img src={dogInformation} alt="Dog Infomation" loading="lazy" /></div>
          <div className='image'><img src={booking} alt="Booking" loading="lazy" /></div>
        </div>
        <div className='section'>
          <img src={laptop} alt="Laptop" loading="lazy" />
        </div>
        <div className='section' id="certs">
          <Slider  {...settings}>
            <div className='image'><img src={cert1} alt="Coursera certificate - Foundations of User Experience (UX) Design" loading="lazy" /></div>
            <div className='image'><img src={cert2} alt="Coursera certificate - Start the UX Design Process: Empathize, Define, and Ideate" loading="lazy" /></div>
            <div className='image'><img src={cert3} alt="Coursera certificate - Build Wireframes and Low-Fidelity Prototypes" loading="lazy" /></div>
            <div className='image'><img src={cert4} alt="Coursera certificate - Conduct UX Research and Test Early Concepts" loading="lazy" /></div>
            <div className='image'><img src={cert5} alt="Coursera certificate - Create High-Fidelity Designs and Prototypes in Figma" loading="lazy" /></div>
            <div className='image'><img src={cert6} alt="Coursera certificate - Responsive Web Design in Adobe XD" loading="lazy" /></div>
            <div className='image'><img src={cert7} alt="Coursera certificate - Design a User Experience for Social Good & Prepare for Jobs" loading="lazy" /></div>
          </Slider>
        </div>
        <div className="section center">
          <OtherProjectsButton />
        </div>
      </Container>
    </div>
  )
}

export default ReHome