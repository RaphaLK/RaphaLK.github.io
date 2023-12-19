import "./App.css";
import { backgroundOptions } from "./components/BackgroundParticles.js"
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import React, { useEffect, useCallback } from "react";
import Navbar from "./components/Navbar.js";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const App = () => {
  
  const navigate = useNavigate();

  // This hook is just here so the clicking a link to my website directly redirects to /AboutMe
  useEffect(() => {
    navigate('/AboutMe');
  }, []); // Ensure that this only happens once; Empty dependency

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div classname="pageContainer">
      <aside>
        <Navbar/>
      </aside>
      <Particles options={backgroundOptions} init={particlesInit} />
      <Routes>
        <Route path="/AboutMe" element={< AboutMe />} />
        <Route path="/Projects" element={< Projects />} />
        <Route path="/Resume" element={< Resume />} />
      </Routes>
    </div>
  );
};

export default App;
