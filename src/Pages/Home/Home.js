import React from "react";
import PhotoSlider from "./PhotoSlider";
import "./home.css";
import HomeCourse from "./HomeCourse/HomeCourse";
import Certified from "./HomeCourse/Certificate.jsx/Certified";
import Certificate from "./HomeCourse/Certificate.jsx/Certificate";
import Offer from "./Offer";

export default function Home() {
  return (
    <>
      <PhotoSlider />
      <Certificate />
      <Offer /> 
      <HomeCourse />
    </>
  );
}
