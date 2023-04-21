import './App.css';
import content from "./components/content";

function App() {
  return (
    <div className="App">
    <div className="header"> <h1> My Insulin Helper </h1>
    </div>
      <div className="content">{content}</div>
      <div className="footer"></div>
    </div>
    
  );
}

export default App;
