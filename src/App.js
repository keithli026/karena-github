import React, { useEffect } from 'react'
import ReactGA from 'react-ga';
import './custom.scss'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Layout from './pages/Layout'
import Home from './pages/Home'
import MyStory from './pages/MyStory'
import Projects from './pages/Projects'
import ProjectsOverview from './pages/ProjectsOverview'
import BrandIdentity from './pages/BrandIdentity'
import BadgeDesign from './pages/BadgeDesign'
import BoothDesign from './pages/BoothDesign'
import Digital from './pages/Digital'
import Print from './pages/Print'
import EFSet from './pages/EFSet'
import WebDesign from './pages/WebDesign'
import ReHome from './pages/ReHome'
// import Fitsio from './pages/Fitsio'
import LetsTalk from './pages/LetsTalk'
import NoPage from './pages/NoPage'
import Resume from './pages/Resume'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

function App() {
  const TRACKING_ID = "G-0QKR0542GX"; // OUR_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);

  const location = useLocation();
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="my-story" element={<MyStory />} />
          <Route path="projects" element={<Projects />}>
            <Route index element={<ProjectsOverview />} />
            <Route path="brand-identity" element={<BrandIdentity />} />
            <Route path="badge-design" element={<BadgeDesign />} />
            <Route path="booth-design" element={<BoothDesign />} />
            <Route path="digital" element={<Digital />} />
            <Route path="ef-set" element={<EFSet />} />
            <Route path="print" element={<Print />} />
            <Route path="web-design" element={<WebDesign />} />
            {/* <Route path="fitsio" element={<Fitsio />} /> */}
            <Route path="re-home" element={<ReHome />} />
          </Route>
          <Route path="lets-talk" element={<LetsTalk />} />
          <Route path="*" element={<NoPage />} />
          <Route path="resume" element={<Resume />} />
        </Route>
      </Routes>
    </ScrollToTop>
  );
}

export default App