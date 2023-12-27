import React from 'react'
import { Link } from 'react-router-dom'
import "./contact.scss";
import { useNavigate, useLocation } from 'react-router-dom';
import { forwardRef, useRef, useEffect, useState } from 'react';

const Contact = () => {
  const location = useLocation();
  const { pathname } = useLocation();
  const [change, setChange] = useState(false);
  console.log(pathname, change, typeof(pathname));

  useEffect(() => {
    if (pathname !== "/my-story") {
      setChange(true);
    }
  }, [pathname]);
  return (
    <div className="contact">
      <div className='title'>Let's Talk!</div>
      <p>I'd love to chat about new opportunities or anything design related!</p>
      {change 
      ? <Link to="/my-story" state={{ targetId: "info" }} className='btn'>Contact me</Link>
      : <a href="#info" className='btn'>Contact me</a>}
    </div>
  )
}

export default Contact