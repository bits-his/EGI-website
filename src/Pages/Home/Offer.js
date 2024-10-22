import React from "react";
import { GrCertificate } from "react-icons/gr";
import { IoMdCheckmark, IoMdTime } from "react-icons/io";
import { LiaUserGraduateSolid } from "react-icons/lia";
import { LuShieldCheck } from "react-icons/lu";
import { SiSololearn, SiTicktick } from "react-icons/si";
import { VscGitPullRequestCreate } from "react-icons/vsc";
import AboutCard from "./AboutCard";

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
                  The Caliphate Schools, Kano, is a comprehensive education
                  group comprising The Caliphate Nursery and Primary School,
                  Secondary School, and Islamiyya for children and women. We
                  believe every child has innate potential that can be harnessed
                  for the benefit of both the student and society. Our
                  curriculum combines conventional subjects with vocational
                  courses, aiming to foster creativity and self-reliance. The
                  management's long-term goal is to equip students with skills
                  to face future challenges confidently.
                </p>
                <div className="row mt-5">
                  <AboutCard
                    heading="Our Mission"
                    describtion="To be the foremost institution dedicated to guiding mankind towards righteousness and lasting prosperity through education, innovation, and integrity, empowering individuals to achieve their potential in a dynamic world."
                    // img={WD}
                    time={100}
                  />
                  <AboutCard
                    heading="Our Vision"
                    describtion="To prepare individuals for life's challenges by providing innovative platforms for effective teaching, learning, and growth, ensuring every student is equipped with the skills and knowledge to thrive in a dynamic world."
                    // img={CSD}
                    time={200}
                  />
                  <AboutCard
                    heading="Core Values "
                    describtion="Our core values guide our institution, emphasizing integrity, excellence, inclusivity, and innovation. They inspire a supportive learning environment where every individual can thrive and positively contribute to society."
                    time={300}
                  />
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
