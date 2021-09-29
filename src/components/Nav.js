import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Nav = ({
  isLibraryActive,
  setLibraryActive,
  isDarkMode,
  setDarkMode,
}) => {
  return (
    <nav>
      <h1 className="title-text">Chimes🎐</h1>
      <div className="settings">
        <button onClick={() => setLibraryActive(!isLibraryActive)}>
          Library
          <FontAwesomeIcon icon={faMusic} />
        </button>
        <button onClick={() => setDarkMode(!isDarkMode)}>
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
