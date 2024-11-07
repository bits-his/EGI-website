import React from "react";

export default function Aboutus({ sectionRef }) {
  return (
    <div ref={sectionRef} id="about">
      <div className="text-center">
        <span className="title-heading">About us</span>
        <h2 className="subheading">
          We are building the school Management system
        </h2>
      </div>
      <div className="about px-5">
        <p>
          With the rapid digitalization of education and corporate training
          globally, Nigeria's educational and corporate sectors must also adopt
          advanced Learning Management Software (LMS) to facilitate quality and
          accessible learning. This proposal outlines the need for and
          implementation of a robust LMS that will serve educational
          institutions, government bodies, and private sector organizations. The
          LMS will aim to improve the quality of education and professional
          development, enhance productivity, and offer a flexible and scalable
          solution for e-learning in Nigeria.
        </p>
      </div>
    </div>
  );
}
