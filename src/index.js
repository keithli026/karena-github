import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './pages/Layout';
import Home from './pages/Home';
import MyStory from './pages/MyStory';
import Projects from './pages/Projects';
import ProjectsOverview from './pages/ProjectsOverview';
import LetsTalk from './pages/LetsTalk';
import NoPage from './pages/NoPage';
import Resume from './pages/Resume';

export default function MainApp() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="my-story" element={<MyStory />} />
            <Route path="projects" element={<Projects />}>
              <Route index element={<ProjectsOverview />} />
            </Route>
            <Route path="lets-talk" element={<LetsTalk />} />
            <Route path="*" element={<NoPage />} />
            <Route path="resume" element={<Resume/>} />
          </Route>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
