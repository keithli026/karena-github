import React from 'react'
import { Link } from 'react-router-dom'
import "./efSet.scss"
import BackButton from '../components/BackButton'

const EFSet = () => {
  return (
    <div id='ef_set'>
      <div className='banner'>
        <div className='image'><img src={process.env.PUBLIC_URL + '/ef_set/banner.png'} alt="EF Set test" /></div>
        <div className='title'>EF SET TESTS</div>
        <div className='content'>
          <div className='keypoint'>
            <div>MY ROLE: <span>GRAPHIC DESIGN 丨UI DESIGN | BRANDING</span></div>
            <div>TIMELINE: <span>8 WEEKS, 2014-2015</span></div>
          </div>
          <div className='icons'>
            <img src={process.env.PUBLIC_URL + '/icons/XD.png'} alt="xd icon" />
            <img src={process.env.PUBLIC_URL + '/icons/PS.png'} alt="ps icon" />
            <img src={process.env.PUBLIC_URL + '/icons/AI.png'} alt="ai icon" />
          </div>
        </div>
      </div>
      <div className='wrapper'>
        <div className='section'>
          <h2>Brief</h2>
          <p>The EF Standard English Test (EF SET) is an English standard test for non-native English speakers. It is a product of EF Education First, a global language training company​.</p>
          <p>With the EF Standard English Test, EF set out to challenge the status quo - to build a testing solution that not only provides reliable measurement, but is also affordable, simple to use, and always accessible. It is the world's first completely free standardized English test for learners of all levels, from beginner to advanced.</p>
          <p>I was given tasks to understand the exciting brand guidelines and ensure the landing page design aligns with overall brand identity. Determine the content that needs to br included, such as headline, subheadings, key message, call-to-action buttons and supporting visuals.</p>
          <h2>Problem</h2>
          <p>Through user research, we discovered the problems of confusing design can overwhelm visitor and make it difficult for them to understand the purpose of the page and if landing page lacks a clear and compelling call-to- action, visitors may ne unsure of what action to take next.</p>
          <h2>Goal</h2>
          <ol>
            <li>Create the landing page aligns with thr overall brand identity in terms of colours, typography and visual style </li>
            <li>Ensure that visitors can quickly understand the purpose of the landing page and navigate through easily</li>
            <li>Create a prominent and visually appealing CTA that clearly communicates thr desired action</li>
          </ol>
        </div>
      </div>
      <div className='section gallery'>
        <div className='image'>
          <img src={process.env.PUBLIC_URL + '/ef_set/image_1.webp'} alt="EF Set test" />
          <BackButton /> 
        </div>
        <img src={process.env.PUBLIC_URL + '/ef_set/image_2.webp'} alt="EF Set test" />
        <img src={process.env.PUBLIC_URL + '/ef_set/image_3.webp'} alt="EF Set test" />
        <img src={process.env.PUBLIC_URL + '/ef_set/image_4.webp'} alt="EF Set test" />
        <img src={process.env.PUBLIC_URL + '/ef_set/image_5.webp'} alt="EF Set test" />
      </div>
      <div className='wrapper'>
        <div className='section'>
          <div className='flexbox'>
            <div className='image'><img src={process.env.PUBLIC_URL + '/ef_set/result_1.webp'} alt="EF Set test" /></div>
            <div className='image'><img src={process.env.PUBLIC_URL + '/ef_set/result_2.webp'} alt="EF Set test" /></div>
          </div>
        </div>
      </div>
      <div className='bg section'>
        <div className='wrapper'>
          <img src={process.env.PUBLIC_URL + '/ef_set/mobile.webp'} alt="EF Set test" />
        </div>
      </div>
      <div className="wrapper">
        <div className='section center'>
          <Link to="/projects" className='btn'>Other projects</Link>
        </div>
      </div>
    </div>
  )
}

export default EFSet