import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-12">
              <div
                className="row row-bottom-padded-sm animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="col-md-12">
                  <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>
                      <strong>Hi, I'm Anton!</strong> I'm a software engineering
                      student with a passion for all things web and mobile
                      development. I love delivering experiences that users can
                      easily understand, feel familiar with and love to use.
                    </p>
                    <p>
                      Building beautiful, fast and responsive web sites and apps
                      is my passion. I'm always looking to apply my skills and
                      be an innovator in what I do, whether on the job or in
                      side projects.
                    </p>
                    <p>Here are some of my areas of expertise:</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-md-3 animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="services color-1">
                    <span className="icon2">
                      <i className="icon-bulb" />
                    </span>
                    <h3>Software & Systems Design</h3>
                  </div>
                </div>
                <div
                  className="col-md-3 animate-box"
                  data-animate-effect="fadeInRight"
                >
                  <div className="services color-2">
                    <span className="icon2">
                      <i className="icon-globe-outline" />
                    </span>
                    <h3>Front-end Web Development</h3>
                  </div>
                </div>
                <div
                  className="col-md-3 animate-box"
                  data-animate-effect="fadeInTop"
                >
                  <div className="services color-3">
                    <span className="icon2">
                      <i className="icon-data" />
                    </span>
                    <h3>Back-end, Databases</h3>
                  </div>
                </div>
                <div
                  className="col-md-3 animate-box"
                  data-animate-effect="fadeInBottom"
                >
                  <div className="services color-4">
                    <span className="icon2">
                      <i className="icon-phone3" />
                    </span>
                    <h3>Native and Cross Platform</h3>
                  </div>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-md-12 animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="hire">
                    <h2>
                      I'm currently looking for <br />
                      an internship for the Summer 2021 term!
                    </h2>
                    <a href="https://drive.google.com/file/d/1cEfeRptfkkzyvnNyxB_v7s2AMg6u9bGf/view?usp=sharing" className="btn-hire">
                      Read my resume
                    </a>
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

export default About;
