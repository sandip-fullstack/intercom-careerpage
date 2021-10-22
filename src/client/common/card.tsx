
import React from "react";
import "./styles/card.css";

interface CardProps {
  children: React.ReactElement | React.ReactElement[];
}

const Card : React.FC<CardProps> = ({ children }) => {
  return (
    <div className="card-wrapper">
      {children}
    </div>
  )
}

export default Card;
