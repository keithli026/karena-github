import React from 'react'
import "./myStory.scss"
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contact from '../components/Contact';

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
  const myStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL + "/my_story/cloudy.jpg"})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div id="mystory">
      <div className='about' style={myStyle}>
        <div className='wrapper'>
          <div className='content'>
            <div className='title'>About me</div>
            <p>I am a creative person who with a background in <span>Multimedia Design</span>, experience in creating <span>digital</span>, <span>interactive graphics</span> and <span>ui/ux</span> design for people. I thrive in a collaborative environment and enjoy exploring new innovative ideas that combines the <span>problem-solving</span> aspect of design with deep empathy for the user.</p>
            <p>With 8 years of experience in the field. My passion for design and creativity has led me to develop a keen eye for details and strong understanding of principles of visual communication.</p>
            <p>My mission is to expand my digital briefcase of work by taking on new challenges and finding creative clever solutions.</p>
          </div>
        </div>
      </div>
      <div className='resume'>
        <Link to="/resume" title="resume" className='quicklink'>Resume.<img src={process.env.PUBLIC_URL + "/icons/arrow_pink.png"} alt="arrow" /></Link>
        <div className='wrapper'>
          <div className='image'>
            <img src={process.env.PUBLIC_URL + "/home/karena.png"} alt="karena" />
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
        <div className='wrapper'>
          <div className='title'>My Value</div>
          <Slider {...settings}>
            <div className='flexbox'>
              <img src={process.env.PUBLIC_URL + "/icons/value_1.svg"} alt="Curiosity"></img>
              <div className='value'>Curiosity</div>
              <p>Always start with "why" and understand context and user behaviour in their day to day life.</p>
            </div>
            <div className='flexbox'>
              <img src={process.env.PUBLIC_URL + "/icons/value_2.svg"} alt="Creation"></img>
              <div className='value'>Creation</div>
              <p>Be open-minded, creative in facilitating interesting conversation among people.</p>
            </div>
            <div className='flexbox'>
              <img src={process.env.PUBLIC_URL + "/icons/value_3.svg"} alt="Passion"></img>
              <div className='value'>Passion</div>
              <p>Keep learning something new, build empathy among people, and focus on value creation for society.</p>
            </div>
          </Slider>
          {/* <div className='flexbox_wrapper'>
            <div className='flexbox'>
              <img src={process.env.PUBLIC_URL + "/icons/value_1.svg"} alt="Curiosity"></img>
              <div className='value'>Curiosity</div>
              <p>Always start with "why" and understand context and user behaviour in their day to day life.</p>
            </div>
            <div className='flexbox'>
              <img src={process.env.PUBLIC_URL + "/icons/value_2.svg"} alt="Creation"></img>
              <div className='value'>Creation</div>
              <p>Be open-minded, creative in facilitating interesting conversation among people.</p>
            </div>
            <div className='flexbox'>
              <img src={process.env.PUBLIC_URL + "/icons/value_3.svg"} alt="Passion"></img>
              <div className='value'>Passion</div>
              <p>Be open-minded, creative in facilitating interesting conversation among people.</p>
            </div>
          </div> */}
        </div>
      </div>
      <Contact />
    </div>
  )
}

export default MyStory