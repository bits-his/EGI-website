import React from "react";
import HomeCourseCard from "./HomeCourseCard";
import welcome1 from "../../../Assets/group.png"
import welcome2 from "../../../Assets/welcome2.jpg"
import welcome3 from "../../../Assets/welcome3.jpg"
// import welcome4 from "../../../Assets/photoslider2.jpg"

export default function HomeCourse() {
  return (
    <>
      <div className="Home-course-Card p-5">
        <h2 className="container-heading">Featured Courses</h2>
        <div className="row">
          <HomeCourseCard
            attechment={welcome1}
            title="Foundamental Principle of Agricbusiness"
            content="To be a leading platform for experiential learning, where students gain the necessary competencies to excel in their chosen fields and contribute meaningfully to the global workforce."
          />
          <HomeCourseCard
            attechment={welcome1}
            title="Farm Operations Management"
            content="To be a leading platform for experiential learning, where students gain the necessary competencies to excel in their chosen fields and contribute meaningfully to the global workforce."
          />
          <HomeCourseCard
            attechment={welcome1}
            title="Vegetable Farm Enterprises"
            content="To be a leading platform for experiential learning, where students gain the necessary competencies to excel in their chosen fields and contribute meaningfully to the global workforce."
          />
          <HomeCourseCard
            attechment={welcome1}
            title="Livestock Farm Enterprises"
            content="To be a leading platform for experiential learning, where students gain the necessary competencies to excel in their chosen fields and contribute meaningfully to the global workforce."
          />
          <HomeCourseCard
            attechment={welcome1}
            title="Farm Products Costing"
            content="To be a leading platform for experiential learning, where students gain the necessary competencies to excel in their chosen fields and contribute meaningfully to the global workforce."
          />
          <HomeCourseCard
            attechment={welcome1}
            title="Farm Stock Management"
            content="To be a leading platform for experiential learning, where students gain the necessary competencies to excel in their chosen fields and contribute meaningfully to the global workforce."
          />
        </div>
      </div>
    </>
  );
}
