import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import NavBar from "../layout/NavBar";
import HomeBestSellerCard from "../components/HomeBestSellerCard";
import Icons from "../components/Icons";
import ProductListCard from "../components/ProductListCard";
import ProductList from "../layout/ProductList";
import { Data } from "../assets/Data";
import PaginationCmp from "../components/PaginationCmp";
import { Images } from "../assets/Images";

function ProductListPage() {
  return (
    <div className="">
      <Header />
      <NavBar />
      <div className=" flex justify-around items-center py-[24px] bg-[#FAFAFA]">
        <h2 className="text-[#252B42] text-[24px] font-bold">Shop</h2>
        <div className="flex gap-[15px]">
          <p className="text-[#252B42] text-[14px] font-bold">Home</p>
          <img src={Images.shapes.vectors.nextVector} alt="" />
          <p className="text-[#BDBDBD] text-[14px] font-bold">Shop</p>
        </div>
      </div>
      <ProductList />
      <PaginationCmp />
      <Icons />
      <Footer />
    </div>
  );
}

export default ProductListPage;
