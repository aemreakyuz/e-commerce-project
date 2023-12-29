import React from "react";
import Header from "../layout/Header.jsx";
import NavBar from "../layout/NavBar.jsx";
import Footer from "../layout/Footer.jsx";
import { Images } from "../assets/Images";
import { Data } from "../assets/Data.jsx";
import TeamCard from "../components/TeamCard.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Team({ teamMember }) {
  const teamMembers = Data.team.slice(0, 3);
  return (
    <div className="max-sm:mx-auto">
      <Header />
      <NavBar />
      <div></div>
      <div className="flex flex-col items-center py-[50px] gap-[15px]">
        <h4 className="text-[16px] text-[#737373] font-bold">WHAT WE DO</h4>
        <h2 className="text-[58px] text-[#252B42] font-bold text-center">
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
            Team
          </a>
        </div>
      </div>
      <div className="flex flex-wrap justify-center ">
        <div className="">
          <img
            src={Images.teamPage.teamPage3}
            alt="shop"
            className="w-[700px] h-[530px] object-cover"
          />
        </div>
        <div className=" flex flex-wrap ml-[9px]   ">
          <div className="mr-[9px]  ">
            <img
              src={Images.teamPage.teamPage2}
              alt="shop"
              className="w-[360px] h-[260px] object-cover mb-[9px]"
            />
            <img
              src={Images.teamPage.teamPage5}
              alt="shop"
              className="w-[360px] h-[260px] object-cover mb-[9px]"
            />
          </div>
          <div className=" ">
            <img
              src={Images.teamPage.teamPage1}
              alt="shop"
              className="w-[360px] h-[260px] object-cover mb-[9px] "
            />
            <img
              src={Images.teamPage.teamPage4}
              alt="shop"
              className="w-[360px] h-[260px] object-cover mb-[9px]"
            />
          </div>
        </div>
      </div>
      <div className="py-[112px] w-[80%] mx-auto flex flex-col gap-[112px] items-center">
        <h2 className="text-[#252B42] text-[40px] font-bold">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center gap-[30px]  ">
          {teamMembers.map((teamMember, index) => {
            return <TeamCard teamMember={teamMember} key={index} />;
          })}
        </div>
      </div>
      <div className="flex flex-col gap-[30px] items-center  mx-auto py-[80px]">
        <h2 className="text-[#252B42] text-[40px] font-bold text-center">
          Start your 14 days free trial
        </h2>
        <h4 className="w-[50%] text-center text-[#737373] text-[14px] leading-[20px]">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </h4>
        <button className="py-[15px] px-[40px] bg-[#23A6F0] text-white text-[14px] rounded">
          Try it for free now
        </button>
        <div className="flex p-[10px] gap-[34px] text-[30px] text-[#23A6F0]">
          {Images.socials.map((social) => {
            return <FontAwesomeIcon icon={social} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Team;
