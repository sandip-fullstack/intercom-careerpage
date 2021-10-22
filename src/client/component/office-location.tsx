import React from "react";

interface OfficeLocationProps {
  assetURL: string,
  name: string,
  description: string,
  imageAlt?: string
}

const OfficeLocation: React.FC<OfficeLocationProps> = ({ assetURL, name, description, imageAlt}) => {
  return (
    <div className="card-location-background">
      <div>
        <picture className="picture-icon">
          <source srcSet={assetURL} type="image/webp"/>
          <img src={assetURL} alt={imageAlt} className="icon-image"></img>
        </picture>
      </div>
      <div className="title">
        <div className="bold-text">
          <p>
            {name}
          </p>
        </div>
      </div>
      <div className="body">
        <span>{description}</span>
      </div>
    </div>
  )
}

export default OfficeLocation;
