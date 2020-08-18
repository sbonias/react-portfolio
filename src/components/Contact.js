import React from 'react';
// import './App.css';

function Contact() {
  /*Applied modified forms bootstrap component*/
  return (
    <div className="contact-form" id="contact">
      <div className="container">
        {/*Placed content in card*/}
        <div className="card" style={{ width: '100%', padding: 20 }}>
          <form>
            <h1 className="getintouch" style={{ fontWeight: 'bold' }}>
              Get in Touch
            </h1>
            {/*Added in horizontal line to separate content*/}
            <hr className="horizontal-line" style={{ borderWidth: 4 }} />
            <div className="row">
              <div className="col-lg-12 col-md-4 col-sm-12"></div>
              <br />
              <div className="col-lg-12 col-md8 col-sm-12 right">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="YourName"
                    name
                  />
                </div>
                <div className="form group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="YourEmail@email.com"
                    name="email"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    defaultValue={''}
                  />
                </div>
                <input
                  type="submit"
                  className="btn btn-secondary btn-block"
                  defaultValue="Send"
                  name
                />
              </div>
            </div>
            <br />
            {/*Added image*/}
            <figure>
              <img
                src={require('../assets/images/GrandCanyon_2.jpeg')}
                alt="The Grand Canyon"
                className="img-fluid"
                style={{
                  height: '60%',
                  width: '100%',
                  borderStyle: 'solid',
                  borderWidth: 'thin',
                }}
              />
            </figure>
          </form>
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default Contact;
