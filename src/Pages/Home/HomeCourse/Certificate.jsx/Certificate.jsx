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
          description="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
        />
        <Certified
          icon={<AiOutlineRead />}
          style="certificate2"
          heading="Book & Library"
          description="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
        />
        <Certified
          icon={<MdCastForEducation />}
          heading="Special Education"
          description="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic"
          style="certificate"
        />
        <Certified
          icon={<PiStudentBold />}
          style="certificate2"
          heading="Certification"
          description="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic"
        />
      </div>
    </div>
  );
}
