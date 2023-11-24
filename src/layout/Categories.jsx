import React from "react";
import { Data } from "../assets/Data";
import CategoryCard from "../components/CategoryCard";

function Categories() {
  const categories = Data.categories;
  return (
    <div className="flex gap-[15px] pb-[48px] justify-center">
      {categories.map((category) => {
        return <CategoryCard category={category} />;
      })}
    </div>
  );
}

export default Categories;
