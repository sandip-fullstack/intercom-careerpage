import React from "react";

const HeroHeading: React.FC  = () => {
  return (
    <div className="careers-hero-wrapper flex-center">
    <h1 className="hero-heading-wrapper bold-text">
      <span className="hero-heading">Careers at Intercom</span>
      <p className="hero-heading-culture">
        <a href="/careers/culture">Learn about working at Intercom</a>
      </p>
    </h1>
    </div>
  )
}

export default HeroHeading;
