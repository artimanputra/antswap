import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Roadmap from "./components/roadmap"
import Join from "./components/join";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <div className="relative z-0 ">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center z-10 landing">
          <Navbar />
        <Hero />        
        </div>
        <Roadmap />
        <Join />
      </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
