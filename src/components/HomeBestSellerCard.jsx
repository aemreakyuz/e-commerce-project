import React from "react";
import { Images } from "../assets/Images";
import { Data } from "../assets/Data";

function HomeBestSellerCard({ product }) {
  return (
    <div className="flex gap-[50px] flex-wrap items-center justify-center pb-[80px]">
      <div key={product.key} className="">
        <img
          src={product.img}
          alt={product.product}
          className="w-[239px] h-[427px] object-cover"
        />
        <div className="flex flex-col items-center py-[30px] gap-[10px]">
          <h5 className="text-[16px] font-semibold">{product.collection}</h5>

          <p className="text-[14px] text-[#737373] font-bold">
            {product.product}
          </p>
          <div className="flex gap-[5px] py-[5px] px-[3px] text-[16px] font-bold">
            <p className="text-[#BDBDBD]"> {product.price}</p>
            <p className="text-[#23856D]"> {product.discountedPrice}</p>
          </div>
          <div className="flex gap-[6px]">
            {product.colors.map((color, index) => (
              <img key={index} src={color} alt={`Color ${index}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBestSellerCard;
