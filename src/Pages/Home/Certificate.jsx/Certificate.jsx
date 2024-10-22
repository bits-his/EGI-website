import React from "react";
import Certified from "./Certified";
import { AiOutlineRead } from "react-icons/ai";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { MdCastForEducation } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";

export default function Certificate() {
  return (
    <div>
      <div className="row m-0 p-0">
        <Certified
          icon={<FaChalkboardTeacher />}
          style="certificate"
          heading=" Spacious Classrooms"
          time={150}
          description="Provide an open, comfortable learning environment with ample space for movement, interaction, and engagement, fostering focus and collaboration"
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
          icon={<FaComputer />}
          style="certificate2"
          heading="Computer Lab"
          description="The Computer Lab offers students access to computers and software for hands-on learning, research, and digital skill development"
          time={300}
        />
      </div>
    </div>
  );
}
