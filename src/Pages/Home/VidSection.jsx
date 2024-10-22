import React, { useEffect, useRef } from "react";
import ReactPlayer from "react-player/lazy";
import { Col, Row } from "reactstrap";
import ved from "../../Assets/ved.mp4";

export default function VidSection({ sectionRef }) {
  const countersRef = useRef([]);
  useEffect(() => {
    const updateCounter = (counter) => {
      const duration = counter.getAttribute("data-duration");
      const toValue = counter.getAttribute("data-to-value");
      const fromValue = counter.getAttribute("data-from-value");
      const delimiter = counter.getAttribute("data-delimiter");

      let start = parseInt(fromValue, 10);
      const end = toValue;
      const step = (end - start) / (duration / 50);

      const incrementCounter = () => {
        start += step;
        if (start >= end) {
          counter.innerText = formatNumber(end);
        } else {
          counter.innerText = formatNumber(Math.floor(start));
          setTimeout(incrementCounter, 50);
        }
      };

      const formatNumber = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter);
      };

      incrementCounter();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            updateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    countersRef.current.forEach((counter) => {
      if (counter) observer.observe(counter);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <>
      <div className="vid-container" id="event" ref={sectionRef}>
        <div className="vid-content">
          <div className="vid-content-program">
            <div
              className="vid shadow"
              data-aos="fade-right"
              data-aos-duration="200"
            >
              <ReactPlayer
                playIcon={true}
                // light={true}
                controls={true}
                url={ved}
                width={"550px"}
                height={"430px"}
              />
            </div>

            <div
              className="vid-text"
              data-aos="fade-left"
              data-aos-duration="200"
            >
              <h2>The Caliphate School Kano</h2>
              <p>
                A certified institution offering quality primary and secondary
                education, focused on academic excellence, character
                development, and holistic growth
              </p>
              <button className="register">Apply Now</button>
            </div>
          </div>

          <div className="counter-section">
            <div className="row">
              <div className="counter col-md-3 col-sm-6 col-6">
                <div className="counter-number-wrapper">
                  <span
                    className="counter-number"
                    ref={(el) => (countersRef.current[0] = el)}
                    data-duration="2000"
                    data-to-value="18"
                    data-from-value="0"
                    data-delimiter=","
                  >
                    18
                  </span>
                  <span className="counter-number-suffix"></span>
                </div>
                <div className="counter-title">Certified Teachers</div>
              </div>
              <div className="counter  col-md-3 col-sm-6 col-6">
                <div className="counter-number-wrapper">
                  <span
                    className="counter-number"
                    ref={(el) => (countersRef.current[1] = el)}
                    data-duration="2000"
                    data-to-value="400"
                    data-from-value="0"
                    data-delimiter=","
                  >
                    400
                  </span>
                </div>
                <div className="counter-title">Students</div>
              </div>
              <div className="counter col-md-3 col-sm-6 col-6">
                <div className="counter-number-wrapper">
                  <span
                    className="counter-number"
                    ref={(el) => (countersRef.current[2] = el)}
                    data-duration="2000"
                    data-to-value="30"
                    data-from-value="0"
                    data-delimiter=","
                  >
                    30
                  </span>
                </div>
                <div className="counter-title">Courses</div>
              </div>
              <div className="counter   col-md-3 col-sm-6 col-6">
                <div className="counter-number-wrapper">
                  <span
                    className="counter-number"
                    ref={(el) => (countersRef.current[3] = el)}
                    data-duration="2000"
                    data-to-value="50 "
                    data-from-value="0"
                    data-delimiter=","
                  >
                    50
                  </span>
                </div>
                <div className="counter-title">Awards Won</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
