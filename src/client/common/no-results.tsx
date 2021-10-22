
import React from "react";
import NoResultsImage from "../../assets/no-search-results.svg";
import "./styles/no-results.css";

const NoResults = () => {
  return (
    <div className="center-div">
      <picture>
        <source srcSet={ NoResultsImage } type="image/webp"/>
        <img src={ NoResultsImage } alt="No Results found" ></img>
      </picture>
      <div className="no-results-text">There were no search results</div>
      <div>Please check your spelling or use different keywords.</div>
    </div>
  )
}

export default NoResults;

