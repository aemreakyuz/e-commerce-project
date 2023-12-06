import React from "react";

function TeamCard({ teamMember }) {
  return (
    <div>
      <img
        src={teamMember.img}
        alt={teamMember.name}
        className="w-[316px] h-[231px]"
      />
      <div className="p-[30px] flex flex-col gap-[10px] items-center">
        <h2 className="text-[#252B42] text-[16px] font-bold">
          {teamMember.name}
        </h2>
        <h3 className="text-[#737373] text-[14px] font-bold">
          {teamMember.role}
        </h3>
        <div className="flex">
          {teamMember.socials.map((social) => {
            return <img src={social} alt="social" />;
          })}
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
