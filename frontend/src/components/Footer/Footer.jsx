import React from 'react';
import "./Footer.css";

const Footer = ({isOpenPost, setIsOpenPost}) => {
  return (
    <footer>
      <div className="footer-title" onClick={() => setIsOpenPost(!isOpenPost)}>
        {isOpenPost ? "x" : "+"}
      </div>
    </footer>
  )
}

export default Footer