import React from 'react'
import { Link } from 'react-router-dom'
import "./home.scss"

const Home = () => {
  return (
    <>
      <div id="home">
        <div id="greeting">
          <div className='flexbox'>
            <div className='content'>
              <div className='title'>Hello there! <span>I’m Karena</span></div>
              <div className='intro'>A Multimedia Designer at EF who loves to creating digital experience for <span>people</span>.</div>
              <Link to="/my-story" className='btn'>About me</Link>
            </div>
            <div className='image'>
              <img src={process.env.PUBLIC_URL + "/home/karena.png"} alt="karena" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home