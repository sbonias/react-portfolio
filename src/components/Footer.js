/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import '../App.css';
// importing fontawesome libraries for icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="container"></div>
      {/* <!-- github link --> */}
      <a href="https://github.com/sbonias/" target="_blank">
        <span className="text-white">
          Github &nbsp;
          {/* <i className="text-white fa fa-github fa-lg"></i> */}
          <FontAwesomeIcon icon={faGithub} />
        </span>
      </a>
      {/* <!-- divider --> */}
      <span className="text-white"> &nbsp;|&nbsp; </span>
      {/* <!-- linkedin link --> */}
      <a
        href="https://www.linkedin.com/in/sam-bonias-064934194"
        target="_blank"
      >
        <span className="text-white">
          LinkedIn &nbsp;
          <FontAwesomeIcon icon={faLinkedinIn} />
          {/* <i className="text-white fa fa-linkedin fa-md"></i> */}
        </span>
      </a>
      {/* <!-- divider --> */}
      <span className="text-white"> &nbsp;|&nbsp; </span>
      {/* <!-- resume link --> */}
      <a
        href="https://docs.google.com/document/d/160xYP5v_EW6ak_HxVfU16ciec7NTnsB6qZyULshmMm0/edit?usp=sharing"
        target="_blank"
      >
        <span className="text-white">
          Resume &nbsp;
          {/* <i className="text-white fa fa-book fa-md"></i> */}
          <FontAwesomeIcon icon={faBook} />
        </span>
      </a>
      {/* </div> */}
    </footer>
  );
}

export default Footer;
