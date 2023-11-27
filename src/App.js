import "./App.css";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import Navbar from "./components/Navbar.js";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

const App = () => {
  
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/AboutMe');
  }, []); // Ensure that this only happens once on pageload

  return (
    <div classname="pageContainer">
      <aside>
        <Navbar/>
      </aside>
      <Routes>
        <Route path="/AboutMe" element={< AboutMe />} />
        <Route path="/Projects" element={< Projects />} />
        <Route path="/Resume" element={< Resume />} />
      </Routes>
    </div>
  );
};

export default App;
