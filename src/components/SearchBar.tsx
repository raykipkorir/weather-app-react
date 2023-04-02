import React, { useState, useRef, useEffect } from "react";

type SearchBarProps = {
  getSearchData: (searchData: string) => void;
};

const SearchBar = ({ getSearchData }: SearchBarProps) => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getSearchData(searchText);
  };

  const inputElement = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputElement.current?.focus();
  });

  return (
    <form onSubmit={handleSearchSubmit}>
      <input
        type="search"
        name="search"
        id="search"
        value={searchText}
        onChange={handleChange}
        ref={inputElement}
        placeholder="Enter City"
        className="py-2 px-5 rounded-full"
      />
    </form>
  );
};

export default SearchBar;
