import React from "react"
import { SearchSVGIcon } from "react-md";

const Search = ({ handleSeaechNote }) => {
   


  return (
    <div className="search">
      <SearchSVGIcon className="search-icon" />
      <input
        onChange={(e) => handleSeaechNote(e.target.value)}
        type="text"
        placeholder="Напиши что-нибудь, чтобы найти заметку" />
    </div>
  )
};

export default Search;