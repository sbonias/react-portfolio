import React from 'react';
import '../App.css';

function About() {
  return (
    <div className="container" id="about">
      <br />
      {/*Placed content in card*/}
      <div className="card" style={{ width: '100%', padding: 20 }}>
        {/*First row of container*/}
        <div className="row">
          <h1
            className="About"
            style={{ marginLeft: 20, color: 'black', fontWeight: 'bold' }}
          >
            About Me
          </h1>
        </div>
        {/*Added in horizontal line to separate content*/}
        <hr className="horizontal-line" style={{ borderWidth: 4 }} />
        <br />
        {/*Second row of container*/}
        <div className="row">
          <div className="col-md-12 col-lg-6 col-sm-12">
            {/*added in picture of me*/}
            <img
              src={require('../assets/images/GrandCanyon.jpeg')}
              alt="me at the Grand Canyon"
              className="img-fluid"
              style={{
                height: '95%',
                width: '100%',
                borderStyle: 'solid',
                borderWidth: 'thin',
              }}
            />
            <span className="text-justify">At the Grand Canyon</span>
            {/*added caption to picture*/}
          </div>
          <div className="col-md-12 col-lg-6 col-sm-12">
            <p>
              Highly motivated software developer with skills in both the
              front-end as well as back-end of web applications, having earned a
              certificate in Full Stack Web Development from the University of
              New Hampshire. Known as an innovative problem solver with newly
              developed skills in HTML, CSS, Bootstrap, Bulma, Javascript,
              Node.Js, jQuery, MySQL, Sequelize, MongoDB, Mongoose, React and
              responsive web design, I continue to bridge the gap between user
              experience and technology.
            </p>
            <p>
              With a background in financial services as an Operations
              Consultant, I’ve implemented many business enhancement solutions
              driving continuous improvement to processes, systems, work-flows
              and customer responsiveness. I possess an array of technical,
              analytical, and project management skills derived from
              spearheading complex projects for a results-driven organization.
            </p>
            <p>
              It is with these skills, my expanded technical knowledge and my
              leadership that I will add value to your organization’s success.
            </p>
          </div>
        </div>
      </div>
      {/* Bootstraps JS CDN reference */}
      <br />
    </div>
  );
}

export default About;
