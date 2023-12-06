import React from "react";
import Header from "../layout/Header.jsx";
import NavBar from "../layout/NavBar.jsx";
import Footer from "../layout/Footer.jsx";
import { Images } from "../assets/Images";

function Team() {
  return (
    <div>
      <Header />
      <NavBar />
      <div className="flex flex-col items-center py-[50px] gap-[15px]">
        <h4 className="text-[16px] text-[#737373] font-bold">WHAT WE DO</h4>
        <h2 className="text-[58px] text-[#252B42] font-bold">
          Innovation tailored for you
        </h2>
        <div className="flex gap-[15px]">
          <a href="/" className="text-[#252B42] text-[14px] font-bold">
            Home
          </a>
          <img src={Images.shapes.vectors.nextVector} alt="" />
          <a
            href="/productlist"
            className="text-[#BDBDBD] text-[14px] font-bold"
          >
            Shop
          </a>
        </div>
      </div>
      <div className="py-[112px] flex flex-col gap-[112px] items-center">
        <h2 className="text-[#252B42] text-[40px] font-bold">Meet Our Team</h2>
      </div>

      <Footer />
    </div>
  );
}

export default Team;
