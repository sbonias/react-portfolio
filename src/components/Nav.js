import React from 'react';
// import './App.css';

function Nav() {
  return (
    <header id="home">
      <nav className="navbar navbar-expand-lg navbar-light bg-light border border-dark">
        <a
          className="navbar-brand"
          style={{
            background: 'teal',
            color: 'white',
            padding: 25,
            fontWeight: 'bold',
            marginLeft: 50,
            fontSize: 26,
            marginTop: '-8px',
            marginBottom: '-8px',
          }}
          href="#home"
        >
          Sam Bonias
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              {/*"&nbsp" forces html to add an extra space*/}
              <a
                className="nav-link"
                style={{ color: 'darkslategray' }}
                href="#about"
              >
                About&nbsp;|<span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              {/*"&nbsp" forces html to add an extra space*/}
              <a
                className="nav-link"
                style={{ color: 'darkslategray' }}
                href="#portfolio"
              >
                Portfolio&nbsp;|
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                style={{ color: 'darkslategray' }}
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
