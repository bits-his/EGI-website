import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import photoSlider1 from "../../Assets/ymastudent.jpeg";
import photoSlider2 from "../../Assets/ymastudent2.jpeg";
import { Button, Col, Row } from "react-bootstrap";
import "./home.css";
import home from "../../Assets/student__2_-removebg-preview.png";
import { Link } from "react-router-dom";

export default function PhotoSlider() {
  const [slider, setSlider] = useState([
    {
      attechment: photoSlider1,
      title: "Yazeed Memorial Academy",
      content:
        "A certified institution offering quality primary and secondary education, focused on academic excellence, character development, and holistic growth",
    },
    {
      attechment: photoSlider2,
      title: "Yazeed Memorial Academy",
      content:
        "A certified institution offering quality primary and secondary education, focused on academic excellence, character development, and holistic growth",
    },
  ]);

  return (
    <>
      <Carousel data-bs-theme="dark" indicators={false} interval={2000}>
        {slider?.map((slide) => (
          <Carousel.Item>
            <div
              className="hero"
              style={{
                backgroundImage: `url(${slide.attechment || "../../Assets/ymastudent.jpeg"
                  })`,
              }}
            >
              <div className="home">
                <div className="d-flex align-items-center">
                  <div>
                    <h1>{slide?.title}</h1>
                    <p>{slide?.content}</p>
                    <button>
                      <Link to="#">Learn More</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>


          </Carousel.Item>
        ))}
      </Carousel>
      {/* <div className="main-container">
        <div className="blur-circle1"></div>
        <div className="blur-circle2"></div>

        <div className="landing-page">
          <div className="content">
            <div className="containered">
              <div className="info">
                <h1>
                  Yazeed <br /> Memorial Academy
                </h1>
                <p>
                  A certified institution offering quality primary and secondary
                  education, focused on academic excellence, character
                  development, and holistic growth
                </p>
                <button>Learn More</button>
              </div>
              <div className="image">
                <img className="main-image" src={home} />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
