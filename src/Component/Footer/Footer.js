import "./footer.css";
import logo from "../../Assets/caliphate_logo.png";
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
                  The Caliphate is dedicated to providing quality education and
                  fostering holistic development in students, preparing them for
                  future success
                </p>
              </div>
              <div className="footer-contact">
                <ul className="contact-list">
                  <li className="contact-item">
                    <span className="contact-icon">
                      <HiOutlineMailOpen />
                    </span>
                    <span className="contact-text">
                      <a
                        href="mailto:caliphateschools2020@yahoo.com"
                        className=""
                      >
                        caliphateschools2020@yahoo.com
                      </a>
                    </span>
                  </li>
                  <li className="contact-item">
                    <span className="contact-icon">
                      <LiaPhoneVolumeSolid />
                    </span>
                    <span className="contact-text">
                      <a href="tel: 08080802367">+2348080802367 </a>
                    </span>
                  </li>
                  {/* <li className="contact-item">
                    <span className="contact-icon">
                      <LiaPhoneVolumeSolid />
                    </span>
                    <span className="contact-text">
                      <a href="tel: 08065531596">+2348065531596 </a>
                    </span>
                  </li>
                  <li className="contact-item">
                    <span className="contact-icon">
                      <LiaPhoneVolumeSolid />
                    </span>
                    <span className="contact-text">
                      <a href="tel: 08148004490">+2348148004490 </a>
                    </span>
                  </li> */}
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
                    <Link to="/"> About Us</Link>
                  </li>
                  <li>
                    <Link to="/">Event</Link>
                  </li>
                  <li>
                    <Link to="/">Blog </Link>
                  </li>
                  <li>
                    <Link to="/">Courses</Link>
                  </li>
                  <li>
                    <Link to="/">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-4 ps-sm-5 mb-5 col-lg-3 mt-xl-5 col-xl-2">
              <div className="footer-services">
                <div className="footer-links-heading">
                  <h2>Programs</h2>
                </div>
                <ul className="service-list">
                  <li>
                    <Link to="#">Pre Nursery Section</Link>
                  </li>
                  <li>
                    <Link to="#">Nursery Section</Link>
                  </li>
                  <li>
                    <Link to="#">Primary Section</Link>
                  </li>
                  <li>
                    <Link to="#">Islamiyya Section</Link>
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
                          Plot 1103, Setlite Town, Tudun Yola, Kabuga Kano
                        </div>
                      </li>
                      {/* <li>
                        <div>
                          
                          <IoLocationSharp />
                          Afforestation Road, Unguwar Jakada Dorayi Babba,Kano
                        </div>
                      </li> */}
                      {/* <li>
                        <div>
                         
                          <IoLocationSharp />
                          No. 11 Hablan House, Rijiyar Zaki Off Gwarzo Road,
                          Kano
                        </div>
                      </li> */}
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
                <li className="legal-item">Copyright © {date} Caliphate</li>
              </ul>
              <div className="footer-copyright">
                <a
                  href="http://elscholar.ng"
                  className="text-light text-decoration-none"
                >
                  <h2>Powered by Elite Academic Tech</h2>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
