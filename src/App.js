import React, { useState, useRef } from "react";
import "./styles/app.scss";
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import data from "./data";

function App() {
  let [songs, setSongs] = useState(data());
  let [currentSong, setCurrentSong] = useState(songs[0]);
  let [isPlaying, setIsPlaying] = useState(false);
  let [isLibraryActive, setLibraryActive] = useState(false);
  let [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });

  let audioRef = useRef(null);

  const timeUpdateHandler = (e) => {
    let current = e.target.currentTime;
    let duration = e.target.duration;
    let animationPercentage = Math.round(
      (Math.round(current) * 100) / Math.round(duration)
    );

    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
      animationPercentage,
    });
  };

  const skipSongHandler = async () => {
    let currentSongIndex = songs.findIndex(
      (song) => song.id === currentSong.id
    );
    await setCurrentSong(songs[(currentSongIndex + 1) % songs.length]);
    //check if song is isPlaying
    if (isPlaying) audioRef.current.play();
  };

  return (
    <div>
      <Nav
        isLibraryActive={isLibraryActive}
        setLibraryActive={setLibraryActive}
      />
      <Song currentSong={currentSong} />
      <Player
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        songs={songs}
        setSongs={setSongs}
      />
      <Library
        audioRef={audioRef}
        isPlaying={isPlaying}
        songs={songs}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
        isLibraryActive={isLibraryActive}
        setLibraryActive={setLibraryActive}
      />
      <Footer />
      <audio
        onEnded={skipSongHandler}
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;
