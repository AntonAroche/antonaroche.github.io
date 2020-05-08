import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <section className="colorlib-contact" data-section="contact">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">Get in Touch</span>
              <h2 className="colorlib-heading">Contact</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div
                className="colorlib-feature colorlib-feature-sm animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="colorlib-icon">
                  <i className="icon-globe-outline" />
                </div>
                <div className="colorlib-text">
                  <p>
                    <a href="mailto:anton.aroche@gmail.com">anton.aroche@gmail.com</a>
                  </p>
                </div>
              </div>
              <div
                className="colorlib-feature colorlib-feature-sm animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="colorlib-icon">
                  <i className="icon-linkedin2" />
                </div>
                <div className="colorlib-text">
                  <p>
                    <a href="https://www.linkedin.com/in/antonaroche/">Visit me on LinkedIn!</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div
                className="colorlib-feature colorlib-feature-sm animate-box"
                data-animate-effect="fadeInRight"
              >
                <div className="colorlib-icon">
                  <i className="icon-phone" />
                </div>
                <div className="colorlib-text">
                  <p>
                    <a href="tel:613-799-1189">613-799-1189</a>
                  </p>
                </div>
              </div>
              <div
                className="colorlib-feature colorlib-feature-sm animate-box"
                data-animate-effect="fadeInRight"
              >
                <div className="colorlib-icon">
                  <i className="icon-github" />
                </div>
                <div className="colorlib-text">
                  <p>
                    <a href="https://github.com/AntonAroche">Check out my Github!</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
