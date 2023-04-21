import './App.css';
import Content from './components/Content/Content';
import Footer from './components/Footers/Footer';
import Header from './components/Headers/Header';
import IndexPage from './components/Pages/IndexPage';


function App() {
  return (
    <div className="App">
      {/* <div className="top">
        <Header />
      </div>
      <div className="middle"> <Content /> </div>
      <div className="bottom"><Footer /></div> */}
      < IndexPage />
    </div>
    
  );
}

export default App;
