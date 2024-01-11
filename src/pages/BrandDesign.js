import React from 'react'
import "./brandDesign.scss"
// import BackButton from '../components/BackButton'
import OtherProjectsButton from '../components/OtherProjectsButton'
import banner from "../assets/images/brand_design/banner.png"
import AEIcon from "../assets/images/icons/AE.png"
import PSIcon from "../assets/images/icons/PS.png"
import AIIcon from "../assets/images/icons/AI.png"
import color4 from "../assets/images/brand_design/color_4.jpg"
import greenPowder from "../assets/images/brand_design/gt.png"
import pocina from "../assets/images/brand_design/pocina.png"
import combination from "../assets/images/brand_design/combination.png"
import chocolatePowder from "../assets/images/brand_design/coco_powder.jpg"
import chocolateBag from "../assets/images/brand_design/chocolate_package.jpg"
import greenTeaBag from "../assets/images/brand_design/green_tea_package.jpg"
import greenTeaPowder from "../assets/images/brand_design/green_powder.jpg"
import powder from "../assets/images/brand_design/powder.jpg"
import about from "../assets/images/brand_design/about.jpg"
import taro from "../assets/images/brand_design/taro.jpg"
import nightRoutine from "../assets/images/brand_design/night.jpg"
import about2 from "../assets/images/brand_design/about_2.jpg"
import dayRoutine from "../assets/images/brand_design/day.jpg"
import facesss from "../assets/images/brand_design/facesss.jpg"
import dayNightRoutine from "../assets/images/brand_design/day_and_night.png"
import tea from "../assets/images/brand_design/tea.png"
import diet from "../assets/images/brand_design/diet.png"
import taste from "../assets/images/brand_design/taste.jpg"

const BrandDesign = () => {
  return (
    <div id='brand_design'>
      <div className='banner'>
        <div className='image'><img src={banner} alt="Brand identity design banner" /></div>
        <div className='title'>Brand Identity Design</div>
        <div className='content'>
          <div className='keypoint'>
            <div>MY ROLE: <span>BRANDING丨<span>MEDIA DESIGN</span> 丨<span>PHOTOGRAPHY</span></span></div>
            <div>TIMELINE: <span>3 WEEKS, 2022</span></div>
          </div>
          <div className='icons'>
            <img src={AEIcon} alt="ae icon" />
            <img src={PSIcon} alt="ps icon" />
            <img src={AIIcon} alt="ai icon" />
          </div>
        </div>
      </div>
      <div className='wrapper'>
        <div className='section'>
          <h2>Brief</h2>
          <p>Pocina meal replacement shakes are a popular type of meal replacement that comes in the form of a drink. They are made from protein powder, vitamins, and minerals, and are designed to provide a balanced and nutritious alternative to a traditional meal.</p>
          <h2>Problem</h2>
          <p>How might we effectively increase brand awareness and young tagetes audience.</p>
          <h2>Goal</h2>
          <ol>
            <li>Improved brand awareness by creating engaging and shareable content.</li>
            <li>Using eye-catching design elements and photograph.</li>
            <li>Creating motion graphics for social media to get target audience attention.</li>
          </ol>
        </div>
        <div className='section center'>
          {/* <BackButton /> */}
          <img src={color4} alt="Four colors" loading="lazy"/>
          <div className='ref'>
            <img src={greenPowder} alt="Green powder" loading="lazy"/>
            <img src={pocina} alt="POCINA" className='cover' loading="lazy"/>
          </div>
          <img src={combination} alt="Combination" loading="lazy"/>
        </div>
        <div className='section flexbox two'>
          <div className='image'><img src={chocolatePowder} alt="Chocolate powder" loading="lazy"/></div>
          <div className='image'><img src={chocolateBag} alt="Chocolate bag" loading="lazy"/></div>    
          <div className='image'><img src={greenTeaBag} alt="Green tea bag" loading="lazy"/></div>
          <div className='image'><img src={greenTeaPowder} alt="Green tea powder" loading="lazy"/></div>
        </div>
        <div className='section flexbox three'>
          <div className='image'><img src={powder} alt="Powder" loading="lazy"/></div>
          <div className='image'><img src={about} alt="About" loading="lazy"/></div>
          <div className='image'><img src={taro} alt="Taro" loading="lazy"/></div>
          <div className='image'><img src={nightRoutine} alt="Night routine" loading="lazy"/></div>
          <div className='image'><img src={about2} alt="About" loading="lazy"/></div>
          <div className='image'><img src={dayRoutine} alt="Day routine" loading="lazy"/></div>
        </div>
        <div className='center'>
          <img src={facesss} alt="Facesss" />
        </div>
        <div className='section flexbox two'>
          <div className='image'><img src={dayNightRoutine} alt="day and night routine" loading="lazy"/></div>
          <div className='image'><img src={tea} alt="Tea" loading="lazy"/></div>
          <div className='image'><img src={diet} alt="Diet" loading="lazy"/></div>
          <div className='image'><img src={taste} alt="Taste" loading="lazy"/></div>
        </div>
        <div className="section center">
          <OtherProjectsButton />
        </div>
      </div>
    </div>
  )
}

export default BrandDesign