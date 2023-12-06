import React from "react";
import { Images } from "../assets/Images";

function Icons() {
  const icons = [
    Images.icons.hooli,
    Images.icons.lyft,
    Images.icons.spring,
    Images.icons.stripe,
    Images.icons.amazon,
    Images.icons.reddit,
  ];

  return (
    <div className="">
      <div className="flex flex-wrap w-4/5 m-auto justify-between gap-[30px] py-[50px] ">
        {icons.map((icon) => {
          return <img src={icon} className="px-[25px]" alt="" />;
        })}
      </div>
    </div>
  );
}

export default Icons;
