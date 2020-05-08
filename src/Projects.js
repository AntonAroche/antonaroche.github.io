import React, { Component } from "react";

class Projects extends Component {
  render() {
    return (
      <section className="colorlib-work" data-section="projects">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">My Work</span>
              <h2 className="colorlib-heading animate-box">Recent Projects</h2>
            </div>
          </div>
          {/* <div
            className="row row-bottom-padded-sm animate-box"
            data-animate-effect="fadeInLeft"
          >
            <div className="col-md-12">
              <p className="work-menu">
                <span>
                  <a href="#" className="active">
                    Graphic Design
                  </a>
                </span>
                {"{"}" "{"}"}
                <span>
                  <a href="#">Web Design</a>
                </span>
                {"{"}" "{"}"}
                <span>
                  <a href="#">Software</a>
                </span>
                {"{"}" "{"}"}
                <span>
                  <a href="#">Apps</a>
                </span>
              </p>
            </div>
          </div> */}
          <div className="row">
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div
                className="project"
                style={{ backgroundImage: "url(images/palette-picker.png)" }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href="work.html">Palette Picker (React)</a>
                    </h3>
                    <span>
                      A web app that lets you create color palettes for use in
                      web development.
                    </span>
                    <span>
                      Save and rearrange palettes, copy colours in any format,
                      and more!
                    </span>
                    <span> </span>
                    <p className="icon">
                      <span>
                        <a href="https://github.com/AntonAroche/palette-picker">
                          <i className="icon-github" />
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInRight"
            >
              <div
                className="project"
                style={{ backgroundImage: "url(images/yahtzee-demo.gif)" }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href="work.html">Yahtzee (React)</a>
                    </h3>
                    <span>A playable game of Yahtzee! in React.</span>
                    <span>
                      The goal of the game is to collect specific sets of dice
                      in order to get the most possible points.
                    </span>
                    <p className="icon">
                      <span>
                        <a href="https://github.com/AntonAroche/react-practice-apps/tree/master/yahtzee">
                          <i className="icon-github" />
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div
                className="project"
                style={{
                  backgroundImage: "url(images/lightsout-demo.gif)",
                  backgroundPosition: "right",
                }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href="work.html">Lights Out (React)</a>
                    </h3>
                    <span>The game 'Lights Out' built in React!</span>
                    <span>
                      The goal is to turn off all the lights by flipping light
                      switches, which swap in a cross pattern.
                    </span>
                    <p className="icon">
                      <span>
                        <a href="https://github.com/AntonAroche/react-practice-apps/tree/master/lights-out">
                          <i className="icon-github" />
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
