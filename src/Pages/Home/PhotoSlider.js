import React from "react";
import Carousel from "react-bootstrap/Carousel";
import photoSlider1 from "../../Assets/photoslider1.jpg";
import photoSlider2 from "../../Assets/photoslider2.jpg";
import { Button } from "react-bootstrap";
import home from "../../Assets/student__2_-removebg-preview.png";

export default function PhotoSlider() {
  return (
    <>
      {/* <Carousel
      data-bs-theme="dark"
      indicators={false}
      interval={2000}
    >
      <Carousel.Item>
        <div className="home">
          <img className="d-block w-100" src={photoSlider1} alt="First slide" />
          <div className="home-text">
            <h3 data-animation="animated bounceInLeft">
              Welcome
              <br />
              To Our<span>University</span>
            </h3>
            <p data-animation="animated bounceInRight">
              We belive nothing is more important than education. The best
              learning institution
            </p>
            <Button>Learn more</Button>
          </div>
        </div>

        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={photoSlider2} alt="Second slide" />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Button>Learn more</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */}
      <div className="main-container">
        <div className="blur-circle1"></div>
        <div className="blur-circle2"></div>

        <div className="landing-page">
          <div className="content">
            <div className="containered">
              <div className="info">
                <h1>Enterprise <br /> Grooming Institute</h1>
                <p>
                  A Certified Enterprise Development and Bussiness Development
                  Service Provider
                </p>
                <button>Learn More</button>
              </div>
              <div className="image">
                <img className="main-image" src={home} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
