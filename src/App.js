import React, { useState, useRef } from "react";
import "./styles/app.scss";
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
import data from "./util";

function App() {
  let [songs, setSongs] = useState(data());
  let [currentSong, setCurrentSong] = useState(songs[0]);
  let [isPlaying, setIsPlaying] = useState(false);
  let [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  let audioRef = useRef(null);

  const timeUpdateHandler = (e) => {
    let current = e.target.currentTime;
    let duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration });
  };

  return (
    <div>
      <h1 className="title-text">Chimes🎐</h1>
      <Song currentSong={currentSong} />
      <Player
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
      <Library
        audioRef={audioRef}
        isPlaying={isPlaying}
        songs={songs}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;
