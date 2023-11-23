import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar.js";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

const App = () => {
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
/*
<div className="App">
<img src={personalPhoto} className="myPhoto" alt="" />
<div className="TextnNav">
  <p className="text">Raphael Kusuma</p>
  <Navbar/>
</div>
</div>
*/
export default App;
