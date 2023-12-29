import React from "react";
import Header from "../layout/Header";
import NavBar from "../layout/NavBar";
import Footer from "../layout/Footer";
import Icons from "../components/Icons";
import TeamCard from "../components/TeamCard";
import { Data } from "../assets/Data";
import { Images } from "../assets/Images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import VideoPlayer from "../components/VideoPlayer";

function About({ teamMember }) {
  const threeMembers = teamMember.slice(0, 3);

  return (
    <div>
      <Header />
      <NavBar />
      <div className="flex items-center justify-between gap-10 w-[80%] mx-auto py-[112px] max-sm:text-center">
        <div className=" flex flex-col gap-[35px] items-start justify-center max-sm:items-center">
          <h5 className="text-[#252B42] text-base font-bold  max-sm:hidden">
            ABOUT COMPANY
          </h5>
          <h1 className=" text-[#252B42] text-[58px] font-bold leading-[80px] ">
            ABOUT US
          </h1>
          <h4 className="  text-[#737373] text-xl font-normal leading-[30px] ">
            We know how large objects will act,
            <br />
            but things on a small scale just do not act that way
          </h4>
          <button className="px-10 py-[15px] bg-[#23A6F0] rounded-[5px] text-white text-sm font-bold leading-[30px] ">
            Get Quote Now
          </button>
        </div>
      </div>
      <div className="flex items-center w-[75%] mx-auto gap-[60px] py-[24px] max-sm:flex-col max-sm:w-3/5 max-sm:text-center">
        <div className="flex flex-col gap-[24px]">
          <p className="text-[#E74040] text-[14px]">Problems trying</p>
          <h2 className="text-[#252B42] text-2xl font-bold ">
            Met minim Mollie non desert <br className="max-sm:hidden" /> Alamo
            est sit cliquey dolor do met sent.
          </h2>
        </div>
        <p className="text-[#737373] text-sm font-normal max-sm:text-left ">
          Problems trying to resolve the conflict between the two major realms
          of <br />
          Classical physics: Newtonian mechanics{" "}
        </p>
      </div>
      <div className="flex flex-wrap gap-[30px] w-[80%] mx-auto justify-between py-[80px] max-sm:flex-col">
        <div className="flex flex-col  gap-1 items-center">
          <p className=" text-slate-800 text-[58px] font-bold leading-[80px] ">
            15K
          </p>
          <p className="text-center text-[#737373] text-base font-bold leading-normal ">
            Happy Customers
          </p>
        </div>
        <div className="flex flex-col  gap-1 items-center">
          <p className=" text-slate-800 text-[58px] font-bold leading-[80px] ">
            150K
          </p>
          <p className="text-center text-[#737373] text-base font-bold leading-normal ">
            Montly Visitors
          </p>
        </div>
        <div className="flex flex-col  gap-1 items-center">
          <p className=" text-slate-800 text-[58px] font-bold leading-[80px] ">
            15
          </p>
          <p className="text-center text-[#737373] text-base font-bold leading-normal ">
            Countries Worldwide
          </p>
        </div>
        <div className="flex flex-col  gap-1 items-center">
          <p className=" text-slate-800 text-[58px] font-bold leading-[80px] ">
            100+
          </p>
          <p className="text-center text-[#737373] text-base font-bold leading-normal ">
            Top Partners
          </p>
        </div>
      </div>
      <VideoPlayer />
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
      <div className="flex flex-col gap-[30px] w-[80%] mx-auto items-center text-center max-sm:w-full">
        <h2 className="text-[#252B42] text-[40px] font-bold">
          Big Companies Are Here
        </h2>
        <p className="leading-[20px] w-[40%] text-[14px] text-[#737373] text-center max-sm:w-4/5">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      <Icons />
      <div className="flex justify-between bg-[#2A7CC7] flex-wrap">
        <div className="flex flex-col p-[30px] gap-y-[24px] mx-auto justify-center  text-white w-full lg:w-[40%] max-sm:text-center max-sm:p-[60px]">
          <h4 className="text-[16px] uppercase">Work with us</h4>
          <h2 className="text-[36px] font-bold leading-tight">
            Now Let's Grow Yours
          </h2>
          <p>
            The gradual accumulation of information about atomic and small-scale
            behavior during the first quarter of the 20th century.
          </p>
          <button className=" w-[130px] text-white border-2 py-[10px] px-[20px] font-bold rounded max-sm:self-center">
            Button
          </button>
        </div>
        <img
          src={Images.aboutPage.about}
          alt="about"
          className=" object-cover max-sm:hidden"
        />
      </div>
      <Footer />
    </div>
  );
}

export default About;
