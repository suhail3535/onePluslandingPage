
import "./App.css"
import Home from './Views/pages/Home';
// import Footer from "./component/Footer";
import Navbar from './component/Navbar';
import PreNavHeader from "./component/PreNavHeader";

function App() {
  return (
    <div className="App">
      <PreNavHeader/>
      <Navbar />
      <Home />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
