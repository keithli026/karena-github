import React, { useState, useEffect, useRef } from 'react'
import BackToTopButton from '../components/BackToTopButton'
import OtherProjectsButton from '../components/OtherProjectsButton'
import banner from "../assets/images/digital/banner.png"
import bannerMobile from "../assets/images/digital/XHS_LP_2.png"
import XHS1 from "../assets/images/digital/XHS_v1.png"
import XHS2 from "../assets/images/digital/XHS_v2.png"
import XHS3 from "../assets/images/digital/XHS_v3.png"
import video1 from "../assets/videos/digital/video1.mp4"
import video2 from "../assets/videos/digital/video2.mp4"
import video3 from "../assets/videos/digital/video3.mp4"
import filter1 from "../assets/images/digital/filter-1.png"
import filter2 from "../assets/images/digital/filter-2.png"
import filter3 from "../assets/images/digital/filter-3.png"
import filter4 from "../assets/images/digital/filter-4.png"
import spirit from "../assets/images/digital/hong_kong_spirit.png"
import spirit1 from "../assets/images/digital/hong_kong_spirit_1.png"
import spirit2 from "../assets/images/digital/hong_kong_spirit_2.png"
import spirit3 from "../assets/images/digital/hong_kong_spirit_3.png"
import spirit4 from "../assets/images/digital/hong_kong_spirit_4.png"
import spirit5 from "../assets/images/digital/hong_kong_spirit_5.png"
import igFeed from "../assets/images/digital/igfeed.jpg"
import XHSPost from "../assets/images/digital/XHSpost.jpg"
import summer1 from "../assets/images/digital/summer_1.png"
import summer2 from "../assets/images/digital/summer_2.png"
import color from "../assets/images/digital/colour_2.png"
import igPost from "../assets/images/digital/ig_post.png"
import googleAd1 from "../assets/images/digital/google_ad1.GIF"
import googleAd2 from "../assets/images/digital/google_ad2.GIF"
import englishBite1 from "../assets/images/digital/englishBite1.jpg"
import englishBite2 from "../assets/images/digital/englishBite2.jpg"
import englishBite3 from "../assets/images/digital/englishBite3.jpg"
import Container from 'react-bootstrap/Container'
import useIntersectionObserver from '@react-hook/intersection-observer'
import ScrollClassAdder from '../components/ScrollClassAdder'
import throttle from 'lodash.throttle'
import ReactGA from 'react-ga4'

