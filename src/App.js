import "./App.css";
import React from "react";
import personalPhoto from "./assets/MyPhoto.jpg";
import Navbar from "./Navbar.js";

const App = () => {
  return (
  
    <div className="App">
      <Navbar></Navbar>
      <header className="App-header">
        <p> A bit about me..</p>
      </header>
      <img src={personalPhoto} className="myPhoto" alt=""/>
    </div>
  );
}

export default App;
