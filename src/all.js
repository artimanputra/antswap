import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Roadmap from "./components/roadmap";
import Join from "./components/join";
import FaqApp from "./components/faq";
import About from "./components/about"
import Preloader from "./components/preloder"; // Corrected import name
import Footer from "./components/footer";
import "./App.css";
import OurPartners from "./components/OurPartners/OurPartners";

const All = () => {
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
        <div>
          <div className="relative z-0">
            <div className=" ">
              <Navbar />
              <Hero />
            </div>
          </div>
          <About />
          <Roadmap />
          <OurPartners className=" mt-32"/>
          {/* <Join /> */}
          <FaqApp />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default All;
