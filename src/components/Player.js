import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ isPlaying, setIsPlaying, currentSong }) => {
  let [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  let audioRef = useRef(null);

  const playPauseSongHandler = () => {
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const timeUpdateHandler = (e) => {
    let current = e.target.currentTime;
    let duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration });
  };

  const getTimeFormat = (time) => {
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
    <div class="player-container">
      <div className="time-slider-control">
        <p>{getTimeFormat(songInfo.currentTime)}</p>
        <input
          min={0}
          max={songInfo.duration}
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
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
};

export default Player;
