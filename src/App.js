import React, { useEffect, useState } from "react";
import { HashRouter,Route,Routes } from "react-router-dom";
import All from "./all"
import ComingSoon from "./components/CommingSoon";
import Swap from "./components/Swap/index"

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    
        <HashRouter>
          <Routes>
            <Route path="/Swap" element={<Swap/>} />
          <Route path="/comming" element={<ComingSoon />} />
          <Route path="/" element={<All />} />
          </Routes>
        </HashRouter>
  );
};

export default App;
