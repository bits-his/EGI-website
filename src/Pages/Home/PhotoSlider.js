import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import photoSlider2 from "../../Assets/bg4.jpg";
import photoSlider3 from "../../Assets/bg3.jpg";
import { Button } from "react-bootstrap";
import "./home.css";
export default function PhotoSlider({ sectionRef }) {
  const [slider, setSlider] = useState([
    // {
    //   attachment: photoSlider1,
    //   title: "Elite Academic Tech",
    //   content:
    //     "A certified institution offering quality primary and secondary education, focused on academic excellence, character development, and holistic growth",
    // },
    {
      attachment: photoSlider2,
      title: "Elite Academic Tech",
      content:
        "A certified institution offering quality primary and secondary education, focused on academic excellence, character development, and holistic growth",
    },
    {
      attachment: photoSlider3,
      title: "Elite Academic Tech",
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
          slide={false}
          fade={true}
        >
          {slider?.map((slide, index) => (
            <Carousel.Item key={index}>
              <div
                className="hero"
                style={{ backgroundImage: `url(${slide.attachment})` }}
              >
                <div className="blur-circle1"></div>
                <div className="blur-circle2"></div>
                <div className="home">
                  <div className="home-text">
                    <h1 data-aos="fade-right">{slide.title}</h1>
                    <p className="text-center" data-aos="fade-left">
                      {slide.content}
                    </p>
                    <div
                      className="d-flex justify-content-center"
                      data-aos="fade-up"
                    >
                      <a
                        href="#features"
                        // target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="login">
                          <button className="register">Learn More</button>
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
