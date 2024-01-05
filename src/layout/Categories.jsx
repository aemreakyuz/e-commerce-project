import React from "react";
import { Data } from "../assets/Data";
import CategoryCard from "../components/CategoryCard";

function Categories() {
  const categories = Data.categories;
  return (
    <div className="flex flex-wrap gap-[15px] pb-[48px] justify-center bg-[#FAFAFA] max-sm:pt-[24px] ">
      {categories.map((category, index) => {
        return <CategoryCard category={category} key={index} />;
      })}
    </div>
  );
}

export default Categories;
