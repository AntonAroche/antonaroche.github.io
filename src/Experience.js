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
                      <h2>Signiant</h2>
                      <h2>
                        <span>Full Stack Developer, May 2021 - Present</span>
                      </h2>
                      <p>
                        <ul>
                          <li>
                            Created dynamic components using <strong>React and Redux</strong> to provide a custom login flow for users and
                            display proxy server information, improving Signiant’s Jet product.
                          </li>
                          <li>
                            Developed <strong>Node.js Express</strong> microservice endpoints that moved the login authentication flow from
                            Auth0 to <strong>AWS Cognito</strong>, creating significant cost savings for the company
                          </li>
                          <li>
                            Converted a <strong>Node.js</strong> EC2 microservice to use <strong>AWS Lambda</strong>, improving its scalability and stability.
                          </li>
                          <li>
                            Deployed and configured an <strong>AWS EC2</strong> instance to run <strong>Bitbucket builds</strong>, increasing the available
                            memory for microservice builds and deployment
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
                      <h2>Mitel</h2>
                      <h2>
                        <span>Product Development Intern, September 2020 - December 2020</span>
                      </h2>
                      <p>
                        <ul>
                          <li>
                            Updated Mitel’s <strong>Angular</strong> chat component to{" "}
                            <strong>WCAG 2.1 accessibility standards</strong>, adding keyboard and screen reader
                            features and enabling distribution of the product to a <strong>wider userbase</strong>.
                          </li>
                          <li>
                            Implemented a <strong>Node.js TypeScript microservice deployment solution</strong> that tests, builds
                            and deploys microservices onto multiple clouds and generates Github releases.
                          </li>
                          <li>
                            Greatly improved cloud deployment speed by running <strong>parallel deployment</strong>{" "}
                            for multiple microservices, <strong>reducing its runtime by over 60%</strong>.
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
                      <h2>Ciena</h2>
                      <h2>
                        <span>Software Developer (Network Management), January 2020 - August 2020</span>
                      </h2>
                      <p>
                        <ul>
                          <li>
                            Using <strong>Javascript</strong> in the{" "}
                            <strong>Ember.js framework,</strong> developed a user-friendly dashboard card
                            that measures and displays the photonic performance of networks
                            within Ciena’s Manage, Control and Plan software.
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
                            Ember.js, redesigning previously outdated code to use
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
                    <div className="timeline-icon color-4">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2>NSERC</h2>
                      <h2>
                        <span>Technical Developer (Web), May 2019 - December 2019</span>
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
                    <div className="timeline-icon color-5">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2>Carleton University</h2>
                      <h2>
                        <span>Software Development Intern, May 2018 - Jul. 2018</span>
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
