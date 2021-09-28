import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  isPlaying,
  setIsPlaying,
  currentSong,
  setCurrentSong,
  audioRef,
  songInfo,
  songs,
  setSongInfo,
}) => {
  const playPauseSongHandler = () => {
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const getTimeFormat = (time) => {
    if (!time) return "0:00";
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragRangeHandler = (e) => {
    let current = e.target.value;
    setSongInfo({ ...songInfo, currentTime: current });
    audioRef.current.currentTime = current;
  };

  const skipSongHandler = (direction) => {
    let currentSongIndex = songs.findIndex(
      (song) => song.id === currentSong.id
    );
    if (direction === "skip-forward")
      setCurrentSong(songs[currentSongIndex + 1]);
    else setCurrentSong(songs[currentSongIndex - 1]);
    
    //check if song is isPlaying
    if (isPlaying) {
      let playPromise = audioRef.current.play();
      if (playPromise) playPromise.then((audio) => audioRef.current.play());
    }
  };

  return (
    <div className="player-container">
      <div className="time-slider-control">
        <p>{getTimeFormat(songInfo.currentTime)}</p>
        <input
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          onChange={dragRangeHandler}
          type="range"
        />
        <p>{getTimeFormat(songInfo.duration)}</p>
      </div>
      <div className="play-pause-control">
        <FontAwesomeIcon
          className="skip-back"
          icon={faAngleLeft}
          size="2x"
          onClick={() => skipSongHandler("skip-back")}
        />
        <FontAwesomeIcon
          className="play"
          icon={isPlaying ? faPause : faPlay}
          size="2x"
          onClick={playPauseSongHandler}
        />
        <FontAwesomeIcon
          className="skip-through"
          icon={faAngleRight}
          size="2x"
          onClick={() => skipSongHandler("skip-forward")}
        />
      </div>
    </div>
  );
};

export default Player;
