import React from "react";
import { Images } from "../assets/Images";

function HomeBestSellerCard() {
  const items = [
    {
      img: Images.homeProductCard.productCard1,
      collection: "Graphic Design",
      product: "English Department",
      price: "$16.48",
      discountedPrice: "$6.48",
      colors: [
        Images.shapes.ellipses.blueEllipse,
        Images.shapes.ellipses.greenEllipse,
        Images.shapes.ellipses.orangeEllipse,
        Images.shapes.ellipses.blackEllipse,
      ],
      key: 1,
    },
    {
      img: Images.homeProductCard.productCard2,
      collection: "Graphic Design",
      product: "English Department",
      price: "$16.48",
      discountedPrice: "$6.48",
      colors: [
        Images.shapes.ellipses.blueEllipse,
        Images.shapes.ellipses.greenEllipse,
        Images.shapes.ellipses.orangeEllipse,
        Images.shapes.ellipses.blackEllipse,
      ],
      key: 2,
    },
    {
      img: Images.homeProductCard.productCard3,
      collection: "Graphic Design",
      product: "English Department",
      price: "$16.48",
      discountedPrice: "$6.48",
      colors: [
        Images.shapes.ellipses.blueEllipse,
        Images.shapes.ellipses.greenEllipse,
        Images.shapes.ellipses.orangeEllipse,
        Images.shapes.ellipses.blackEllipse,
      ],
      key: 3,
    },
    {
      img: Images.homeProductCard.productCard4,
      collection: "Graphic Design",
      product: "English Department",
      price: "$16.48",
      discountedPrice: "$6.48",
      colors: [
        Images.shapes.ellipses.blueEllipse,
        Images.shapes.ellipses.greenEllipse,
        Images.shapes.ellipses.orangeEllipse,
        Images.shapes.ellipses.blackEllipse,
      ],
      key: 4,
    },
    {
      img: Images.homeProductCard.productCard5,
      collection: "Graphic Design",
      product: "English Department",
      price: "$16.48",
      discountedPrice: "$6.48",
      colors: [
        Images.shapes.ellipses.blueEllipse,
        Images.shapes.ellipses.greenEllipse,
        Images.shapes.ellipses.orangeEllipse,
        Images.shapes.ellipses.blackEllipse,
      ],
      key: 5,
    },
    {
      img: Images.homeProductCard.productCard6,
      collection: "Graphic Design",
      product: "English Department",
      price: "$16.48",
      discountedPrice: "$6.48",
      colors: [
        Images.shapes.ellipses.blueEllipse,
        Images.shapes.ellipses.greenEllipse,
        Images.shapes.ellipses.orangeEllipse,
        Images.shapes.ellipses.blackEllipse,
      ],
      key: 6,
    },
    {
      img: Images.homeProductCard.productCard7,
      collection: "Graphic Design",
      product: "English Department",
      price: "$16.48",
      discountedPrice: "$6.48",
      colors: [
        Images.shapes.ellipses.blueEllipse,
        Images.shapes.ellipses.greenEllipse,
        Images.shapes.ellipses.orangeEllipse,
        Images.shapes.ellipses.blackEllipse,
      ],
      key: 7,
    },
    {
      img: Images.homeProductCard.productCard8,
      collection: "Graphic Design",
      product: "English Department",
      price: "$16.48",
      discountedPrice: "$6.48",
      colors: [
        Images.shapes.ellipses.blueEllipse,
        Images.shapes.ellipses.greenEllipse,
        Images.shapes.ellipses.orangeEllipse,
        Images.shapes.ellipses.blackEllipse,
      ],
      key: 8,
    },
  ];

  return (
    <div className="flex gap-[50px] flex-wrap items-center justify-center pb-[80px]">
      {items.map((item) => (
        <div key={item.key} className="">
          <img
            src={item.img}
            alt={item.product}
            className="w-[239px] h-[427px] object-cover"
          />
          <div className="flex flex-col items-center py-[30px] gap-[10px]">
            <h5 className="text-[16px] font-semibold">{item.collection}</h5>

            <p className="text-[14px] text-[#737373] font-bold">
              {item.product}
            </p>
            <div className="flex gap-[5px] py-[5px] px-[3px] text-[16px] font-bold">
              <p className="text-[#BDBDBD]"> {item.price}</p>
              <p className="text-[#23856D]"> {item.discountedPrice}</p>
            </div>
            <div className="flex gap-[6px]">
              {item.colors.map((color, index) => (
                <img key={index} src={color} alt={`Color ${index}`} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomeBestSellerCard;
