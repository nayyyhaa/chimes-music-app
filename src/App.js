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
  let [isDarkMode, setDarkMode] = useState(false);
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

  /*change lib active*/
  const setLibrarySongActive = (nextPrevSong) => {
    const currentSongActive = songs.map((el) => {
      if (el.id === nextPrevSong.id) return { ...el, active: true };
      else return { ...el, active: false };
    });
    setSongs(currentSongActive);
  };

  const skipSongHandler = async () => {
    let currentSongIndex = songs.findIndex(
      (song) => song.id === currentSong.id
    );
    await setCurrentSong(songs[(currentSongIndex + 1) % songs.length]);
    setLibrarySongActive(songs[(currentSongIndex + 1) % songs.length]);
    //check if song is isPlaying
    if (isPlaying) audioRef.current.play();
  };

  return (
    <div
      className={`app-container ${isLibraryActive ? "library-active" : ""} ${
        isDarkMode ? "dark-mode" : ""
      }`}
    >
      <Nav
        isLibraryActive={isLibraryActive}
        setLibraryActive={setLibraryActive}
        isDarkMode={isDarkMode}
        setDarkMode={setDarkMode}
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
        setLibrarySongActive={setLibrarySongActive}
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
