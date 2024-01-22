import React from 'react'
// import BackButton from '../components/BackButton'
import OtherProjectsButton from '../components/OtherProjectsButton'
import banner from "../assets/images/ef_set/banner.png"
import XDIcon from "../assets/images/icons/XD.png"
import PSIcon from "../assets/images/icons/PS.png"
import AIIcon from "../assets/images/icons/AI.png"
import EFSetTest1 from "../assets/images/ef_set/image_1.webp"
import EFSetTest2 from "../assets/images/ef_set/image_2.webp"
import EFSetTest3 from "../assets/images/ef_set/image_3.webp"
import EFSetTest4 from "../assets/images/ef_set/image_4.webp"
import EFSetTest5 from "../assets/images/ef_set/image_5.webp"
import result1 from "../assets/images/ef_set/result_1.webp"
import result2 from "../assets/images/ef_set/result_2.webp"
import mobile from "../assets/images/ef_set/mobile.webp"
import Container from 'react-bootstrap/Container';

const EFSet = () => {
  return (
    <div id='ef_set'>
      <div className='banner'>
        <div className='image'><img src={banner} alt="banner" /></div>
        <div className='title'>EF SET TESTS</div>
        <div className='content'>
          <div className='keypoint'>
            <div>MY ROLE: <span>GRAPHIC DESIGN 丨<span>UI DESIGN</span> | <span>BRANDING</span></span></div>
            <div>TIMELINE: <span>8 WEEKS, 2014-2015</span></div>
          </div>
          <div className='icons'>
            <img src={XDIcon} alt="xd icon" />
            <img src={PSIcon} alt="ps icon" />
            <img src={AIIcon} alt="ai icon" />
          </div>
        </div>
      </div>
      <Container>
        <div className='section'>
          <h2>Brief</h2>
          <p>The EF Standard English Test (EF SET) is an English standard test for non-native English speakers. It is a product of EF Education First​.</p>
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
      </Container>
      <div className='section gallery'>
        <div className='image'>
          <img src={EFSetTest1} alt="EF Set test" loading="lazy"/>
          {/* <BackButton />  */}
        </div>
        <Container>
          <img src={EFSetTest2} alt="EF Set test" loading="lazy"/>
          <img src={EFSetTest3} alt="EF Set test" loading="lazy"/>
          <img src={EFSetTest4} alt="EF Set test" loading="lazy"/>
          <img src={EFSetTest5} alt="EF Set test" loading="lazy"/>
        </Container>
      </div>
      <Container>
        <div className='section'>
          <div className='flexbox'>
            <div className='image'><img src={result1} alt="EF Set test" loading="lazy"/></div>
            <div className='image'><img src={result2} alt="EF Set test" loading="lazy"/></div>
          </div>
        </div>
      </Container>
      <div className='bg section'>
        <Container>
          <img src={mobile} alt="EF Set test" loading="lazy"/>
        </Container>
      </div>
      <Container>
        <div className='section center'>
          <OtherProjectsButton />
        </div>
      </Container>
    </div>
  )
}

export default EFSet