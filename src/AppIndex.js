import React from "react";
import Header from "./Component/Header/Header";
import AppNavigation from "./AppNavigation";
import Footer from "./Component/Footer/Footer";

export default function AppIndex() {
  return (
    <div>
      <Header />
      <AppNavigation />
      <Footer />
    </div>
  );
}
