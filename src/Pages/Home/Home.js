import React from "react";
import PhotoSlider from "./PhotoSlider";
import "./home.css";
import Contact from "./Contact";
import Features from "./Features";
import Teams from "./Teams";
import Aboutus from "./Aboutus";

export default function Home({ sections }) {
  return (
    <>
      <PhotoSlider sectionRef={sections.home} />
      <Aboutus sectionRef={(sections.about)} />
      <Features sectionRef={sections.features} />
      <Teams sectionRef={sections.teams} />
      <Contact sectionRef={sections.contact} />
    </>
  );
}
