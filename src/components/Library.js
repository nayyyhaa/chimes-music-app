import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  isLibraryActive,
  setLibraryActive,
}) => {
  return (
    <div
      className={`library-container ${isLibraryActive ? "active-library" : ""}`}
    >
      <div className="library-nav">
        <h2>Library</h2>
        <FontAwesomeIcon
          icon={faTimes}
          onClick={() => setLibraryActive(!isLibraryActive)}
        />
      </div>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            key={song.id}
            song={song}
            songs={songs}
            setSongs={setSongs}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
