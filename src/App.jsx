import './App.css';
import Content from './components/content';
import IndexFooter from './components/indexFooter';
import IndexHeader from './components/indexHeader';

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
