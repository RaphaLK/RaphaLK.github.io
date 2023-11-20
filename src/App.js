import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import personalPhoto from "./assets/MyPhoto.jpg";
import Navbar from "./components/Navbar.js";

import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

const App = () => {
  return (
    <div classname="pageContainer">
      <div className="App">
        <img src={personalPhoto} className="myPhoto" alt="" />
        <div className="TextnNav">
          <p className="text">Raphael Kusuma</p>
          <Navbar/>
        </div>
      </div>
      <Routes>
        <Route path="/AboutMe" element={< AboutMe />} />
        <Route path="/Projects" element={< Projects />} />
        <Route path="/Resume" element={< Resume />} />
      </Routes>
    </div>
  );
};

export default App;
