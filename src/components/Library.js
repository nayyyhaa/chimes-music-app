import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs, setCurrentSong }) => {
  return (
    <div class="library-container">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong song={song} setCurrentSong={setCurrentSong} />
        ))}
      </div>
    </div>
  );
};

export default Library;
