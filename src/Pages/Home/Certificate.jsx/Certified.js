import React from "react";

export default function Certified({ icon, heading, description, style, time }) {
  return (
    <div className="col-md-6 col-lg-3 p-0" data-aos="fade-up"
      data-aos-duration={`${time}`} data-aos-once="false">
      <div className={`${style}`}>
        <div className="certified-card-icon">{icon}</div>
        <div className="certified-text">
          <h4>{heading}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
