import React from "react";
import { Data } from "../assets/Data";
import FeaturedCard from "../components/FeaturedCard";

function FeaturedPosts() {
  return (
    <div className="w-4/5 flex flex-col items-center m-auto py-[112px] gap-[80px]">
      <div className="w-4/5 flex flex-col items-center gap-[10px]">
        <h4 className="text-[14px] font-bold text-[#23A6F0]">
          Practice Advice
        </h4>
        <h2 className="text-[40px] font-bold">Featured Posts</h2>
        <div className="flex justify-center items-center">
          <h5 className="w-3/5 text-[14px] text-center text-[#737373] font-normal">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </h5>
        </div>
      </div>
      <div className="flex gap-[15px]  flex-wrap justify-center ">
        {Object.values(Data.featuredPosts).map((post, index) => (
          <FeaturedCard key={index} post={post} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedPosts;
