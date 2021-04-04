import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div classname="pa2">
      <input
        className="pa3 ba b--purple bg-lightest-purple"
        type="search"
        placeholder="search planets"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
