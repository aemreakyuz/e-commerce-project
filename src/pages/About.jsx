import React from "react";
import Header from "../layout/Header";
import NavBar from "../layout/NavBar";
import Footer from "../layout/Footer";
import Icons from "../components/Icons";
import TeamCard from "../components/TeamCard";
import { Data } from "../assets/Data";

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
      <Icons />
      <Footer />
    </div>
  );
}

export default About;
