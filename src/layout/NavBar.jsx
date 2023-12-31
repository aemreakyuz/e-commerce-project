import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function NavBar() {
  return (
    <div className="flex flex-wrap pl-[38px] pr-[17px] justify-between py-[12px] gap-y-2 max-sm:px-0  max-sm:justify-center ">
      <div className="flex flex-wrap items-center gap-y-2 max-sm:flex-col  ">
        <div className="max-sm:flex max-sm:justify-between">
          <h1 className="font-bold text-[24px] pr-[79px]">Bandage</h1>
          <div className="flex gap-8 items-center sm:hidden ">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ color: "#23a6f0" }}
            />

            <div className="flex items-center gap-1">
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ color: "#23a6f0" }}
              />
              <span className="text-[#23A6F0]">1</span>
            </div>
            <div className="flex items-center gap-1">
              <FontAwesomeIcon icon={faHeart} style={{ color: "#23a6f0" }} />
              <span className="text-[#23A6F0]">1</span>
            </div>
          </div>
        </div>
        <div className="gap-4 flex mr-[14px] max-sm:flex-col max-sm:mr-0 max-sm:gap-[30px] max-sm:py-[48px]">
          <NavLink to="/" className="nav-bar-links  ">
            Home
          </NavLink>
          <NavLink to="/productlist" className="nav-bar-links">
            Shop
          </NavLink>
          <NavLink to="/about" className="nav-bar-links">
            About
          </NavLink>

          <NavLink to="/team" className="nav-bar-links">
            Team
          </NavLink>
          <NavLink to="/contact" className="nav-bar-links">
            Contact
          </NavLink>
        </div>
      </div>
      <div className="flex items-center gap-8 max-sm:hidden">
        <div className="flex items-center gap-2 text-[#23A6F0] font-bold text-[14px]">
          <FontAwesomeIcon
            icon={faUser}
            style={{ color: "#23a6f0", width: "12px" }}
          />
          <NavLink to="/">Login / Register</NavLink>
        </div>
        <div className="flex gap-8 items-center">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ color: "#23a6f0" }}
          />
          <div className="flex items-center gap-1">
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{ color: "#23a6f0" }}
            />
            <span className="text-[#23A6F0]">1</span>
          </div>
          <div className="flex items-center gap-1">
            <FontAwesomeIcon icon={faHeart} style={{ color: "#23a6f0" }} />
            <span className="text-[#23A6F0]">1</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
