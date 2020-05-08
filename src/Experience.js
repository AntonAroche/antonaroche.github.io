import React, { Component } from "react";

class Experience extends Component {
  render() {
    return (
      <section className="colorlib-experience" data-section="experience">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">Experience</span>
              <h2 className="colorlib-heading animate-box">Work Experience</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="timeline-centered">
                <article
                  className="timeline-entry animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-1">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2>
                        <a href="#">
                          Software Developer (Network Management), Ciena
                        </a>
                      </h2>
                      <h2>
                        <span>January 2020 - Present</span>
                      </h2>
                      <p>
                        <ul>
                          <li>
                            Using <strong>Javascript</strong> in the{" "}
                            <strong>Ember.js framework,</strong> developed new
                            features and bug fixes that improved the Plus
                            License of Ciena's Manage, Control and Plan
                            software.
                          </li>
                          <li>
                            Created an ESLint code linting plugin that{" "}
                            <strong>greatly reduced pull request times</strong>{" "}
                            by automatically ensuring code quality and
                            consistency across all repositories, improving team
                            productivity.
                          </li>
                          <li>
                            Updated the entire codebase to the latest version of
                            Ember, redesigning previously outdated code to use
                            the{" "}
                            <strong>
                              latest Javascript and Ember.js features.
                            </strong>
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </article>
                <article
                  className="timeline-entry animate-box"
                  data-animate-effect="fadeInRight"
                >
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-2">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2>
                        <a href="#">Technical Developer (Web), NSERC</a>
                      </h2>
                      <h2>
                        <span>May 2019 - December 2019</span>
                      </h2>
                      <p>
                        <ul>
                          <li>
                            Improved the council's Research Portal using{" "}
                            <strong>C#</strong> and <strong>HTML/CSS</strong> in
                            the <strong>ASP.NET framework,</strong> developing
                            bug fixes and features that made it more reliable
                            and user friendly.
                          </li>
                          <li>
                            Refactored the PDF generation process by{" "}
                            <strong>improving the framework</strong> to generate
                            department-specific PDFs, crucial for different
                            research teams.
                          </li>
                          <li>
                            Created database scripts and procedures using{" "}
                            <strong>SQL Server Management Studio.</strong>
                          </li>
                          <li>
                            Designed an automated test suite in C# using
                            Selenium that{" "}
                            <strong>sped up the QA process.</strong>
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </article>
                <article
                  className="timeline-entry animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-3">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2>
                        <a href="#">
                          Software Development Intern, Carleton University
                        </a>
                      </h2>
                      <h2>
                        <span>May 2018 - Jul. 2018</span>
                      </h2>
                      <p>
                        <ul>
                          <li>
                            Created a tool in <strong>Python</strong> that uses
                            Carleton’s course data to prevent conflicts between
                            prerequisite courses,
                            <strong>
                              making the course registration process much easier
                              for all students.
                            </strong>
                          </li>
                          <li>
                            <strong>Greatly improved</strong> the speed at which
                            course conflicts are found and fixed at Carleton,
                            going from weeks of manual processing to a{" "}
                            <strong>15 second runtime</strong>
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </article>
                <article
                  className="timeline-entry begin animate-box"
                  data-animate-effect="fadeInBottom"
                >
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-none" />
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Experience;
