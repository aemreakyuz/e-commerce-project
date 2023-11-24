import React from "react";
import { Data } from "../assets/Data";
import CategoryCard from "../components/CategoryCard";

function Categories() {
  const categories = Data.categories;
  return (
    <div className="flex flex-wrap gap-[15px] pb-[48px] justify-center bg-[#FAFAFA]">
      {categories.map((category) => {
        return <CategoryCard category={category} />;
      })}
    </div>
  );
}

export default Categories;
