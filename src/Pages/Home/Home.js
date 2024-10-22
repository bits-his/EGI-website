import React from "react";
import PhotoSlider from "./PhotoSlider";
import "./home.css";
import HomeCourse from "./HomeCourse/HomeCourse";
import Certified from "./Certificate.jsx/Certified";
import Certificate from "./Certificate.jsx/Certificate";
import Offer from "./Offer";
import VidSection from "./VidSection";
import Contact from "./Contact";

export default function Home({ sections }) {
  return (
    <>
      <PhotoSlider sectionRef={sections.home} />
      <Certificate />

      <Offer sectionRef={sections.about} />

      <HomeCourse sectionRef={sections.program} />
      <VidSection sectionRef={sections.event} />
      <Contact sectionRef={sections.contact} />
    </>
  );
}
