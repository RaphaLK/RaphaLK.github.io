import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import personalPhoto from "./assets/MyPhoto.jpg";
import Navbar from "./Navbar.js";
//I might consider creating a separate routing file, but this should be fine
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Resume from "./Resume";

const App = () => {
  return (
    <div className="App">
      <img src={personalPhoto} className="myPhoto" alt="" />
      <div className="TextnNav">
        <p className="text">Raphael Kusuma</p>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/AboutMe" component={AboutMe} />
            <Route path="/Projects" component={Projects} />
            <Route path="/Resume" component={Resume} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
