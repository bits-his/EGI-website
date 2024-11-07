import React from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import one from "../../Assets/nagudu.png";
import two from "../../Assets/ishaq.png";
import three from "../../Assets/nazif2.png";
import { FaSquareTwitter } from "react-icons/fa6";

export default function Teams({ sectionRef }) {
  return (
    <div ref={sectionRef} id="teams">
      <section className="team">
        <div className="text-center">
          <span className="title-heading">Our Teams</span>
          <h2 className="subheading mb-5">Meet Our Teams</h2>
        </div>
        <div className="row px-lg-5">
          <div></div>
          <div className="col-lg-4 col-sm-6">
            <div className="box">
              <div>
                <img src={two} />
              </div>
              <h3>Ishaq Ibrahim </h3>
              <h5>Cheif Executive Officer</h5>
              <div className="icons">
                <a href="#">
                  <FaLinkedin />
                </a>
                <a href="#">
                  <FaFacebookSquare />
                </a>
                <a href="#">
                  <PiInstagramLogoFill />
                </a>
                {/* <a href="#">
                  <FaSquareTwitter />
                </a> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="box">
              <div>
                <img src={one} />
              </div>
              <h3>Halifa Shuaibu</h3>
              <h5>Cheif Technology Officer</h5>
              <div className="icons">
                <a href="#">
                  <FaLinkedin />
                </a>
                <a href="#">
                  <FaFacebookSquare />
                </a>
                <a href="#">
                  <PiInstagramLogoFill />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="box">
              <div>
                <img src={three} />
              </div>
              <h3>Nazif Abdullahi</h3>
              <h5>Chief Operating Officer</h5>
              <div className="icons">
                <a href="#">
                  <FaLinkedin />
                </a>
                <a href="#">
                  <FaFacebookSquare />
                </a>
                <a href="#">
                  <PiInstagramLogoFill />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="team-content"></div>
      </section>
    </div>
  );
}
