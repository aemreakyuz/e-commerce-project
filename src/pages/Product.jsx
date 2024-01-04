import React from "react";
import Header from "../layout/Header";
import NavBar from "../layout/NavBar";
import Icons from "../components/Icons";
import Footer from "../layout/Footer";
import HomeBestSellerCard from "../components/HomeBestSellerCard";
import { Data } from "../assets/Data";

function Product() {
  const items = Data.bestSellers;

  return (
    <div>
      <Header />
      <NavBar />
      <div className=" px-[190px] bg-[#FAFAFA] mx-auto flex flex-col gap-8 text-[24px] text-[#252B42]">
        <h2 className="mx-auto font-bold py-[48px]">BESTSELLERS PRODUCTS</h2>
        <div className="flex gap-[50px] flex-wrap items-center justify-center pb-[80px]">
          {items.slice(0, 6).map((item, index) => (
            <div key={index} className="">
              <HomeBestSellerCard product={item} />
            </div>
          ))}
        </div>
      </div>
      <Icons />
      <Footer />
    </div>
  );
}

export default Product;
