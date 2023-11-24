import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import NavBar from "../layout/NavBar";
import HomeBestSellerCard from "../components/HomeBestSellerCard";
import Icons from "../components/Icons";
import ProductListCard from "../components/ProductListCard";
import ProductList from "../layout/ProductList";
import { Data } from "../assets/Data";

function ProductListPage() {
  return (
    <div className="">
      <Header />
      <NavBar />
      <ProductList />
      <Icons />
      <Footer />
    </div>
  );
}

export default ProductListPage;
