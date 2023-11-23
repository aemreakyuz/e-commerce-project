import React from "react";
import Hero from "./Hero";
import BottomSlider from "../components/BottomSlider";
import HomeBestSellers from "./HomeBestSellers";
import Footer from "./Footer";

import FeaturedPosts from "./FeaturedPosts";
function PageContent() {
  return (
    <div>
      <Hero />
      <HomeBestSellers />
      <BottomSlider />
      <FeaturedPosts />
      <Footer />
    </div>
  );
}

export default PageContent;
