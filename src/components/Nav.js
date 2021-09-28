import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ isLibraryActive, setLibraryActive }) => {
  return (
    <nav>
      <h1 className="title-text">Chimes🎐</h1>
      <button onClick={() => setLibraryActive(!isLibraryActive)}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
