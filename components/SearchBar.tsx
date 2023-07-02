"use client";
import React, { useState } from "react";
import SearchManufacture from "./SearchManufacture";

const SearchBar = () => {
  const handleSubmit = () => {};
  const [manufacturer, setManufacturer] = useState("");
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <div className="searchbar__item">
        <SearchManufacture
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
