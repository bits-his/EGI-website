import React from "react";
import Certified from "./Certified";
import { AiOutlineRead } from "react-icons/ai";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { MdCastForEducation } from "react-icons/md";

export default function Certificate() {
  return (
    <div>
      <div className="row m-0 p-0">
        <Certified
          icon={<FaChalkboardTeacher />}
          style="certificate"
          heading="Certified Teachers"
          time={150}
          description="Certified teachers dedicated to fostering academic excellence and personal growth in every student"
        />
        <Certified
          icon={<AiOutlineRead />}
          style="certificate2"
          heading="Book & Library"
          description=" Cozy, Extensive library offering a curated selection of books designed to inspire curiosity, foster learning, and ignite imagination in students"
          time={200}
        />
        <Certified
          icon={<MdCastForEducation />}
          heading="Learning Environment"
          description="A supportive and stimulating learning environment designed to encourage creativity, critical thinking, and academic growth in every student"
          style="certificate"
          time={250}
        />
        <Certified
          icon={<PiStudentBold />}
          style="certificate2"
          heading="Certification"
          description="Recognized certification ensuring high educational standards and a commitment to excellence in teaching and student development"
          time={300}
        />
      </div>
    </div>
  );
}
