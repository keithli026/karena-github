import React, { useState, useEffect, useRef } from 'react'
import OtherProjectsButton from '../components/OtherProjectsButton'
import banner from "../assets/images/digital/banner.png"
import bannerMobile from "../assets/images/digital/banner_mobile.jpg"
import igFeed from "../assets/images/digital/igfeed.jpg"
import XHSPost from "../assets/images/digital/XHSpost.jpg"
import googleAd1 from "../assets/images/digital/google_ad1.GIF"
import googleAd2 from "../assets/images/digital/google_ad2.GIF"
import englishBite1 from "../assets/images/digital/englishBite1.jpg"
import englishBite2 from "../assets/images/digital/englishBite2.jpg"
import englishBite3 from "../assets/images/digital/englishBite3.jpg"
import happyWinter from "../assets/images/digital/happy_winter.png"
import happyWinterGif from "../assets/images/digital/happy_winter.gif"
import happyWinterVideo from "../assets/videos/digital/Office_WinterSolstice_V2.mp4"
import bucketList from "../assets/images/digital/bucket_list.png"
import bucketlistGif from "../assets/images/digital/bucket_list_for_fb_ig.gif"
import bucketListVideo from "../assets/videos/digital/bucket_list_for_fb_ig.mp4"
import phone from "../assets/images/digital/phone_wheel_of_teachers.png"
import phoneGif from "../assets/images/digital/phone_wheel_of_teachers.gif"
import Container from 'react-bootstrap/Container'
import useIntersectionObserver from '@react-hook/intersection-observer'

const Digital = () => {
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
    <div id='digital' className='project'>
      <div className='banner'>
        <div className='image'>
          <img src={banner} alt="Digital banner" className='desktop' />
          <img src={bannerMobile} alt="Digital banner" className='mobile' />
        </div>
        <div className='title'>
          <div className='name'>Digital</div>
          <div className='summary'>Creates, manages, and produces digital design solutions for a variety of uses: websites, product graphics, edm, landing page, different social media platform (Facebook, Instagram, Little Red Book) , brand campaigns and short video editing.</div>
        </div>
      </div>
      <Container>
        <div className="section center">
          <h2>Social media feeds</h2>
          <img src={igFeed} alt="Social media feeds" loading='lazy' />
        </div>
        <div className="section center">
          <h2>Xiaohongshu post</h2>
          <img src={XHSPost} alt="Xiaohongshu post" loading='lazy' />
        </div>
        <div className="section center">
          <h2>Google Ads gif banner and Landing page</h2>
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
          <h2>Little Red Book Landing page</h2>
          <img src={bannerMobile} alt="Little Red Book Landing page" loading='lazy' />
        </div>
        <div className="section center">
          <h2>Gif poster - Happy Winter solstice</h2>
          {/* <img src={happyWinter} alt="Happy Winter solstice" loading='lazy' /> */}
          {/* <img src={happyWinterGif} alt="happy winter" loading="lazy" /> */}
          <div className='video' ref={videoRef}>
            <video autoPlay loop muted playsInline>
              <source src={happyWinterVideo} type="video/mp4" />
              <img src={happyWinter} alt="happy winter" loading="lazy" title="Your browser does not support the video tag." />
            </video>
          </div>
        </div>
        <div className="section center">
          <h2>Social media CNY creative</h2>
          {/* <div className='video' ref={videoRef}>
            <video autoPlay loop muted playsInline>
              <source src={bucketListVideo} type="video/mp4" />
              <img src={bucketList} alt="bucket list" loading="lazy" title="Your browser does not support the video tag." />
            </video>
          </div> */}
          <div className='phone'>
            <img src={bucketlistGif} alt="bucket list" loading="lazy" />
            <img src={phoneGif} alt="phone wheel of teacher" loading="lazy" />
          </div>
        </div>
        <div className="section center">
          <OtherProjectsButton />
        </div>
      </Container>
    </div>
  )
}

export default Digital