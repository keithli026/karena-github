import React from 'react'
import { Link } from 'react-router-dom'
import "./home.scss"
const Home = () => {
  const myStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL + "/icons/mobile_little_icon.png"})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'repeat',
  };
  return (
    <>
      <div id="home">
        <div className="greeting">
          <div className='flexbox'>
            <div className='content'>
              <div className='title'>Hello there! <span>I’m Karena</span></div>
              <p className='intro'>A Multimedia Designer at EF who loves to creating digital experience for <span>people</span>.</p>
              <Link to="/my-story" className='btn'>About me</Link>
            </div>
            <div className='image'>
              <img src={process.env.PUBLIC_URL + "/home/karena.png"} alt="karena" />
            </div>
          </div>
        </div>
        <div className="slogan" style={myStyle}>
          <div className='wrapper'>
            <div className='title'>“Simple is Better”</div>
            <p>Through my career as a designer, I am keen to deliver a meaningful design for social good and make the world a better place.</p>
            <p><b>Here’s a few projects that I’d like to share.</b></p>
            <img src={process.env.PUBLIC_URL + '/icons/arrow.png'} alt="arrow" />
          </div>
        </div>
        <div className="projects">
          <div className='project'>
            <div className='image'>
              <img src={process.env.PUBLIC_URL + './home/rehome.png'} alt="RE-Home" />
            </div>
            <div className='content'>
              <div className='wrapper'>
                <div className='hashtag'>#BRANDING <span>#UI</span><span>#UXRESERCHER</span><span>#DESIGNER STRATEGY</span></div>
                <div className='title'>RE-Home</div>
                <p>Re-Home is a local animals adoption app that's help users easily to find the matched pet to adopt. Re-Home app strives to reduce the homeless dog numbers.They offer a high level flow to simplify the adoption process.</p>
                <Link to="/projects/re-home"><img src={process.env.PUBLIC_URL + './icons/arrow_black.png'} alt="RE-Home" /></Link>
              </div>
            </div>
          </div>
          <div className='project'>
            <div className='image'>
              <img src={process.env.PUBLIC_URL + './home/badge_design.png'} alt="Badge Design" />
            </div>
            <div className='content'>
              <div className='wrapper'>
                <div className='hashtag'>#BRANDING <span>#UI</span><span>#UXRESERCHER</span><span>#GRAPHIC</span></div>
                <div className='title'>Badge Design</div>
                <p>By offering badges as reward, its adds an element of challenge, competition, and achievement for users. This can motivate users to complete certain tasks.</p>
                <Link to="/projects/badge-design"><img src={process.env.PUBLIC_URL + './icons/arrow_black.png'} alt="Badge Design" /></Link>
              </div>
            </div>
          </div>
          <div className='project'>
            <div className='image'>
              <img src={process.env.PUBLIC_URL + './home/EF_SET.png'} alt="EF SET" />
            </div>
            <div className='content'>
              <div className='wrapper'>
                <div className='hashtag'>#BRANDING<span>#UI</span><span>#UX</span></div>
                <div className='title'>EF SET</div>
                <p>The EF Standard English Test (EF SET) is a free, online English test designed to meet the high technical standards as the other standardized tests in the field, such as the TOEFL or IELTS.</p>
                <Link to="/projects/ef-set"><img src={process.env.PUBLIC_URL + './icons/arrow_black.png'} alt="EF SET" /></Link>
              </div>
            </div>
          </div>
          <div className='project'>
            <div className='image'>
              <img src={process.env.PUBLIC_URL + './home/HULT.png'} alt="HULT" />
            </div>
            <div className='content'>
              <div className='wrapper'>
                <div className='hashtag'>#BRANDING<span>#WEBDESIGN</span><span>#UI</span><span>#UX</span><span>#LANDINGPAGE</span></div>
                <div className='title'>Landing Page / Web Design</div>
                <p>Plan to delivering top-notch quality UI/UX design for your Website, Landing page by using Figma and Adobe creative suite.</p>
                <p>Having usability and user experience in mind I will do brainstorming and research about your project to deliver attractively, user-friendly, and interactive UI designs.</p>
                <Link to="/projects/web-design"><img src={process.env.PUBLIC_URL + './icons/arrow_black.png'} alt="Web Design" /></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="contact">
          <div className='title'>Let's Talk!</div>
          <p>I'd love to chat about new opportunities or anything design related!</p>
          <Link to="/lets-talk" className='btn'>Contact me</Link>
        </div>
      </div>
    </>
  )
}

export default Home