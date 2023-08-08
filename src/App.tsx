import "./App.css";
import { CardMain } from "./components/Card";
import monaWhisper from "./img/mona-whisper.gif";

function App() {
  return (
    <div>
      <h1>To-do List</h1>
      <CardMain />
      <img className="img-cat" src={monaWhisper} alt="gif da whisper" />
    </div>
  );
}

export default App;
