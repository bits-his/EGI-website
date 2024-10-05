import "./footer.css";
import logo from "../../Assets/logo.png";
import { HiOutlineMailOpen } from "react-icons/hi";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
// import { FaHotel } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 ps-sm-5 mb-5 col-lg-3 col-xl-4">
              <div className="footer-logo">
                <img src={logo} alt="kirs" />
              </div>
              <div className="footer-description">
                <p>
                  lorem ipsum dolor sit amet, consectetur adip incididunt ut
                  labore et justo et justo od
                </p>
              </div>
              <div className="footer-contact">
                <ul className="contact-list">
                  <li className="contact-item">
                    <span className="contact-icon">
                      <HiOutlineMailOpen />
                    </span>
                    <span className="contact-text">
                      <a href="mailto:info@kirmas.kn.gov.ng" className="">
                        info@school.ng
                      </a>
                    </span>
                  </li>
                  <li className="contact-item">
                    <span className="contact-icon">
                      <LiaPhoneVolumeSolid />
                    </span>
                    <span className="contact-text">
                      <a href="tel: 07073333375">+2347099999333 </a>
                    </span>
                  </li>
                  <li className="contact-item">
                    <span className="contact-icon">
                      <LiaPhoneVolumeSolid />
                    </span>
                    <span className="contact-text">
                      <a href="tel: 07073333376">+2347033392833 </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-4 ps-sm-5 mb-5 col-lg-3 mt-xl-5 col-xl-2">
              <div className="footer-links">
                <div className="footer-links-heading">
                  <h2>Quick Links</h2>
                </div>
                <ul className="links-list">
                  <li>
                    <Link to="/about"> About Us</Link>
                  </li>
                  <li>
                    <Link to="//event">Event</Link>
                  </li>
                  <li>
                    <Link to="/newsletter">Blog </Link>
                  </li>
                  <li>
                    <Link to="/news">Courses</Link>
                  </li>
                  <li>
                    <Link to="/photos">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-4 ps-sm-5 mb-5 col-lg-3 mt-xl-5 col-xl-2">
              <div className="footer-services">
                <div className="footer-links-heading">
                  <h2>Courses</h2>
                </div>
                <ul className="service-list">
                  <li>
                    <Link to="#">Foundamental Principle of Agricbusiness</Link>
                  </li>
                  <li>
                    <Link to="#">Farm Operations Management</Link>
                  </li>
                  <li>
                    <Link to="#">Vegetable Farm Enterprises</Link>
                  </li>
                  
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 ps-sm-5 mb-5 col-lg-3 mt-xl-5 col-xl-4">
              <div className="footer-section footer-office-hours">
                <div id="newsletter">
                  <div className="footer-links-heading">
                    <h2>Stay Connected</h2>
                  </div>
                  <form id="subscribe">
                    <input
                      type="email"
                      id="subscriber-email"
                      placeholder="Enter Email Address"
                    />
                    <input type="submit" value="Subscribe" id="btn-scribe" />
                  </form>

                  <div class="social-links social-2">
                    <a href="">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="">
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a href="">
                      <i class="fab fa-tumblr"></i>
                    </a>
                    <a href="">
                      <i class="fab fa-reddit-alien"></i>
                    </a>
                  </div>

                  <div id="address">
                    <h4>Office Location</h4>
                    <ul>
                      <li>
                        <div>
                          {" "}
                          Nigerian Contacts:
                          <br />
                          <IoLocationSharp />
                          Plot 100, Fate Road Ilorin, Kwara state
                        </div>
                      </li>
                      <li>
                        <div>
                          {/* Delhi
                          <br /> */}
                          <IoLocationSharp />
                          Cadastral Area, Abuja, FCT
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="hr"></div>
            <div className="footer-bottom">
              <ul className="legal-list">
                <li className="legal-item">
                  <a href="#">Privacy Policy</a>
                </li>
                <span>|</span>
                <li className="legal-item">
                  <a href="#">Terms and Conditions</a>
                </li>
                <span>|</span>
                <li className="legal-item">Copyright © {date} EGI</li>
              </ul>
              <div className="footer-copyright">
                <h2>Developed by Brainstorm IT Solutions</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
