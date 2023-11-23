import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function NavBar() {
  return (
    <div className="flex flex-wrap pl-[38px] pr-[17px] justify-between py-[12px] gap-y-2">
      <div className="flex flex-wrap items-center gap-y-2">
        <h1 className="font-bold text-[24px] pr-[79px]">Bandage</h1>
        <div className="gap-4 flex mr-[14px]">
          <NavLink to="/" className="nav-bar-links">
            Home
          </NavLink>
          <NavLink to="/" className="nav-bar-links">
            Shop
          </NavLink>
          <NavLink to="/about" className="nav-bar-links">
            About
          </NavLink>
          <NavLink to="/blog" className="nav-bar-links">
            Blog
          </NavLink>
          <NavLink to="/contact" className="nav-bar-links">
            Contact
          </NavLink>
          <NavLink to="/" className="nav-bar-links">
            Pages
          </NavLink>
        </div>
      </div>
      <div className="flex items-center gap-8">
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
