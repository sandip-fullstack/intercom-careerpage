
import React from "react";
import SearchIcon from "../../assets/search.png";
import "./styles/searchbar.css";

interface SearchBarProps {
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void,
  searchedValue: string
}
const SearchBar: React.FC<SearchBarProps> = ({ handleSearch, searchedValue }) => {
  return (
    <div className="search-wrapper">
      <input type="search"
        placeholder="Search"
        className="search-field"
        data-testid="search-input"
        value={searchedValue}
        onChange={(e) => handleSearch(e)}
      />
      <button type="submit" className="search-button">
        <img src={SearchIcon} alt="search glass"/>
      </button>
    </div>
  )
}

export default SearchBar;
