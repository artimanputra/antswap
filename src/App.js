import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Roadmap from "./components/roadmap"
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 landing">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center z-10">
          <Navbar />
        <Hero />        
        </div>
        <Roadmap />
      </div>
    </BrowserRouter>
  );
};

export default App;
