import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Introduction from "./Intro";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact"

function App() {
  return (
    <div id="colorlib-page">
      <div class="container-wrap">
        <Sidebar />
        <div id="colorlib-main">
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
