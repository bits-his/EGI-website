import React from "react";
import PhotoSlider from "./PhotoSlider";
import "./home.css";
import HomeCourse from "./HomeCourse/HomeCourse";
import Certified from "./Certificate.jsx/Certified";
import Certificate from "./Certificate.jsx/Certificate";
import Offer from "./Offer";
import VidSection from "./VidSection";

export default function Home() {
  return (
    <>
      <PhotoSlider />
      <Certificate />
      <Offer /> 
      <HomeCourse />
      {/* <VidSection /> */}
    </>
  );
}
