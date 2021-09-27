import React, { useState } from "react";
import "./styles/app.scss";
import Song from "./components/Song";
import Player from "./components/Player";
import data from "./util";

function App() {
  let [songs, setSongs] = useState(data());
  let [currentSong, setCurrentSong] = useState(songs[0]);

  return (
    <div>
      <h1 className="title-text">Chimes🎐</h1>
      <Song currentSong={currentSong}/>
      <Player />
    </div>
  );
}

export default App;
