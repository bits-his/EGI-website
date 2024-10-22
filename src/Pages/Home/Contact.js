import React, { useState } from "react";

export default function Contact({ sectionRef }) {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form Submitted. Form Data:", formData);
  };
  return (
    <div ref={sectionRef} id="contact">
      <div className="p-5 mt-5 mb-5  pt-0">
        <h2 className="container-heading">Contact Us</h2>
        <div className="row">
          <div className="col-lg-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.1341486411116!2d8.454401869012885!3d11.9652127623303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae7f342194227d%3A0x1dd18cf5fb0c4b53!2sYazid%20memorial%20academy%20kano!5e0!3m2!1sen!2sng!4v1729606653012!5m2!1sen!2sng"
              width="100%"
              height="500"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-lg-6">
            <div className="mb-5 text-center">
              <strong>Any question in mind?</strong>
              <h2>Don’t Worry Contact Us</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-6">
                  <div className="form-group mb-3">
                    <label className="text-black" htmlFor="fname">
                      First name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="fname"
                      value={formData.fname}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group mb-3">
                    <label className="text-black" htmlFor="lname">
                      Last name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lname"
                      value={formData.lname}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group mb-3">
                <label className="text-black" htmlFor="email">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mb-3">
                <label className="text-black" htmlFor="message">
                  Message
                </label>
                <textarea
                  name=""
                  className="form-control"
                  id="message"
                  cols="30"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="register">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
