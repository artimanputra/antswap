import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import Join from "./components/join";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
        </div>
        <Join />        
      </div>
    </BrowserRouter>
  );
};

export default App;
