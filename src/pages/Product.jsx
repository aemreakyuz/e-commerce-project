import React from "react";
import Header from "../layout/Header";
import NavBar from "../layout/NavBar";
import Icons from "../components/Icons";
import Footer from "../layout/Footer";
import HomeBestSellerCard from "../components/HomeBestSellerCard";
import { Data } from "../assets/Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Images } from "../assets/Images";

function Product() {
  const items = Data.bestSellers;

  return (
    <div>
      <Header />
      <NavBar />
      <div className="flex gap-[15px] w-4/5 mx-auto py-[24px]">
        <a href="/" className="text-[#252B42] text-[14px] font-bold">
          Home
        </a>
        <img src={Images.shapes.vectors.nextVector} alt="" />
        <a href="/productlist" className="text-[#BDBDBD] text-[14px] font-bold">
          Shop
        </a>
      </div>
      <div className="">
        <nav className="flex justify-center max-sm:w-full max-sm:text-center">
          <a className="p-6 text-[#737373] text-sm  ">Description</a>
          <a className="p-6 text-[#737373] text-sm   ">
            Additional Information
          </a>
          <a className="p-6 text-[#737373] text-sm  ">
            Reviews<span className="text-[#23856D] font-bold pl-1">(0)</span>
          </a>
        </nav>
        <hr className="border border-gray-200" />
      </div>
      <div className="flex justify-center gap-14 max-sm:flex-col pt-[24px] pb-[48px]">
        <div className="w-[28%] max-sm:w-full">
          <img
            className="w-full h-96 object-cover object-center rounded-md "
            src={Images.productPage.productDescription}
            alt="gg"
          />
        </div>
        <div className="w-[27%] flex flex-col gap-6 max-sm:w-full ">
          <h5 className=" text-slate-800 text-2xl font-bold  tracking-tight">
            the quick fox jumps over
          </h5>
          <h6 className="text-[#737373] text-sm font-normal leading-tight tracking-tight">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </h6>
          <h6 className="text-[#737373] text-sm font-normal leading-tight tracking-tight">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </h6>
          <h6 className="text-[#737373] text-sm font-normal leading-tight tracking-tight">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </h6>
        </div>
        <div className=" flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <h5 className=" text-slate-800 text-2xl font-bold  tracking-tight">
              the quick fox jumps over
            </h5>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-start gap-4">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  size="lg"
                  className="text-gray-300"
                />
                <h6 className="text-[#737373] text-sm font-bold ">
                  the quick fox jumps over the lazy dog
                </h6>
              </div>
              <div className="flex items-center justify-start gap-4">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  size="lg"
                  className="text-gray-300"
                />
                <h6 className="text-[#737373] text-sm font-bold ">
                  the quick fox jumps over the lazy dog
                </h6>
              </div>
              <div className="flex items-center justify-start gap-4">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  size="lg"
                  className="text-gray-300"
                />
                <h6 className="text-[#737373] text-sm font-bold ">
                  the quick fox jumps over the lazy dog
                </h6>
              </div>
              <div className="flex items-center justify-start gap-4">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  size="lg"
                  className="text-gray-300"
                />
                <h6 className="text-[#737373] text-sm font-bold ">
                  the quick fox jumps over the lazy dog
                </h6>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h5 className=" text-slate-800 text-2xl font-bold  tracking-tight">
              the quick fox jumps over
            </h5>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-start gap-4">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  size="lg"
                  className="text-gray-300"
                />
                <h6 className="text-[#737373] text-sm font-bold ">
                  the quick fox jumps over the lazy dog
                </h6>
              </div>
              <div className="flex items-center justify-start gap-4">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  size="lg"
                  className="text-gray-300"
                />
                <h6 className="text-[#737373] text-sm font-bold ">
                  the quick fox jumps over the lazy dog
                </h6>
              </div>
              <div className="flex items-center justify-start gap-4">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  size="lg"
                  className="text-gray-300"
                />
                <h6 className="text-[#737373] text-sm font-bold ">
                  the quick fox jumps over the lazy dog
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" px-[190px] bg-[#FAFAFA] mx-auto flex flex-col gap-8 text-[24px] text-[#252B42]">
        <h2 className="mx-auto font-bold py-[48px]">BESTSELLERS PRODUCTS</h2>
        <div className="flex gap-[50px] flex-wrap items-center justify-center pb-[80px]">
          {items.slice(0, 6).map((item, index) => (
            <div key={index} className="">
              <HomeBestSellerCard product={item} />
            </div>
          ))}
        </div>
      </div>
      <Icons />
      <Footer />
    </div>
  );
}

export default Product;
