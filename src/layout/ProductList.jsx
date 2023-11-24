import React from "react";
import ProductListCard from "../components/ProductListCard";
import { Data } from "../assets/Data";

function ProductList() {
  const products = Data.productList;

  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {products.map((product) => {
        return <ProductListCard product={product} />;
      })}
    </div>
  );
}

export default ProductList;
