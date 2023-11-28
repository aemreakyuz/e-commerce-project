import React from "react";
import { Images } from "../assets/Images";

function Contact() {
  return (
    <div className="h-full flex">
      <div
        className="bg-cover bg-center relative w-full"
        style={{ backgroundImage: `url('${Images.sliders.slider1}')` }}
      >
        <div className="w-full h-full z-30 bg-gradient-to-r from-black flex flex-col justify-center items-center">
          <div className="flex flex-wrap items-center justify-evenly gap-[30px] text-white w-[90%] py-[112px]">
            <div className="flex flex-col gap-[36px]  basis-1/2">
              <h1 className="z-20 font-bold text-[40px]">CONTACT US</h1>
              <p className="w-[70%]">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics.
              </p>
              <button className="px-[40px] py-[15px] bg-[#23A6F0] font-bold w-max rounded">
                CONTACT US
              </button>
            </div>
            <div className="flex flex-wrap basis-1/3 ">
              <div className="p-[25px] flex  w-max">
                <div className="gap-[16px]">
                  <address className="text-[24px]">Paris</address>
                  <address className="tetx-[20px]">
                    1901 Thorn Ridge Cir.
                  </address>
                  <div className="border-1 border-solid border-[#23A6F0] w-[58px]"></div>
                  <address>7500 Paris</address>
                  <address>Phone : +451 215 215 </address>
                  <address>Fax : +451 215 215</address>
                </div>
              </div>
              <div className="p-[25px] flex ">
                <div className="gap-[16px]">
                  <address className="text-[24px]">New York</address>
                  <address className="tetx-[20px]">
                    2715 Ash Dr. San Jose,
                  </address>
                  <div className="border-1 border-solid border-[#23A6F0] w-[58px]"></div>
                  <address>7500 Paris</address>
                  <address>Phone : +451 215 215 </address>
                  <address>Fax : +451 215 215</address>
                </div>
              </div>
              <div className="p-[25px] flex ">
                <div className="gap-[16px]">
                  <address className="text-[24px]">Berlin</address>
                  <address className="tetx-[20px]">
                    1901 Thorn Ridge Cir.
                  </address>
                  <div className="border-1 border-solid border-[#23A6F0] w-[58px]"></div>
                  <address>7500 Paris</address>
                  <address>Phone : +451 215 215 </address>
                  <address>Fax : +451 215 215</address>
                </div>
              </div>
              <div className="p-[25px] flex ">
                <div className="gap-[16px]">
                  <address className="text-[24px]">London</address>
                  <address className="tetx-[20px]">
                    3517 W. Gray St. Utica,{" "}
                  </address>
                  <div className="border-1 border-solid border-[#23A6F0] w-[58px]"></div>
                  <address>7500 Paris</address>
                  <address>Phone : +451 215 215 </address>
                  <address>Fax : +451 215 215</address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
