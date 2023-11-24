import React from "react";

function ProductListCard({ product }) {
  return (
    <div className="flex flex-col ">
      <img
        src={product.img}
        alt={product.name}
        className="w-[239px] h-[300px] object-cover"
      />
      <div className="flex flex-col items-center  gap-[10px] p-[25px]">
        <h5 className="text-[16px] font-semibold">{product.name}</h5>
        <p className="text-[14px] text-[#737373] font-bold">
          {product.category}
        </p>
        <div className="flex gap-[5px] py-[5px] px-[3px] text-[16px] font-bold">
          <p className="text-[#BDBDBD]">{product.price}</p>
          <p className="text-[#23856D]">{product.discountedPrice}</p>
        </div>
        <div className="flex gap-[6px]">
          {product.colors.map((color, index) => (
            <img key={index} src={color} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductListCard;
