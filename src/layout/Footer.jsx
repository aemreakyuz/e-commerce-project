import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div className="">
      <div className="bg-[#FAFAFA] py-[60px]">
        <div className="flex justify-between w-[80%] m-auto">
          <h3 className="text-[24px] font-bold ">Bandage</h3>
          <div className="gap-[20px] flex">
            <FontAwesomeIcon
              icon={faFacebook}
              style={{ color: "#77a6f8" }}
              className="text-xl"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ color: "#77a6f8" }}
              className="px-[10px] text-xl"
            />
            <FontAwesomeIcon
              icon={faTwitter}
              style={{ color: "#77a6f8" }}
              className="text-xl"
            />
          </div>
        </div>
      </div>
      <div className="flex py-[50px] w-full m-auto  ">
        <div className=" flex justify-between m-auto w-[80%] flex-wrap font-bold gap-4">
          <div className="flex flex-col mr-8 gap-[20px] ">
            <h5 className="text-[16px] ">Company Info</h5>
            <div className="flex-col flex gap-[10px] text-[#737373]">
              <a className="" href="#">
                About Us
              </a>
              <a className="" href="#">
                Carrier
              </a>
              <a className="" href="#">
                We are hiring
              </a>
              <a className="" href="#">
                Blog
              </a>
            </div>
          </div>
          <div className="flex flex-col mr-8 gap-[20px]">
            <h5 className="">Legal</h5>
            <div className="flex-col flex gap-[10px] text-[#737373]">
              <a className="" href="#">
                About Us
              </a>
              <a className=" " href="#">
                Carrier
              </a>
              <a className=" " href="#">
                We are hiring
              </a>
              <a className="" href="#">
                Blog
              </a>
            </div>
          </div>
          <div className="flex flex-col mr-8 gap-[20px]">
            <h5 className="">Features</h5>
            <div className="flex-col flex gap-[10px] text-[#737373]">
              <a className=" " href="#">
                Business Marketing
              </a>
              <a className="" href="#">
                User Analytic{" "}
              </a>
              <a className="" href="#">
                Live Chat
              </a>
              <a className="" href="#">
                Unlimited Support
              </a>
            </div>
          </div>
          <div className="flex flex-col mr-8 gap-[20px]">
            <h5 className="">Resources</h5>
            <div className="flex-col flex gap-[10px] text-[#737373]">
              <a className=" " href="#">
                IOS & Android
              </a>
              <a className="" href="#">
                Watch a Demo{" "}
              </a>
              <a className=" " href="#">
                Customers
              </a>
              <a className="" href="#">
                API
              </a>
            </div>
          </div>
          <div class=" flex flex-col ">
            <div>
              <label for="email" className="  ">
                Get In Touch
              </label>
              <div class="flex pt-[14px] ">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="bg-[#F9F9F9] border border-gray-300 rounded-l-md px-4 w-[250px] h-[58px] font-normal "
                  placeholder="Your Email"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#23A6F0] text-white rounded-r-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 font-normal"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" py-[25px]  bg-[#FAFAFA] max-sm:text-center max-sm:px-[80px]">
        <p className="m-auto w-[80%]  text-[#737373] font-bold">
          Made With Love By Finland All Right Reserved
        </p>
      </div>
    </div>
  );
}
export default Footer;
