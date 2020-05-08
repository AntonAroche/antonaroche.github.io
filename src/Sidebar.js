import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav
            href="#navbar"
            className="js-colorlib-nav-toggle colorlib-nav-toggle"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <i />
          </nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div
                className="author-img"
                style={{ backgroundImage: "url(images/profile.jpeg)" }}
              />
              <h1 id="colorlib-logo">
                <a href="index.html">Anton Aroche</a>
              </h1>
              <span class="position">Full-Stack Software Engineer</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active">
                    <a href="#about" data-nav-section="about">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" data-nav-section="skills">
                      Skills
                    </a>
                  </li>
                  <li>
                    <a href="#" data-nav-section="experience">
                      Experience
                    </a>
                  </li>
                  <li>
                    <a href="#" data-nav-section="projects">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#" data-nav-section="education">
                      Education
                    </a>
                  </li>
                  <li>
                    <a href="#" data-nav-section="contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li>
                  <a style={{margin: "5px"}} href="mailto:anton.aroche@gmail.com">
                    <i className="icon-mail"></i>
                  </a>
                  <a style={{margin: "5px"}} href="https://drive.google.com/file/d/1cEfeRptfkkzyvnNyxB_v7s2AMg6u9bGf/view">
                    <i className="icon-file"></i>
                  </a>
                  <a style={{margin: "5px"}} href="https://www.linkedin.com/in/antonaroche/">
                    <i className="icon-linkedin2"></i>
                  </a>
                  <a style={{margin: "5px"}} href="https://github.com/AntonAroche">
                    <i className="icon-github"></i>
                  </a>
                </li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p>
                <small>I hope to work with you soon!</small>
              </p>
            </div>
          </aside>
        </div>
      </div>
    );
  }
}
