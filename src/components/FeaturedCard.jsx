import React from "react";
import { Data } from "../assets/Data";
import { Images } from "../assets/Images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";

function FeaturedCard({ post }) {
  return (
    <div className="w-[348px] flex flex-col">
      <img src={post.img} className="" alt="" />
      <div className="p-[25px] flex flex-col gap-[10px]">
        <div className="flex gap-[15px]  ">
          {post.categories.map((category) => {
            return (
              <div className="flex">
                <p
                  key={category}
                  className={`${
                    category === "Google" ? "text-[#8EC2F2]" : ""
                  } text-[#737373] text-[16px]`}
                >
                  {category}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-[10px]">
          <h2 className="text-[20px] text-[#252B42] leading-[30px]">
            {post.header}
          </h2>
          <p className="text-[#737373] text-[14px] leading-[20px] w-[90%] font-normal">
            {post.description}
          </p>
          <div className="flex justify-between text-[12px] text-[#737373] py-[15px]">
            <div className="flex gap-[5px] items-center">
              <FontAwesomeIcon
                icon={faCalendarDays}
                style={{ color: "#23a6f0", width: "16px" }}
              />
              <p>{post.date}</p>
            </div>
            <div className="flex gap-[5px] items-center">
              <FontAwesomeIcon icon={faComments} style={{ color: "#23856d" }} />
              <p>{post.comments}</p>
            </div>
          </div>
          <div className="flex gap-[10px]">
            <h4 className="text-[#737373] font-bold text-[14px]">
              {" "}
              Learn More
            </h4>
            <img src={Images.shapes.vectors.vectorArrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCard;
