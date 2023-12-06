import React from "react";

function CategoryCard({ category }) {
  return (
    <div
      className="flex flex-col justify-center items-center bg-cover bg-center w-[216px] h-[223px] relative leading-[24px] hover:scale-110 hover:ease-out duration-300"
      style={{ backgroundImage: `url('${category.img}')` }}
    >
      <p className="text-white text-base font-bold  ">{category.category}</p>
      <p className="text-white text-sm font-normal  ">{category.number}</p>
      <div className="bg-neutral-900 bg-opacity-25 absolute w-full h-full"></div>
    </div>
  );
}

export default CategoryCard;
