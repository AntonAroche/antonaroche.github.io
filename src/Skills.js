import React, { Component } from "react";

class Skills extends Component {
  render() {
    return (
      <section className="colorlib-skills" data-section="skills">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">My Specialty</span>
              <h2 className="colorlib-heading animate-box">My Skills</h2>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-12 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <p>
                Here are the highlights of my most important skills, which
                I have developed either at work or in projects.
                For a complete list of my skills, please read <a href="https://drive.google.com/file/d/1cEfeRptfkkzyvnNyxB_v7s2AMg6u9bGf/view?usp=sharing"> my resume.</a>
              </p>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="progress-wrap">
                <h3>Javascript / Typescript</h3>
                <div className="progress">
                  <div
                    className="progress-bar color-1"
                    role="progressbar"
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "95%" }}
                  >
                    <span>95%</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInRight"
            >
              <div className="progress-wrap">
                <h3>C#</h3>
                <div className="progress">
                  <div
                    className="progress-bar color-2"
                    role="progressbar"
                    aria-valuenow={85}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "85%" }}
                  >
                    <span>85%</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="progress-wrap">
                <h3>React</h3>
                <div className="progress">
                  <div
                    className="progress-bar color-3"
                    role="progressbar"
                    aria-valuenow={80}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "90%" }}
                  >
                    <span>90%</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInRight"
            >
              <div className="progress-wrap">
                <h3>HTML / CSS</h3>
                <div className="progress">
                  <div
                    className="progress-bar color-4"
                    role="progressbar"
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "95%" }}
                  >
                    <span>95%</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="progress-wrap">
                <h3>Ember.js</h3>
                <div className="progress">
                  <div
                    className="progress-bar color-5"
                    role="progressbar"
                    aria-valuenow={85}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "85%" }}
                  >
                    <span>85%</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInRight"
            >
              <div className="progress-wrap">
                <h3>Python</h3>
                <div className="progress">
                  <div
                    className="progress-bar color-6"
                    role="progressbar"
                    aria-valuenow={65}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "70%" }}
                  >
                    <span>70%</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="progress-wrap">
                <h3>Angular</h3>
                <div className="progress">
                  <div
                    className="progress-bar color-7"
                    role="progressbar"
                    aria-valuenow={65}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "70%" }}
                  >
                    <span>70%</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInRight"
            >
              <div className="progress-wrap">
                <h3>SQL / Databases</h3>
                <div className="progress">
                  <div
                    className="progress-bar color-8"
                    role="progressbar"
                    aria-valuenow={70}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "70%" }}
                  >
                    <span>70%</span>
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

export default Skills;
