import React from "react";
import Header from "../layout/Header";
import NavBar from "../layout/NavBar";
import Footer from "../layout/Footer";
import Icons from "../components/Icons";
import TeamCard from "../components/TeamCard";
import { Data } from "../assets/Data";
import { Images } from "../assets/Images";

function About({ teamMember }) {
  const threeMembers = teamMember.slice(0, 3);
  return (
    <div>
      <Header />
      <NavBar />

      <div className="flex flex-col gap-[112px] py-[112px]">
        <div className="flex flex-col gap-[10px] items-center">
          <h2 className="text-[40px] text-[#252B42] font-bold">
            Meet Our Team
          </h2>
          <p className="text-center text-[14px] text-[#737373] leading-[20px]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
        <div className="flex flex-wrap gap-[30px] justify-center">
          {threeMembers.map((teamMember) => {
            return <TeamCard teamMember={teamMember} />;
          })}
        </div>
      </div>
      <div className="flex flex-col gap-[30px] w-[80%] mx-auto items-center text-center">
        <h2 className="text-[#252B42] text-[40px] font-bold">
          Big Companies Are Here
        </h2>
        <p className="leading-[20px] w-[40%] text-[14px] text-[#737373] text-center">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      <Icons />
      <div className="flex justify-between bg-[#2A7CC7] flex-wrap">
        <div className="flex flex-col p-[30px] gap-y-[24px] mx-auto justify-center  text-white w-full lg:w-[40%]">
          <h4 className="text-[16px] uppercase">Work with us</h4>
          <h2 className="text-[36px] font-bold leading-tight">
            Now Let's Grow Yours
          </h2>
          <p>
            The gradual accumulation of information about atomic and small-scale
            behavior during the first quarter of the 20th century.
          </p>
          <button className=" w-[130px] text-white border-2 py-[10px] px-[20px] font-bold rounded">
            Button
          </button>
        </div>
        <img
          src={Images.aboutPage.about}
          alt="about"
          className=" object-cover"
        />
      </div>
      <Footer />
    </div>
  );
}

export default About;
