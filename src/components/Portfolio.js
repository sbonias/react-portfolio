/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import '../App.css';

function Portfolio() {
  return (
    <div>
      <div className="portfolio">
        <div className="container" id="portfolio">
          <div className="card" style={{ width: '100%', padding: 20 }}>
            <h1 className="text-center" style={{ fontWeight: 'bold' }}>
              Portfolio
            </h1>
            {/*Added in horizontal line to separate content*/}
            <hr className="horizontal-line" style={{ borderWidth: 4 }} />
            <br />
            <div className="row">
              {/*Card 1*/}
              <div
                className="col-lg-4 col-md-4 col-sm-12"
                style={{ marginBottom: 10 }}
              >
                <div className="card" style={{ width: '18rem' }}>
                  <img
                    src={require('../assets/images/virus.jpg')}
                    className="card-img-top img-fluid"
                    alt="monitor with code"
                    style={{ height: 190 }}
                  />
                  <button
                    type="button"
                    className="btn btn-info button"
                    data-toggle="modal"
                    data-target="#covid"
                  >
                    COVID-19 Tracker
                  </button>
                </div>
              </div>
              {/*Card 2*/}
              <div
                className="col-lg-4 col-md-4 col-sm-12"
                style={{ marginBottom: 10 }}
              >
                <div className="card" style={{ width: '18rem' }}>
                  <img
                    src={require('../assets/images/earth.jpg')}
                    className="card-img-top img-fluid"
                    alt="earth at night"
                  />
                  <button
                    type="button"
                    className="btn btn-info button"
                    data-toggle="modal"
                    data-target="#weather"
                  >
                    Weather Dashboard
                  </button>
                </div>
              </div>
              {/*Card 3*/}
              <div
                className="col-lg-4 col-md-4 col-sm-12"
                style={{ marginBottom: 10 }}
              >
                <div className="card" style={{ width: '18rem' }}>
                  <img
                    src={require('../assets/images/code.jpg')}
                    className="card-img-top img-fluid"
                    alt="water surface"
                  />
                  <button
                    href="button"
                    className="btn btn-info button"
                    data-toggle="modal"
                    data-target="#password"
                  >
                    Password Generator
                  </button>
                </div>
              </div>
              {/*Card 4*/}
              <div
                className="col-lg-12 col-md-12 col-sm-12"
                style={{ marginBottom: 10 }}
              >
                <div className="card" style={{ width: '18rem' }}>
                  <img
                    src={require('../assets/images/reading.jpg')}
                    className="card-img-top img-fluid"
                    alt="child reading a book"
                  />
                  <button
                    type="button"
                    className="btn btn-info button"
                    data-toggle="modal"
                    data-target="#kidbooktivist"
                  >
                    Kid Booktivist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Modal 1 */}
        <div
          className="modal fade"
          id="covid"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="covid"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="covid">
                  Description
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                The COVID-19 Tracker is an application that assists
                organizations across NH in administering their COVID-19
                screenings and also provides employers as well as employees with
                important resources, communications, and data surrounding the
                pandemic.
              </div>
              <div className="modal-footer">
                <a
                  href="https://team-1-unh-bootcamp.github.io/Group-Project-1/index.html"
                  target="_blank"
                  type="button"
                  className="btn btn-info"
                >
                  Visit the app
                </a>
                <a
                  href="https://github.com/Team-1-UNH-Bootcamp/Group-Project-1"
                  target="_blank"
                  type="button"
                  className="btn btn-info"
                >
                  View code repository
                </a>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Modal 2 */}
        <div
          className="modal fade"
          id="weather"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="weather"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="weather">
                  Description
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                The Weather Dashboard is an application that retrieves data from
                the OpenWeather API and allows for user specified city searches
                that returns the weather for the current day in addition to a 5
                day forecast. The city search is logged and retained so the user
                is able to view the cities they have searched. The application
                also displays icons representing the weather for enhanced visual
                presentation.
              </div>
              <div className="modal-footer">
                <a
                  href="https://sbonias.github.io/weather-dashboard/"
                  target="_blank"
                  type="button"
                  className="btn btn-info"
                >
                  Visit the app
                </a>
                <a
                  href="https://github.com/sbonias/weather-dashboard"
                  target="_blank"
                  type="button"
                  className="btn btn-info"
                >
                  View code repository
                </a>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Modal 3 */}
        <div
          className="modal fade"
          id="password"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="password"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="password">
                  Description
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                The Password Generator is an application that generates a random
                password based on user-selected criteria. This app will run in
                the browser and feature dynamically updated HTML and CSS powered
                by JavaScript. It also features a clean and polished user
                interface that is responsive, ensuring that it adapts to
                multiple screen sizes.
              </div>
              <div className="modal-footer">
                <a
                  href="https://sbonias.github.io/password-generator/"
                  target="_blank"
                  type="button"
                  className="btn btn-info"
                >
                  Visit the app
                </a>
                <a
                  href="https://github.com/sbonias/password-generator"
                  target="_blank"
                  type="button"
                  className="btn btn-info"
                >
                  View code repository
                </a>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Modal 4 */}
        <div
          className="modal fade"
          id="kidbooktivist"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="kidbooktivist"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="kidbooktivist">
                  Description
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                Kid Booktivist is an application for parents who are searching
                for new ways to provide their children with an important
                perspective on the world around them. This is achieved via a
                library containing children's literature that has diverse
                representation and positive social messages focused around
                activism. Users are able to sign up, login, and add books to a
                myLibrary feature, as well as add new books to the app via its
                built-in admin approval process.
              </div>
              <div className="modal-footer">
                <a
                  href="http://www.kidbooktivist.com/"
                  target="_blank"
                  type="button"
                  className="btn btn-info"
                >
                  Visit the app
                </a>
                <a
                  href="https://github.com/sbonias/Booktivist"
                  target="_blank"
                  type="button"
                  className="btn btn-info"
                >
                  View code repository
                </a>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bootstraps JS CDN reference */}
      <br />
    </div>
  );
}

export default Portfolio;
