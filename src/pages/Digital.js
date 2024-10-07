import React, { useState, useEffect, useRef } from 'react'
import BackToTopButton from '../components/BackToTopButton'
import OtherProjectsButton from '../components/OtherProjectsButton'
import banner from "../assets/images/digital/banner.png"
import bannerMobile from "../assets/images/digital/XHS_LP_2.png"
import blueCoverage1 from "../assets/images/digital/blue_coverage_1.jpg"
import blueCoverage2 from "../assets/images/digital/blue_coverage_2.jpg"
import blueCoverage3 from "../assets/images/digital/blue_coverage_3.jpg"
import bubbly1 from "../assets/images/digital/bubbly_1.jpg"
import bubbly2 from "../assets/images/digital/bubbly_2.jpg"
import yellowWater1 from "../assets/images/digital/yellow_water_1.jpg"
import yellowWater2 from "../assets/images/digital/yellow_water_2.jpg"
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
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
// import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";


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
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const photos = [
    { src: blueCoverage1, title: "Blue coverage & Pi-recovery base", description: "" },
    { src: blueCoverage2, title: "Blue coverage & Pi-recovery base", description: "" },
    { src: blueCoverage3, title: "Blue coverage & Pi-recovery base", description: "" },
    { src: bubbly1, title: "Bubbly skin complexion", description: "" },
    { src: bubbly2, title: "Bubbly skin complexion", description: "" },
    { src: yellowWater1, title: "Yellow water", description: "" },
    { src: yellowWater2, title: "Yellow water", description: "" },
    // { src: filter1, title: "Filter", description: "" },
    // { src: filter2, title: "Filter", description: "" },
    // { src: filter3, title: "Filter", description: "" },
    // { src: filter4, title: "Filter", description: "" },
    // { src: bannerMobile, title: "Xiaohongshu home page", description: "" },
    // { src: summer2, title: "Summer", description: "" },
    // { src: summer1, title: "Summer", description: "" },
    // { src: color, title: "Color", description: "" },
    // { src: igFeed, title: "Social media feeds", description: "" },
    // { src: XHSPost, title: "Xiaohongshu post", description: "" },
    // { src: igPost, title: "Social media feeds", description: "" },
    // { src: googleAd1, title: "Google ad", description: "" },
    // { src: googleAd2, title: "Google ad", description: "" },
    // { src: englishBite1, title: "English bite", description: "" },
    // { src: englishBite3, title: "English bite", description: "" },
    // { src: englishBite2, title: "English bite", description: "" }
  ];

  useEffect(() => {
    // console.log("index: ", index, open);
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

  }, [isIntersecting, isLoad, isScrolled, index, open]);

  return (
    <div id='digital' className='project'>
      {/* <Lightbox
        slides={photos}
        index={index}
        // on={{ view: ({ index: currentIndex }) => setIndex(currentIndex) }}
        open={open}
        close={() => setOpen(false)}
        plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Zoom]}
      /> */}
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
          <video controls playsInline preload="none" poster={XHS1} style={{ width: "33.33%", marginBottom: "200px" }}>
            <source src={video1} type="video/mp4" />
            <img src={XHS1} alt="video" loading="lazy" title="Your browser does not support the video tag." />
          </video>
          <video controls playsInline preload="none" poster={XHS2} style={{ width: "33.33%", marginBottom: "200px" }}>
            <source src={video2} type="video/mp4" />
            <img src={XHS2} alt="video" loading="lazy" title="Your browser does not support the video tag." />
          </video>
          <video controls playsInline preload="none" poster={XHS3} style={{ width: "33.33%", marginBottom: "200px" }}>
            <source src={video3} type="video/mp4" />
            <img src={XHS3} alt="video" loading="lazy" title="Your browser does not support the video tag." />
          </video>
          <img src={blueCoverage1} alt="blue coverage" loading="lazy" style={{ width: "33.33%", marginBottom: "100px" }} onClick={() => { setOpen(true); setIndex(0) }} />
          <img src={blueCoverage2} alt="blue coverage" loading="lazy" style={{ width: "33.33%", marginBottom: "100px" }} onClick={() => { setOpen(true); setIndex(1) }} />
          <img src={blueCoverage3} alt="blue coverage" loading="lazy" style={{ width: "33.33%", marginBottom: "100px" }} onClick={() => { setOpen(true); setIndex(2) }} />
          <img src={bubbly1} alt="bubbly skin complexion" loading="lazy" style={{ width: "50%", marginBottom: "100px" }} onClick={() => { setOpen(true); setIndex(3) }} />
          <img src={bubbly2} alt="bubbly skin complexion" loading="lazy" style={{ width: "50%", marginBottom: "100px" }} onClick={() => { setOpen(true); setIndex(4) }} />
          <img src={yellowWater1} alt="yellow water" loading="lazy" style={{ width: "50%", marginBottom: "200px" }} onClick={() => { setOpen(true); setIndex(5) }} />
          <img src={yellowWater2} alt="yellow water" loading="lazy" style={{ width: "50%", marginBottom: "200px" }} onClick={() => { setOpen(true); setIndex(6) }} />

          <img src={filter1} alt="filter" loading="lazy"  />
          <img src={filter2} alt="filter" loading="lazy" style={{ width: "50%", marginBottom: "100px" }} />
          <img src={filter3} alt="filter" loading="lazy" style={{ width: "50%", marginBottom: "100px" }}  />
          <img src={filter4} alt="filter" loading="lazy"  />
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
          <img src={bannerMobile} alt="Xiaohongshu home page" loading='lazy' style={{ marginBottom: "200px" }} />
          <img src={summer2} alt="Summer" loading='lazy' style={{ marginBottom: "20px" }} />
          <img src={summer1} alt="Summer" loading='lazy' style={{ marginBottom: "20px" }}  />
          <img src={color} alt="Color" loading='lazy' style={{ marginBottom: "200px" }}  />
          <img src={igFeed} alt="Social media feeds" loading='lazy' style={{ marginBottom: "200px" }} />
          <img src={XHSPost} alt="Xiaohongshu post" loading='lazy' style={{ marginBottom: "200px" }}  />
          <img src={igPost} alt="Social media feeds" loading='lazy' />
        </div>

        <div className="section center">
          {/* <h2>Google Ads gif banner and Landing page</h2> */}
          <div className='flexbox'>
            <div className='box'>
              <div className='wrapper'>
                <img src={googleAd1} alt="english bite gif" loading='lazy'  />
                <img src={googleAd2} alt="english bite gif" loading='lazy'  />
              </div>
              <img src={englishBite1} alt="english bite" loading='lazy'  />
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