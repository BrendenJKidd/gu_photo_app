import React from 'react'
import IMG_7468 from "../rescources/images/IMG_7468.JPG"

function StartBanner() {
  return (
    <div 
      className="start_banner"
      style={{ 
        backgroundImage: `url(${IMG_7468})` 
      }}>
      <h1 className="title">Global U 2021-2022</h1>
      <a href="https://give.adventures.org/globalU/" className="link">Click here to donate!</a>
    </div>
  )
}

export default StartBanner