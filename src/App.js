  import "./App.css";
  import { backgroundOptions } from "./components/BackgroundParticles.js";
  import {
    BrowserRouter as Router,
    Route,
    Routes,
    useNavigate,
  } from "react-router-dom";
  import React, { useEffect, useCallback } from "react";
  import Navbar from "./components/Navbar.js";
  import AboutMe from "./pages/AboutMe";
  import Projects from "./pages/Projects";
  import Resume from "./pages/Resume";
  import Particles from "react-particles";
  import { loadFull } from "tsparticles";

  const App = () => {
    const navigate = useNavigate();

    useEffect (() => {
      navigate('/AboutMe');
    }, [])

    const particlesInit = useCallback(async (engine) => {
      await loadFull(engine);
    }, []);

    return (
      <div>
        <div classname="pageContainer">
            <Navbar />
          <Particles options={backgroundOptions} init={particlesInit} />
        </div>

        <Routes>
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
      </div>
    );
  };

  export default App;
