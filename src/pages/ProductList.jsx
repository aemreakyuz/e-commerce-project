import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import NavBar from "../layout/NavBar";
import HomeBestSellerCard from "../components/HomeBestSellerCard";
import Icons from "../components/Icons";

function ProductList() {
  return (
    <div className="">
      <Header />
      <NavBar />
      <div className="flex flex-wrap w-4/5 m-auto">
        <HomeBestSellerCard />
      </div>
      <Icons />
      <Footer />
    </div>
  );
}

export default ProductList;
