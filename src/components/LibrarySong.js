import React from "react";

const LibrarySong = ({ song, setCurrentSong, audioRef, isPlaying }) => {
  const selectSongHandler = () => {
    setCurrentSong(song);

    //check if song is isPlaying
    if (isPlaying) {
      let playPromise = audioRef.current.play();
      if (playPromise) playPromise.then((audio) => audioRef.current.play());
    }
  };
  return (
    <div onClick={selectSongHandler} class="library-song-container">
      <img src={song.cover} alt={song.name} />
      <div className="library-song-desc">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
