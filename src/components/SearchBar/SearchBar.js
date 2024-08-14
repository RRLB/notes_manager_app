//
import { useState } from "react";
import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

export function SearchBar({ placeholder, onTextChange }) {
  const [isSearchHovered, setIsSearchHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsSearchHovered(true)}
      onMouseLeave={() => setIsSearchHovered(false)}
    >
      <SearchIcon size={25} className={s.icon} />
      <input
        type="text"
        className={isSearchHovered ? s.isHovered : s.input}
        onChange={(e) => onTextChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}
