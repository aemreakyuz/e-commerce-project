import React from "react";

function CategoryCard({ category }) {
  return (
    <div>
      <img src={category.img} alt="" />
    </div>
  );
}

export default CategoryCard;
