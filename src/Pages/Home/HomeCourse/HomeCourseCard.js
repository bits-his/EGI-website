import React from "react";
import "./course.css";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaPlus, FaStar, FaStarHalf } from "react-icons/fa";
import { Button } from "reactstrap";
// import { Button } from "bootstrap";

export default function HomeCourseCard({
  attechment,
  title,
  created_at,
  content,
  time,
  location,
}) {
  return (
    <div
      className="col-lg-3 col-md-6 col-sm-12 p-0 mb-4"
      data-aos={`fade-${location}`}
      data-aos-duration={`${time}`}
      data-aos-once="false"
    >
      <div className="course shadow">
        <div className="course-img mb-3">
          <img src={attechment} alt="blog1" />
        </div>
        <div className="course-content mb-4">
          <h3>{title}</h3>
          <p>{content}</p>
          <div className="d-flex justify-content-between my-2">
            {/* <div className="rate">
              <div className="rating">
                <FaStar />

                <FaStar />

                <FaStar />

                <FaStar />

                <FaStarHalf />
              </div>
              <p>
                <span>(4.5)</span> based on 120
              </p>
            </div> */}
            {/* <div className="price">
              <span>₦135</span>
            </div> */}
          </div>
          <a
            href="https://app.thecaliphate.elscholar.ng/application-form"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Apply Now</button>
          </a>
          {/* <button>Apply Now</button> */}
        </div>
      </div>
    </div>
  );
}
