import React from "react";

const LibrarySong = ({ song }) => {
  return (
    <div class="library-song-container">
      <img src={song.cover} alt={song.name} />
      <div className="library-song-desc">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
