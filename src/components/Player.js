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
  audioRef,
  songInfo,
  setSongInfo,
}) => {
  const playPauseSongHandler = () => {
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const getTimeFormat = (time) => {
    if(!time) return "0:00"
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragRangeHandler = (e) => {
    let current = e.target.value;
    setSongInfo({ ...songInfo, currentTime: current });
    audioRef.current.currentTime = current;
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
        <FontAwesomeIcon className="skip-back" icon={faAngleLeft} size="2x" />
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
        />
      </div>
    </div>
  );
};

export default Player;
