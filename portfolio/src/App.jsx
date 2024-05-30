import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import About from "./Pages/About/About";
function App() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div className="hero--section"></div>

      <div className="my--name">Samuel Boakye Agyemang</div>

      <div className="app--container">
        <div className="app--content--container">
          <div className="about">
            <About />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
