import React, { useState, useEffect, useRef } from 'react'
import BackToTopButton from '../components/BackToTopButton'
import OtherProjectsButton from '../components/OtherProjectsButton'
import banner from "../assets/images/print/banner.png"
import bannerMobile from "../assets/images/print/banner.png"
import mooncake from "../assets/images/print/mooncake.jpg"
import pochacco from "../assets/images/print/pochacco.jpg"
import sanrio from "../assets/images/print/sanrio.jpeg"
import WWF from "../assets/images/print/WWF.jpeg"
import line from "../assets/images/print/line.jpeg"
import artboard from "../assets/images/print/Artboard_10.jpg"
import bottle from "../assets/images/print/bottle.jpg"
import ecoBento from "../assets/images/print/ecoBento.jpg"
import ecoCultery from "../assets/images/print/ecoCutlery.jpg"
import ecoPhotoChain3 from "../assets/images/print/ecoPhotoChain3.jpg"
import ecoStrawGif from "../assets/images/print/ecoStraw.gif"
import ecoStraw from "../assets/images/print/ecoStraw.jpg"
import ecoStrawWalk from "../assets/images/print/ecoStraw_Walk_for_nature.png"
import ecosCulterySet1 from "../assets/images/print/ecoCutlerySet_1.png"
import ecosCulterySet2 from "../assets/images/print/ecoCutlerySet_2.png"
import ecosStrawPKG from "../assets/images/print/ecoStrawPKG.png"
import carton1 from "../assets/images/print/carton_1.JPG"
import carton2 from "../assets/images/print/carton_2.JPG"
import print1 from "../assets/images/print/print-1.png"
import print2 from "../assets/images/print/print-2.png"
import print3 from "../assets/images/print/print-3.png"
import print4 from "../assets/images/print/print-4.png"
import print5 from "../assets/images/print/print-5.png"
import tableCalendar from "../assets/images/print/table_calendar.png"
import tableCalendar1 from "../assets/images/print/table_calendar_1.png"
import businessCard from "../assets/images/print/business_card.jpg"
import brochureENG from "../assets/images/print/brochureENG.jpg"
import brochure from "../assets/images/print/brochure.jpg"
import brochure2 from "../assets/images/print/brochure2.jpg"
import LPEvent from "../assets/images/print/LP_poster.jpg"
import calendar2 from "../assets/images/print/calendar_2018_2.jpg"
import calendar from "../assets/images/print/calendar_2018.jpg"
import calendar3 from "../assets/images/print/calendar_2018_3.jpg"
import recycleBag1 from "../assets/images/print/recycle_bag_1.png"
import recycleBag2 from "../assets/images/print/recycle_bag_2.png"
import recycleBag3 from "../assets/images/print/recycle_bag_3.png"
import recycleBag4 from "../assets/images/print/recycle_bag_4.png"
import leaflet from "../assets/images/print/FlyerSS2.jpg"
import folder from "../assets/images/print/folder.jpg"
import folderFront from "../assets/images/print/folder_front.jpg"
import folderBack from "../assets/images/print/folder_back.jpg"
import postcard from "../assets/images/print/Postcard.jpg"
import billboardTW from "../assets/images/print/TW_billboard.jpg"
import billboardTW2 from "../assets/images/print/TW_billboard_outline.jpg"
import billboardSS from "../assets/images/print/SS_billboard.png"
import billboardSS2 from "../assets/images/print/SS_billboard2.jpg"
import billboardKT from "../assets/images/print/KT_billboard.jpg"
import billboardKT2 from "../assets/images/print/KT_billboard_2.jpg"
import billboardKT3 from "../assets/images/print/KT_billboard_3.jpg"
import billboardKT4 from "../assets/images/print/KT_billboard_4.jpg"
import billboardYL from "../assets/images/print/YL_billboard.jpg"
import billboardYL2 from "../assets/images/print/YL_billboard_2.jpg"
import Container from 'react-bootstrap/Container'
import useIntersectionObserver from '@react-hook/intersection-observer'
import throttle from 'lodash.throttle'
import ReactGA from 'react-ga4'

