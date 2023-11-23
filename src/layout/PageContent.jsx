import React from "react";
import Hero from "../components/Hero";
import BottomSlider from "../components/BottomSlider";
import HomeBestSellers from "../components/HomeBestSellers";
function PageContent() {
  return (
    <div>
      <Hero />
      <HomeBestSellers />
      <BottomSlider />
    </div>
  );
}

export default PageContent;