const Digital = () => {
  ReactGA.send({ 
    hitType: "pageview", 
    page: "/", 
    title: "Digital" 
  });

  const videoRef = useRef();
  const [isLoad, setIsLoad] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isIntersecting } = useIntersectionObserver(videoRef);

  useEffect(() => {
    if (isIntersecting && !isLoad) {
      setIsLoad(true);
      // console.log(isLoad, isIntersecting);
    }
    const handleScroll = throttle(() => {
      setIsScrolled(true);
    }, 250);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }

  }, [isIntersecting, isLoad, isScrolled]);

  return (
    <div id='digital' className='project'>
      {/* <div className='banner'>
        <div className='image'>
          <img src={banner} alt="Digital banner" className='desktop' />
          <img src={bannerMobile} alt="Digital banner" className='mobile' />
        </div>
        <div className='title'>
          <div className='name'>DIGITAL</div>
          <div className='summary'>Creates, manages, and produces digital design solutions for a variety of uses: websites, product graphics, edm, landing page, different social media platform (Facebook, Instagram, Little Red Book) , brand campaigns and short video editing.</div>
        </div>
      </div> */}
      <Container>
        <div className={`info section center ${isScrolled ? "scrolled" : null}`}>
          {/* <h2>Little Red Book Landing page</h2> */}
          <h2 className='name'>DIGITAL</h2>
          <div className='summary'>Creates, manages, and produces digital design solutions for a variety of uses: websites, product graphics, edm, landing page, different social media platform (Facebook, Instagram, Little Red Book) , brand campaigns and short video editing.</div>
          {/* <img src={XHS1} alt="XHS" loading="lazy" style={{width: "33.33%", marginBottom: "200px"}}/>
          <img src={XHS2} alt="XHS" loading="lazy" style={{width: "33.33%", marginBottom: "200px"}}/>
          <img src={XHS3} alt="XHS" loading="lazy" style={{width: "33.33%", marginBottom: "200px"}}/> */}
          <video controls playsInline preload="none" poster={XHS1} style={{width: "33.33%", marginBottom: "200px"}}>
              <source src={video1} type="video/mp4" />
              <img src={XHS1} alt="video" loading="lazy" title="Your browser does not support the video tag." />
            </video>
            <video controls playsInline preload="none" poster={XHS2} style={{width: "33.33%", marginBottom: "200px"}}>
              <source src={video2} type="video/mp4" />
              <img src={XHS2} alt="video" loading="lazy" title="Your browser does not support the video tag." />
            </video>
            <video controls playsInline preload="none" poster={XHS3} style={{width: "33.33%", marginBottom: "200px"}}>
              <source src={video3} type="video/mp4" />
              <img src={XHS3} alt="video" loading="lazy" title="Your browser does not support the video tag." />
            </video>
          <img src={filter1} alt="filter" loading="lazy"/>
          <img src={filter2} alt="filter" loading="lazy" style={{width: "50%", marginBottom: "100px"}}/>
          <img src={filter3} alt="filter" loading="lazy" style={{width: "50%", marginBottom: "100px"}}/>
          <img src={filter4} alt="filter" loading="lazy"/>
        </div>
        {/* <div className="section center">
          <img src={spirit} alt="spirit" loading="lazy" style={{marginBottom: "100px"}}/>
          <img src={spirit1} alt="spirit" loading="lazy" style={{width: "300px", marginBottom: "100px"}}/>
          <img src={spirit2} alt="spirit" loading="lazy" style={{marginBottom: "100px"}}/>
          <img src={spirit3} alt="spirit" loading="lazy" style={{marginBottom: "100px"}}/>
          <img src={spirit4} alt="spirit" loading="lazy" style={{marginBottom: "100px"}}/>
          <img src={spirit5} alt="spirit" loading="lazy" />
        </div> */}
        <div className="section center">
          {/* <h2>2024<br />Social media</h2> */}
          <img src={bannerMobile} alt="Little Red Book Landing page" loading='lazy' style={{marginBottom: "200px"}} />
          <img src={summer2} alt="Summer" loading='lazy' style={{marginBottom: "20px"}}/>
          <img src={summer1} alt="Summer" loading='lazy' style={{marginBottom: "20px"}}/>
          <img src={color} alt="Color" loading='lazy' style={{marginBottom: "200px"}}/>
          <img src={igFeed} alt="Social media feeds" loading='lazy' style={{marginBottom: "200px"}} />
          <img src={XHSPost} alt="Xiaohongshu post" loading='lazy' style={{marginBottom: "200px"}}/>
          <img src={igPost} alt="Social media feeds" loading='lazy'/>
        </div>
        
        <div className="section center">
          {/* <h2>Google Ads gif banner and Landing page</h2> */}
          <div className='flexbox'>
            <div className='box'>
              <div className='wrapper'>
                <img src={googleAd1} alt="english bite gif" loading='lazy' />
                <img src={googleAd2} alt="english bite gif" loading='lazy' />
              </div>
              <img src={englishBite1} alt="english bite" loading='lazy' />
              <img src={englishBite3} alt="english bite" loading='lazy' />
            </div>
            <div className='box'>
              <img src={englishBite2} alt="english bite" loading='lazy' />
            </div>
          </div>
        </div>
        <div className="section center button-wrapper">
          <BackToTopButton />
          <OtherProjectsButton />
        </div>
      </Container>
    </div>
  )
}

export default Digital