const Print = () => {
  ReactGA.send({
    hitType: "pageview",
    page: "/",
    title: "Print"
  });

  const videoRef = useRef();
  const [isLoad, setIsLoad] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isIntersecting } = useIntersectionObserver(videoRef);
  const youtubeURL = "https://www.youtube.com/watch?v=WW99nah3q88";

  useEffect(() => {
    // if (isIntersecting && !isLoad) {
    //   setIsLoad(true);
    //   // console.log(isLoad, isIntersecting);
    // }
    const handleScroll = throttle(() => {
      setIsScrolled(true);
    }, 250);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }

  }, [isIntersecting, isLoad, isScrolled]);

  return (
    <div id='print' className='project'>
      {/* <div className='banner'>
        <div className='image'>
          <img src={banner} alt="Print banner" className='desktop' />
          <img src={bannerMobile} alt="Print banner" className='mobile' />
        </div>
        <div className='title'>
          <div className='name'>PRINT</div>
          <div className='summary'>Specialize in the creation of visual designs for printing such as brochures, flyers, business cards, billboard and a range of other printable marketing materials.</div>
        </div>
      </div> */}
      <Container>
        <div className={`info section center ${isScrolled ? "scrolled" : null}`}>
          {/* <h2>Little Red Book Landing page</h2> */}
          <h2 className='name'>PRINT</h2>
          <div className='summary'>Specialize in the creation of visual designs for printing such as brochures, flyers, business cards, billboard and a range of other printable marketing materials.</div>
        </div>
        <div className='section center'>
          <h2>Man Lok Yuen - Transforming mooncake box design</h2>
          <div className='description' style={{ marginBottom: "50px" }}>
            <p>Used a matte black box with intricate gold floral cutouts on the lid and the sides of the box can fold down and lock into place, transforms into a table for serving or displaying them.</p>
            <p>This innovative design not only enhances the unboxing experience bus also adds a functional element to the mooncake presentation.</p>
          </div>
          <img src={mooncake} alt="mooncake" loading='lazy' style={{ marginBottom: "100px" }} />
          <h2>Sanrio - Standbox Photo Frame and backdrop design</h2>
          <div className='description' style={{ marginBottom: "50px" }}>This project focuses on creating a cohesive and visually striking design for a standbox photo frame and an accompanying backdrop. The design aims to enhance the presentation for photographs while providing a stylish and functional display.</div>
          <img src={sanrio} alt="sanrio" loading='lazy' style={{ marginBottom: "0px", width: "100px" }} />
          <img src={pochacco} alt="pochacco" loading='lazy' />
        </div>
        <div className='section center'>
          <div className='flexbox' style={{ justifyContent: "center" }}>
            <img src={WWF} alt="WWF" loading='lazy' style={{ width: "15%" }} />
            <img src={line} alt="line" loading='lazy' style={{ width: "35%" }} />
          </div>
          <a href={youtubeURL} target="_blank" rel="noopener noreferrer">《米埔深度行 with LINE FRIENDS》</a>
          <div class="flexbox">
            <img src={carton2} alt="carton 2" loading='lazy' style={{ width: "69%" }} />
            <img src={carton1} alt="carton 1" loading='lazy' style={{ width: "29%" }} />
            <img src={ecoStrawWalk} alt="ecoStrawWalk" loading='lazy' style={{ width: "58%" }} />
            <img src={ecosStrawPKG} alt="ecosStrawPKG" loading='lazy' style={{ width: "40%" }} />
            <img src={ecosCulterySet1} alt="ecosCulterySet1" loading='lazy' style={{ width: "45%" }} />
            <img src={ecosCulterySet2} alt="ecosCulterySet2" loading='lazy' style={{ width: "55%" }} />
          </div>

          <img src={artboard} alt="artboard" loading='lazy' />
          <div class="flexbox custom">
            <img src={ecoStraw} alt="ecoStraw" loading='lazy' />
            <img src={ecoStrawGif} alt="ecoStraw" loading='lazy' />
            <img src={bottle} alt="bottle" loading='lazy' />
            <img src={ecoPhotoChain3} alt="ecoPhotoChain" loading='lazy' />
            <img src={ecoCultery} alt="ecoCultery" loading='lazy' />
            <img src={ecoBento} alt="ecoBento" loading='lazy' />
          </div>
        </div>
        <div className='section center'>
          <img src={print1} alt="Print" loading='lazy' />
          <img src={print2} alt="Print" loading='lazy' style={{ width: "50%" }} />
          <img src={print3} alt="Print" loading='lazy' style={{ width: "50%" }} />
          <img src={print4} alt="Print" loading='lazy' />
          <img src={print5} alt="Print" loading='lazy' />
        </div>
        <div className='section center'>
          <h2>Calendar</h2>
          <div className='description'>I was responsible for choosing images, creating layouts, looks, and feels that match the guidelines, and preparing digital output files for the print shop.</div>
          <img src={tableCalendar} alt="Calendar" loading='lazy' />
          <img src={tableCalendar1} alt="Calendar" loading='lazy' />
          {/* <div className='flexbox'>
            <img src={calendar} alt="Calendar" loading='lazy' />
            <img src={calendar2} alt="Calendar" loading='lazy' />
          </div>
          <img src={calendar3} alt="Calendar" loading='lazy' /> */}
        </div>
        <div className='section center'>
          <h2>Recycle Bag</h2>
          <div className='description'>Creative Recycling Bag Design: "Don't let the cat out of the bag" means not revealing or disclosing something that is supposed to be a secret.</div>
          <img src={recycleBag1} alt="Recycle Bag" loading='lazy' />
          <img src={recycleBag2} alt="Recycle Bag" loading='lazy' />
          {/* <div className='flexbox'>
            <img src={recycleBag3} alt="Recycle Bag" loading='lazy' />
            <img src={recycleBag4} alt="Recycle Bag" loading='lazy' />
          </div> */}
        </div>
        <div className='section center'>
          <h2>Brochure</h2>
          <div className='description'>I was responsible for creating layout designs that ensured a balanced composition, with well-balanced page text and images that created a natural flow for the reader to follow.</div>
          <img src={brochureENG} alt="Brochure" loading='lazy' />
          <img src={brochure} alt="Brochure" loading='lazy' />
          <img src={brochure2} alt="Brochure" loading='lazy' />
        </div>
        <div className='section center'>
          <h2>Life Club event poster</h2>
          <div className='description'>Developed posters with an overall look and feel, selected appropriate images, and gathered all necessary information from the marketing team to create weekly center posters.</div>
          <img src={LPEvent} alt="Life Club event poster" loading='lazy' />
        </div>
        <div className='section center'>
          <h2>Business card</h2>
          <div className='description'>Followed the guidelines to create business cards for all teachers and staff members.</div>
          <img src={businessCard} alt="Business card" loading='lazy' />
        </div>

        <div className='section center'>
          <h2>Leaflet</h2>
          <div className='description'>Designed a leaflet for different promotions and ensure that the style aligns with the brand.</div>
          <img src={leaflet} alt="Leaflet" loading='lazy' style={{ marginBottom: "100px" }} />
          <img src={folder} alt="Folder" loading='lazy' />
          <div className='flexbox'>
            <img src={folderFront} alt="Folder front" loading='lazy' />
            <img src={folderBack} alt="Folder back" loading='lazy' />
          </div>
        </div>
        <div className='section center'>
          {/* <h2>Folder & postcard design</h2>
          <img src={folder} alt="Folder" loading='lazy' />
          <div className='flexbox'>
            <img src={folderFront} alt="Folder front" loading='lazy' />
            <img src={folderBack} alt="Folder back" loading='lazy' />
          </div> */}
          <img src={postcard} alt="Postcard" loading='lazy' />
        </div>
        <div className='section center'>
          <h2>Billboard</h2>
          <div className='description'>Took responsibility for creating short advertising messages that were easily readable and effectively delivered the key message to the audience.</div>
          <img src={billboardTW} alt="Billboard in Taiwan" loading='lazy' />
          <img src={billboardSS} alt="Billboard in Sheung Shui" loading='lazy' />
          <img src={billboardYL} alt="Billboard in Yuen Long" loading='lazy' />
        </div>
        {/* <div className='section flexbox custom'>
          <img src={billboardKT} alt="Billboard in Kung Tong" loading='lazy' />
          <div className='vert'>
            <img src={billboardKT2} alt="Billboard in Kung Tong" loading='lazy' />
            <img src={billboardKT3} alt="Billboard in Kung Tong" loading='lazy' />
            <img src={billboardKT4} alt="Billboard in Kung Tong" loading='lazy' />
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

export default Print