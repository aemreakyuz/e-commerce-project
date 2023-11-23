import React from "react";
import Hero from "./Hero";
import BottomSlider from "../components/BottomSlider";
import HomeBestSellers from "./HomeBestSellers";
import Footer from "./Footer";
function PageContent() {
  return (
    <div>
      <Hero />
      <HomeBestSellers />
      <BottomSlider />
      <Footer />
    </div>
  );
}

export default PageContent;
