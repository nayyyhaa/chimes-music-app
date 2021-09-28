import React from "react";
import { playAudio } from "../util";

const LibrarySong = ({
  song,
  songs,
  setSongs,
  setCurrentSong,
  audioRef,
  isPlaying,
}) => {
  const selectSongHandler = () => {
    setCurrentSong(song);
    const currentSongActive = songs.map((el) => {
      if (el.id === song.id) return { ...el, active: true };
      else return { ...el, active: false };
    });
    setSongs(currentSongActive);

    //check if song is isPlaying
    playAudio(isPlaying, audioRef);
  };
  return (
    <div
      onClick={selectSongHandler}
      className={`library-song-container ${song.active ? "active" : ""}`}
    >
      <img src={song.cover} alt={song.name} />
      <div className="library-song-desc">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
