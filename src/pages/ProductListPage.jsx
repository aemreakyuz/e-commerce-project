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
import Categories from "../layout/Categories";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderAll, faListCheck } from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "reactstrap";

function ProductListPage() {
  return (
    <div className="">
      <Header />
      <NavBar />
      <div className=" flex justify-around items-center py-[24px] bg-[#FAFAFA] max-sm:flex-col max-sm:gap-8">
        <h2 className="text-[#252B42] text-[24px] font-bold">Shop</h2>
        <div className="flex gap-[15px]">
          <p className="text-[#252B42] text-[14px] font-bold">Home</p>
          <img src={Images.shapes.vectors.nextVector} alt="" />
          <p className="text-[#BDBDBD] text-[14px] font-bold">Shop</p>
        </div>
      </div>
      <Categories />
      <div className="flex justify-between py-[24px] items-center w-[80%] mx-auto max-sm:flex-col max-sm:gap-[24px]">
        <p className="text-[#737373] font-bold">Showing all 12 results</p>
        <div className="flex items-center gap-3">
          <p className="text-neutral-500 text-sm font-bold">Views:</p>
          <FontAwesomeIcon
            icon={faBorderAll}
            className="p-2 border rounded cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faListCheck}
            className="p-2 border rounded cursor-pointer"
          />
        </div>
        <div className="flex items-center gap-[15px]">
          <div className="border rounded px-[20px] py-[10px] text-sm text-[#737373] bg-[#F9F9F9]">
            Popularity
          </div>
          <button className="bg-[#23A6F0] px-[20px] py-[10px] text-white text-sm font-bold rounded">
            Filter
          </button>
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
