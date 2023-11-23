import React from "react";
import { Images } from "../assets/Images";
import HomeBestSellerCard from "./HomeBestSellerCard";

function HomeBestSellers() {
  return (
    <div className="pl-[195px] pr-[121px] ">
      <div className="flex flex-col items-center gap-[10px] py-[80px]">
        <h4 className="text-[20px] text-[#737373]">Featured Products</h4>
        <h2 className="text-[24px] font-bold">BESTSELLER PRODUCTS</h2>
        <h4 className="text-[14px] text-[#737373]">
          Problems trying to resolve the conflict between
        </h4>
      </div>
      <div className="products-grid">
        <HomeBestSellerCard />
      </div>
    </div>
  );
}

export default HomeBestSellers;
