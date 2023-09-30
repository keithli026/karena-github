import React from 'react'
import { Link } from 'react-router-dom'
import "./brandDesign.scss"

const BrandDesign = () => {
  return (
    <div id='brand_design'>
      <div className='banner'>
        <div className='image'><img src={process.env.PUBLIC_URL + '/brand_design/image_2.jpg'} alt="Brand identity design" /></div>
        <div className='title'>Brand Identity Design</div>
        <div className='content'>
          <div className='keypoint'>
            <div>MY ROLE: <span>BRANDING丨MEDIA DESIGN 丨PHOTOGRAPHY</span></div>
            <div>TIMELINE: <span>3 WEEKS, 2022</span></div>
          </div>
          <div className='icons'>
            <img src={process.env.PUBLIC_URL + '/icons/PS.png'} alt="ps icon" />
            <img src={process.env.PUBLIC_URL + '/icons/AI.png'} alt="ai icon" />
          </div>
        </div>
      </div>
      <div className='wrapper'>
        <div className='section'>
          <h2>Brief</h2>
          <p>Pocina meal replacement shakes are a popular type of meal replacement that comes in the form of a drink. They are made from protein powder, vitamins, and minerals, and are designed to provide a balanced and nutritious alternative to a traditional meal.</p>
          <h2>Problem</h2>
          <p>To be filled</p>
          <h2>Goal</h2>
          <ol>
            <li>To be filled</li>
            <li>To be filled</li>
          </ol>
        </div>
        <div className='section center'>
          <img src={process.env.PUBLIC_URL + '/brand_design/color_4.jpg'} alt="Four colors" />
          <img src={process.env.PUBLIC_URL + '/brand_design/gt.png'} alt="Green powder" />
          <img src={process.env.PUBLIC_URL + '/brand_design/combination.png'} alt="Combination" />
        </div>
        <div className='section flexbox'>
          <div className='image'><img src={process.env.PUBLIC_URL + '/brand_design/chocolate.png'} alt="Chocolate bag" /></div>
          <div className='image'><img src={process.env.PUBLIC_URL + '/brand_design/coco_powder.jpg'} alt="Chocolate powder" /></div>
          <div className='image'><img src={process.env.PUBLIC_URL + '/brand_design/green-tea.png'} alt="Green tea bag" /></div>
          <div className='image'><img src={process.env.PUBLIC_URL + '/brand_design/green_powder.jpg'} alt="Green tea powder" /></div>
        </div>
        <div className='section flexbox three'>
          <div className='image'><img src={process.env.PUBLIC_URL + '/brand_design/about.jpg'} alt="About" /></div>
          <div className='image'><img src={process.env.PUBLIC_URL + '/brand_design/taro.jpg'} alt="Taro" /></div>
          <div className='image'><img src={process.env.PUBLIC_URL + '/brand_design/powder.jpg'} alt="Powder" /></div>
        </div>
      </div>


      {/* <div className='bg'>
        <div className='wrapper'>
          <img src={process.env.PUBLIC_URL + '/brand_design/badge_40.png'} alt="Badge 40" />
          <img src={process.env.PUBLIC_URL + '/brand_design/badge_60.png'} alt="Badge 60" />
          <img src={process.env.PUBLIC_URL + '/brand_design/badge_30.png'} alt="Badge 30" />
          <img src={process.env.PUBLIC_URL + '/brand_design/badge_50.png'} alt="Badge 50" />
          <img src={process.env.PUBLIC_URL + '/brand_design/badge_70.png'} alt="Badge 70" />
          <img src={process.env.PUBLIC_URL + '/brand_design/badge_on_phone.png'} alt="badge on mobile" />
        </div>
        <div className='section'>
          <div className='image'><img src={process.env.PUBLIC_URL + '/brand_design/badge_design_1.png'} alt="badge design" /></div>
        </div>
        <div className='section'>
          <div className='image'><img src={process.env.PUBLIC_URL + '/brand_design/badge_design_2.png'} alt="badge design" /></div>
        </div>
        <div className='wrapper'>
          <img src={process.env.PUBLIC_URL + '/brand_design/award.png'} alt="award page" />
          <div className="center">
            <Link to="/lets-talk" className='btn'>Other projects</Link>
          </div>
        </div>
      </div> */}

    </div>
  )
}

export default BrandDesign