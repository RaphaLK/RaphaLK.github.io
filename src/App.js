  import "./App.css";
  import { backgroundOptions } from "./components/BackgroundParticles.js";
  import {
    BrowserRouter as Router,
    Route,
    Routes,
    useNavigate,
  } from "react-router-dom";
  import HomePage from "./pages/HomePage.js";
  import React, { useEffect, useCallback } from "react";
  import Navbar from "./components/Navbar.js";
  import AboutMe from "./pages/AboutMe";
  import Projects from "./pages/Projects";
  import Resume from "./pages/Resume";
  import Particles from "react-particles";
  import { loadFull } from "tsparticles";

  const App = () => {
    const navigate = useNavigate();


    return (
      <div>
        <HomePage/>
      </div>
    );
  };

  export default App;
