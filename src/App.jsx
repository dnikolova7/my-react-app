import './App.css';
import Content from './components/Content/Content';
import IndexFooter from './components/Footers/indexFooter';
import IndexHeader from './components/Headers/indexHeader';


function App() {
  return (
    <div className="App">
      <div className="top">
        <IndexHeader />
      </div>
      <div className="middle"> <Content /> </div>
      <div className="bottom"><IndexFooter /></div>
    </div>
    
  );
}

export default App;
