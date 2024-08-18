import React from "react";

const SearchComponent = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="search-bar">
      <h1>How can we help?</h1>
      <div className="search-input">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <button>
          <i>→</i>
        </button>
      </div>
    </div>
  );
};

export default SearchComponent;
