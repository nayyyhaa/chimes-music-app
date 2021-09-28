import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { playAudio } from "../util";

const Player = ({
  isPlaying,
  setIsPlaying,
  currentSong,
  setCurrentSong,
  audioRef,
  songInfo,
  songs,
  setSongInfo,
  setSongs,
}) => {
  /*change lib active*/
  useEffect(() => {
    const currentSongActive = songs.map((el) => {
      if (el.id === currentSong.id) return { ...el, active: true };
      else return { ...el, active: false };
    });
    setSongs(currentSongActive);
  }, [currentSong]);

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
      setCurrentSong(songs[(currentSongIndex + 1) % songs.length]);
    else {
      if ((currentSongIndex - 1) % songs.length < 0)
        setCurrentSong(songs[songs.length - 1]);
      else setCurrentSong(songs[(currentSongIndex - 1) % songs.length]);
    }

    //check if song is isPlaying
    playAudio(isPlaying, audioRef);
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
