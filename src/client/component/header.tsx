import React from "react";
import IntercomImage from "../../assets/intercom-logo.webp";

const Header: React.FC  = () => {
  return (
    <div className="intercom-header">
        <div className="main-wrapper">
          <picture>
              <source srcSet={ IntercomImage } type="image/webp"/>
              <img src={ IntercomImage } alt="Intercom Logo" ></img>
          </picture>
        </div>
      </div>
    
  )
}

export default Header;
