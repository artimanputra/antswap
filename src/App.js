import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Roadmap from "./components/roadmap";
import Join from "./components/join";
import Faq from "./components/faq";
import Preloader from "./components/preloder"; // Corrected import name
import "./App.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Preloader />
      ) : (
        <BrowserRouter>
          <div className="relative z-0 landing">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center z-10 ">
              <Navbar />
              <Hero />
            </div>
          </div>
          <Roadmap />
          <Join />
          <Faq />
        </BrowserRouter>
      )}
    </div>
  );
};

export default App;
