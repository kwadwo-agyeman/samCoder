import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import About from "./Pages/About/About";
import TechStack from "./Pages/TechStack/TechStack";
import VerticalLineScroll from "./Pages/V/V";
function App() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div className="hero--section"></div>

      <div className="my--name">
      <svg viewBox=" 0 0 1500 150">
              <text
                x="50%"
                y="50%"
                dy=".32em"
                textAnchor="middle"
                className="colored"
              >
                SAMUEL AGYEMANG
              </text>
            </svg>

        {/* <span style={{wordSpacing:"70px"}}>Samuel   Boakye    Agyemang</span> */}
        </div>

      <div className="app--container">
        <div className="app--content--container">
          <div className="about">
            <About />
          </div>
          <div className="techstack">
            <TechStack/>
          </div>
        </div>
      </div>

      {/* <div className="v--line">
        <VerticalLineScroll/>
      </div> */}
    </div>
  );
}

export default App;
