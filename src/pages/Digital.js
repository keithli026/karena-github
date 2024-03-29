import React, { useState, useEffect, useRef } from 'react'
import BackToTopButton from '../components/BackToTopButton'
import OtherProjectsButton from '../components/OtherProjectsButton'
import banner from "../assets/images/digital/banner.png"
import bannerMobile from "../assets/images/digital/XHS_LP_2.png"
import igFeed from "../assets/images/digital/igfeed.jpg"
import XHSPost from "../assets/images/digital/XHSpost.jpg"
import summer1 from "../assets/images/digital/summer_1.png"
import summer2 from "../assets/images/digital/summer_2.png"
import color from "../assets/images/digital/colour_2.png"
import googleAd1 from "../assets/images/digital/google_ad1.GIF"
import googleAd2 from "../assets/images/digital/google_ad2.GIF"
import englishBite1 from "../assets/images/digital/englishBite1.jpg"
import englishBite2 from "../assets/images/digital/englishBite2.jpg"
import englishBite3 from "../assets/images/digital/englishBite3.jpg"
import happyWinterGif from "../assets/images/digital/happy_winter.gif"
import spirit from "../assets/images/digital/spirit.png"
import bucketlistGif from "../assets/images/digital/bucket_list_for_fb_ig.gif"
import phoneGif from "../assets/images/digital/phone_wheel_of_teachers.gif"
import Container from 'react-bootstrap/Container'
import useIntersectionObserver from '@react-hook/intersection-observer'
import ScrollClassAdder from '../components/ScrollClassAdder'
import throttle from 'lodash.throttle'

const Digital = () => {
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
        <div id="info" className={`section center ${isScrolled ? "scrolled" : null}`}>
          {/* <h2>Little Red Book Landing page</h2> */}
          <h2 className='name'>DIGITAL</h2>
          <div className='summary'>Creates, manages, and produces digital design solutions for a variety of uses: websites, product graphics, edm, landing page, different social media platform (Facebook, Instagram, Little Red Book) , brand campaigns and short video editing.</div>
          <img src={bannerMobile} alt="Little Red Book Landing page" loading='lazy' id="XHS_landing" />
        </div>
        <div className="section center">
          {/* <h2>2024<br />Social media</h2> */}
          <img src={igFeed} alt="Social media feeds" loading='lazy' id="ig_feed" />
          <img src={XHSPost} alt="Xiaohongshu post" loading='lazy' />
        </div>
        <div className="section center">
          <img src={summer2} alt="Summer" loading='lazy' className='summer' />
          <img src={summer1} alt="Summer" loading='lazy' className='summer' />
          <img src={color} alt="Color" loading='lazy' />
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
        <div className="section center">
          <img src={happyWinterGif} alt="happy winter" loading="lazy" style={{width: "600px"}} />
        </div>
        <div className="section center">
          <img src={spirit} alt="spirit" loading="lazy" style={{width: "600px"}} />
        </div>
        {/* <div className="section center">
          <div className='phone'>
            <img src={bucketlistGif} alt="bucket list" loading="lazy" />
            <img src={phoneGif} alt="phone wheel of teacher" loading="lazy" />
          </div>
        </div> */}
        <div className="section center button-wrapper">
          <BackToTopButton />
          <OtherProjectsButton />
        </div>
      </Container>
    </div>
  )
}

export default Digital