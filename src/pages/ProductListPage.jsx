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

function ProductListPage() {
  return (
    <div className="">
      <Header />
      <NavBar />
      <ProductList />
      <PaginationCmp />
      <Icons />
      <Footer />
    </div>
  );
}

export default ProductListPage;
