import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import photoSlider1 from "../../Assets/caliphatestudent1.jpg";
import photoSlider2 from "../../Assets/caliphatestudent2.jpg";
import { Button } from "react-bootstrap";
import "./home.css";
import home from "../../Assets/student__2_-removebg-preview.png";

export default function PhotoSlider({ sectionRef }) {
  const [slider, setSlider] = useState([
    {
      attachment: photoSlider1,
      title: "The Caliphate School Kano",
      content:
        "A certified institution offering quality primary and secondary education, focused on academic excellence, character development, and holistic growth",
    },
    {
      attachment: photoSlider2,
      title: "The Caliphate School Kano",
      content:
        "A certified institution offering quality primary and secondary education, focused on academic excellence, character development, and holistic growth",
    },
  ]);

  return (
    <>
      <div ref={sectionRef} id="home">
        <Carousel
          data-bs-theme="dark"
          controls={false}
          indicators={false}
          interval={2000}
        >
          {slider?.map((slide, index) => (
            <Carousel.Item key={index}>
              <div
                className="hero"
                style={{ backgroundImage: `url(${slide.attachment})` }}
              >
                <div className="home">
                  <div className="home-text">
                    <h1 data-aos="fade-right">The Caliphate School Kano</h1>
                    <p className="text-center" data-aos="fade-left">
                      {slide.content}
                    </p>
                    <div
                      className="d-flex justify-content-center"
                      data-aos="fade-up"
                    >
                      <a
                        href="https://app.yma.elscholar.ng/application-form"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="login">
                          <button className="register">Application</button>
                        </div>
                      </a>
                      <a
                        href="https://app.yma.elscholar.ng/login"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="login">
                          <button className="register">
                            Returning Student
                          </button>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
}
