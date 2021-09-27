import "./styles/app.scss";
import Song from "./components/Song";
import Player from "./components/Player";

function App() {
  return (
    <div>
      <h1 className="title-text">Chimes🎐</h1>
      <Song />
      <Player />
    </div>
  );
}

export default App;
