import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useLocation } from 'react-router-dom'
import { useRef } from 'react';
import karena from "../assets/images/home/karena.png"
import arrowPink from "../assets/images/icons/arrow_pink.png"
import value1 from "../assets/images/icons/value_1.svg"
import value2 from "../assets/images/icons/value_2.svg"
import value3 from "../assets/images/icons/value_3.svg"
import Button from 'react-bootstrap/Button';

const MyStory = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };
  const { state } = useLocation();
  const { targetId } = state || {};
  const infoRef = useRef(null);
  // console.log(state, targetId, infoRef.current);

  useEffect(() => {
    const el = document.getElementById(targetId);
    if (el) {
      // console.log("i am going to scroll", el);
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [targetId])
  return (
    <div id="mystory">
      <div className='about'>
        <div className='wrapper container'>
          <div className='content'>
            <div className='title'>About me</div>
            <p>I am a creative person who with a background in <span>Multimedia Design</span>, experience in creating <span>digital</span>, <span>interactive graphics</span> and <span>ui/ux</span> design for people. I thrive in a collaborative environment and enjoy exploring new innovative ideas that combines the <span>problem-solving</span> aspect of design with deep empathy for the user.</p>
            <p>With 8 years of experience in the field. My passion for design and creativity has led me to develop a keen eye for details and strong understanding of principles of visual communication.</p>
            <p>My mission is to expand my digital briefcase of work by taking on new challenges and finding creative clever solutions.</p>
          </div>
        </div>
      </div>
      <div className='resume container'>
        <Link to="/resume" title="resume" className='quicklink'>Resume.<img src={arrowPink} alt="arrow" loading="lazy"/></Link>
        <div className='wrapper' id="info" ref={infoRef}>
          <div className='image_wrapper'>
            <img src={karena} alt="karena" loading="lazy"/>
          </div>
          <div className='content'>
            <div className='name'>Karena Li</div>
            <div className='position'>Multimedia Designer</div>
            <div className='email'><a href="mailto: iamkarena66@gmail.com">iamkarena66@gmail.com</a></div>
            <div className='tel'><a href="tel:+85256279890">56279890</a></div>
          </div>
        </div>
      </div>
      <div className='my_value'>
        <div className='wrapper container'>
          <div className='title'>My Value</div>
          <Slider {...settings}>
            <div className='flexbox'>
              <img src={value1} alt="Curiosity" loading="lazy"/>
              <div className='value'>Curiosity</div>
              <p>Always start with "why" and understand context and user behaviour in their day to day life.</p>
            </div>
            <div className='flexbox'>
              <img src={value2} alt="Creation" loading="lazy"/>
              <div className='value'>Creation</div>
              <p>Be open-minded, creative in facilitating interesting conversation among people.</p>
            </div>
            <div className='flexbox'>
              <img src={value3} alt="Passion" loading="lazy"/>
              <div className='value'>Passion</div>
              <p>Keep learning something new, build empathy among people, and focus on value creation for society.</p>
            </div>
          </Slider>
        </div>
      </div>

      <div className="contact">
        <div className='title'>Let's Talk!</div>
        <p>I'd love to chat about new opportunities or anything design related!</p>
        <Button variant='light' onClick={() => infoRef.current.scrollIntoView({ behavior: 'smooth' })}>Contact me</Button>
        {/* <span className='btn' onClick={() => infoRef.current.scrollIntoView({ behavior: 'smooth' })}>Contact me</span> */}
      </div>
    </div>
  )
};

export default MyStory