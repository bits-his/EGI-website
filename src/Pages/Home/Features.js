import React from "react";
import FeatureCard from "./FeatureCard";
import { HiOutlineStatusOnline, HiUserGroup } from "react-icons/hi";
import { LiaSchoolSolid } from "react-icons/lia";
import { SiGoogleanalytics } from "react-icons/si";
import { FaBookOpenReader, FaMobileScreenButton } from "react-icons/fa6";
import { TbDeviceMobileMinus } from "react-icons/tb";
import { MdLanguage, MdOnlinePrediction } from "react-icons/md";
import { IoGameController, IoLanguage } from "react-icons/io5";
import { FaTools } from "react-icons/fa";

export default function Features({ sectionRef }) {
  return (
    <>
      <div ref={sectionRef} id="features">
        <div className="text-center">
          <span className="title-heading">Our Features</span>
          <h2 className="subheading">Our Featured Solutions</h2>
        </div>
        <div className="row">
          <FeatureCard
            icon={<FaBookOpenReader />}
            time={200}
            title={"Course Management"}
            content={
              "Educators and trainers can create, organize, and manage courses online. The system will support various content formats, including videos, presentations, documents, quizzes, and assignments."
            }
          />
          <FeatureCard
            icon={<HiUserGroup />}
            title={"User-Friendly Interface"}
            time={300}
            content={
              "The LMS will be designed with an intuitive and easy-to-navigate user interface to ensure learners of all ages and technological backgrounds can engage with the platform effectively."
            }
          />
          <FeatureCard
            icon={<SiGoogleanalytics />}
            time={400}
            title={"Real-Time Analytics"}
            content={
              "Instructors and administrators will have access to real-time analytics to track student progress, attendance, and overall performance."
            }
          />
          <FeatureCard
            icon={<FaMobileScreenButton />}
            time={500}
            title={"Mobile Accessibility"}
            content={
              "The LMS will be mobile-friendly, ensuring students can access learning materials and assignments via smartphones and tablets, crucial for areas with limited access to computers."
            }
          />
          <FeatureCard
            icon={<IoLanguage />}
            time={200}
            title={"Multi-Language Support"}
            content={
              "To cater to Nigeria's diverse population, the platform will support multiple languages, ensuring inclusivity for learners across different linguistic groups."
            }
          />
          <FeatureCard
            icon={<IoGameController />}
            time={300}
            title={"Gamification"}
            content={
              "To make learning more engaging, the system will include gamification elements such as leaderboards, badges, and rewards."
            }
          />
          <FeatureCard
            icon={<FaTools />}
            time={400}
            title={"Collaboration Tools"}
            content={
              "Features like discussion forums, live chat, and video conferencing will enable students and employees to collaborate with peers and instructors."
            }
          />
          <FeatureCard
            icon={<MdOnlinePrediction />}
            time={500}
            title={"Online Assessments and Certification"}
            content={
              "The platform will allow for the creation of online quizzes and exams, automatic grading, and issuing certificates upon course completion."
            }
          />
        </div>
      </div>
    </>
  );
}
