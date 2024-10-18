import React from "react";
import { GrCertificate } from "react-icons/gr";
import { IoMdCheckmark, IoMdTime } from "react-icons/io";
import { LiaUserGraduateSolid } from "react-icons/lia";
import { LuShieldCheck } from "react-icons/lu";
import { SiSololearn, SiTicktick } from "react-icons/si";
import { VscGitPullRequestCreate } from "react-icons/vsc";

export default function Offer({ sectionRef }) {
  return (
    <>
      <div ref={sectionRef} id="about">
        <div className="p-3">
          <h2 className="container-heading">About Us</h2>
          <div className="row">
            <div className="col-md-12">
              <div className="offer">
                {/* <h3>What we Offer</h3> */}

                <p className="mb-4" data-aos="fade-up">
                  Yazid Memorial School is dedicated to nurturing every child's
                  potential through quality primary and secondary education. Our
                  dedicated educators foster critical thinking and creativity
                  while instilling values like respect and integrity. With
                  diverse extracurricular activities, we prepare students for
                  academic success and equip them for life’s challenges.
                </p>
                <div className="row ps-md-5">
                  <div
                    className="col-md-6 col-sm-12 offer-icon-section"
                    data-aos="fade-right"
                  >
                    <div className="offer-icon">
                      <LuShieldCheck />
                    </div>
                    <div className="offer-icon-desc">
                      <h2>Safety First</h2>
                      <p>
                        Nestled in a secure haven, where learning thrives amidst
                        care and vigilance.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-md-6 col-sm-12 offer-icon-section"
                    data-aos="fade-left"
                  >
                    <div className="offer-icon">
                      <IoMdTime />
                    </div>
                    <div className="offer-icon-desc">
                      <h2>Regular Classes</h2>
                      <p>
                        Structured learning sessions held consistently to
                        enhance knowledge and skills.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-md-6 col-sm-12 offer-icon-section"
                    data-aos="fade-right"
                  >
                    <div className="offer-icon">
                      <GrCertificate />
                    </div>
                    <div className="offer-icon-desc">
                      <h2>Experienced Educators</h2>
                      <p>
                        Skilled professionals committed to delivering quality
                        education and nurturing student growth.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-md-6 col-sm-12 offer-icon-section"
                    data-aos="fade-left"
                  >
                    <div className="offer-icon">
                      <VscGitPullRequestCreate />
                    </div>
                    <div className="offer-icon-desc">
                      <h2>Creative Lessons</h2>
                      <p>
                        Innovative and engaging lessons designed to inspire
                        imagination and foster creativity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-5 offer-side">
            <h2>welcome</h2>
            <p>jsjsjshjsjauwhjehsu</p>
          </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
