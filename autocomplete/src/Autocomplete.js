// src/SearchInput.js
import React, { useState, useEffect, useRef } from "react";
import { fetchSuggestions } from "./mockApi";

const Autocomplete = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (query.trim() === "") {
      setSuggestions([]);
      return;
    }

    // debounce API call
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      fetchSuggestions(query).then((results) => {
        setSuggestions(results);
        setShowDropdown(true);
      });
    }, 300);

    return () => clearTimeout(timeoutRef.current);
  }, [query]);

  const handleSelect = (item) => {
    setQuery(item);
    setSuggestions([]);
    setShowDropdown(false);
  };

  return (
    <div className="search-container">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => query && setShowDropdown(true)}
        onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
        placeholder="Search fruits..."
      />
      {showDropdown && suggestions.length > 0 && (
        <ul className="dropdown">
          {suggestions.map((item) => (
            <li key={item} onClick={() => handleSelect(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
