import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ isPlaying, setIsPlaying, currentSong }) => {
  let [songInfo, setSongInfo] = useState({
    currentTime: null,
    duration: null,
  });
  let audioRef = useRef(null);

  const playPauseSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const timeUpdateHandler = (e) => {
    let current = e.target.currentTime.toFixed(2);
    let duration = e.target.duration.toFixed(2);
    setSongInfo({ ...songInfo, currentTime: current, duration });
  };

  const getTimeFormat = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  return (
    <div class="player-container">
      <div className="time-slider-control">
        <p>{getTimeFormat(songInfo.currentTime)}</p>
        <input type="range" />
        <p>{getTimeFormat(songInfo.duration)}</p>
      </div>
      <div className="play-pause-control">
        <FontAwesomeIcon className="skip-back" icon={faAngleLeft} size="2x" />
        <FontAwesomeIcon
          className="play"
          icon={faPlay}
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
