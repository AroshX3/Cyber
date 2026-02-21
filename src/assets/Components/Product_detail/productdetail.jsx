import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import phone from "../../images/iphone-detail.png";
import bionic from "../../images/bionic-details.png";
import bionic2 from "../../images/bionic-2.png";
import camara from "../../images/camara-details.png";
import camara2 from "../../images/recamara-details.png";
import charger from "../../images/charger-details.png";

import shipping from "../../images/delivary-detail.png";
import InStock from "../../images/instock-details.png";
import garentee from "../../images/garentee-details.png";

import nigIphone from "../../images/IphoneBig.png";
import smallIphone from "../../images/Iphone-small.png";
import smallIphone2 from "../../images/iphone-small2.png";
import smallIphone3 from "../../images/Iphone-small4.png";
import smallIphone4 from "../../images/iphone-small3.png";
import { FaChevronRight } from "react-icons/fa6";

const productdetail = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="">
            <div className="">
              <div className="py-11">
                <ul className="flex gap-6 py-2">
                  <li>
                    <a
                      className="font-popins text-[#A4A4A4] font-medium text-[16px]"
                      href=""
                    >
                      Home
                    </a>
                  </li>
                  <span>
                    <FaChevronRight className="text-[#A4A4A4]" />
                  </span>
                  <li>
                    <a
                      className="font-popins text-[#A4A4A4] font-medium text-[16px]"
                      href=""
                    >
                      Catalog
                    </a>
                  </li>
                  <span>
                    <FaChevronRight className="text-[#A4A4A4]" />
                  </span>
                  <li>
                    <a
                      className="font-popins text-[#A4A4A4] font-medium text-[16px]"
                      href=""
                    >
                      Smartphones
                    </a>
                  </li>
                  <FaChevronRight className="text-[#A4A4A4]" />
                  <li>
                    <a
                      className="font-popins text-[#A4A4A4] font-medium text-[16px]"
                      href=""
                    >
                      Apple
                    </a>
                  </li>
                  <FaChevronRight className="text-[#A4A4A4]" />
                  <li>
                    <a
                      className="font-popins text-black font-medium text-[16px]"
                      href=""
                    >
                      iPhone 14 Pro Max
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex gap-12">
              <div className="flex gap-12 items-center">
                <div className="">
                  <img src={smallIphone} className="pb-6" alt="" />
                  <img src={smallIphone2} className="pb-6" alt="" />
                  <img src={smallIphone3} className="pb-6" alt="" />
                  <img src={smallIphone4} alt="" />
                </div>
                <div className="">
                  <img className="w-full" src={nigIphone} alt="" />
                </div>
              </div>
              <div className="">
                <div className="">
                  <h3 className="font-popins font-bold text-[40px] leading-10 pb-6">
                    Apple iPhone 14 Pro Max
                  </h3>
                  <div className="font-popins pb-4 flex items-center gap-4">
                    <span className="font-semibold text-[32px] leading-12">
                      $1399
                    </span>
                    <span className="text-[#A0A0A0]">
                      <del className="font-normal leading-8 text-[24px]">
                        $1499
                      </del>
                    </span>
                  </div>
                  <div className="pb-6">
                    <div className="flex items-center gap-6">
                      <p className="text-xl">Select color :</p>
                      <div className="flex gap-2">
                        <div className="w-6 h-6 rounded-full bg-black cursor-pointer"></div>
                        <div className="w-6 h-6 rounded-full bg-purple-600 cursor-pointer"></div>
                        <div className="w-6 h-6 rounded-full bg-red-600 cursor-pointer"></div>
                        <div className="w-6 h-6 rounded-full bg-yellow-500 cursor-pointer"></div>
                        <div className="w-6 h-6 rounded-full bg-gray-300 cursor-pointer"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex pb-6 gap-4">
                    <div className="">
                      <p className="py-4 px-6 font-popins font-semibold text-[14px] text-[#D5D5D5] leading-4">
                        128GB
                      </p>
                    </div>
                    <div className="">
                      <p className="py-4 px-6 font-popins font-semibold text-[14px] text-[#6F6F6F] leading-4">
                        256GB
                      </p>
                    </div>
                    <div className="">
                      <p className="py-4 px-6 font-popins font-semibold text-[14px] text-[#6F6F6F] leading-4">
                        512GB
                      </p>
                    </div>
                    <div className="">
                      <p className="py-4 px-6 font-popins font-semibold text-[14px] leading-4 border rounded-lg">
                        1TB
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3">
                    <div className="px-4 py-4 flex items-center gap-2">
                      <div className="">
                        <img src={phone} alt="" />
                      </div>
                      <div className="">
                        <p className="font-popins font-normal text-[14px] leading-4 text-[#A7A7A7]">
                          Screen size
                        </p>
                        <h4 className="font-popins font-semibold text-[14px] leading-4 text-[#4E4E4E]">
                          6.7"
                        </h4>
                      </div>
                    </div>
                    <div className="px-4 py-4 flex items-center gap-2">
                      <div className="">
                        <img src={bionic} alt="" />
                      </div>
                      <div className="">
                        <p className="font-popins font-normal text-[14px] leading-4 text-[#A7A7A7]">
                          CPU
                        </p>
                        <h4 className="font-popins font-semibold text-[14px] leading-4 text-[#4E4E4E]">
                          Apple A16 Bionic
                        </h4>
                      </div>
                    </div>
                    <div className="px-4 py-4 flex items-center gap-2">
                      <div className="">
                        <img src={bionic2} alt="" />
                      </div>
                      <div className="">
                        <p className="font-popins font-normal text-[14px] leading-4 text-[#A7A7A7]">
                          Number of Cores
                        </p>
                        <h4 className="font-popins font-semibold text-[14px] leading-4 text-[#4E4E4E]">
                          6
                        </h4>
                      </div>
                    </div>
                    <div className="px-4 py-4 flex items-center gap-2">
                      <div className="">
                        <img src={camara} alt="" />
                      </div>
                      <div className="">
                        <p className="font-popins font-normal text-[14px] leading-4 text-[#A7A7A7]">
                          Main cam
                        </p>
                        <h4 className="font-popins font-semibold text-[14px] leading-4 text-[#4E4E4E]">
                          48-12 -12 MP
                        </h4>
                      </div>
                    </div>
                    <div className="px-4 py-4 flex items-center gap-2">
                      <div className="">
                        <img src={camara2} alt="" />
                      </div>
                      <div className="">
                        <p className="font-popins font-normal text-[14px] leading-4 text-[#A7A7A7]">
                          Front-camer
                        </p>
                        <h4 className="font-popins font-semibold text-[14px] leading-4 text-[#4E4E4E]">
                          12 MP
                        </h4>
                      </div>
                    </div>
                    <div className="px-4 py-4 flex items-center gap-2">
                      <div className="">
                        <img src={charger} alt="" />
                      </div>
                      <div className="">
                        <p className="font-popins font-normal text-[14px] leading-4 text-[#A7A7A7]">
                          capacity
                        </p>
                        <h4 className="font-popins font-semibold text-[14px] leading-4 text-[#4E4E4E]">
                          4323 mAh
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <p className="font-popins font-normal text-[14px] text-[#6C6C6C] w-134 leading-6">
                      Enhanced capabilities thanks toan enlarged display of 6.7
                      inchesand work without recharging throughout the day.
                      Incredible photosas in weak, yesand in bright lightusing
                      the new systemwith two cameras
                    </p>
                    <a
                      className="font-popins font-normal leading-6 text-[#2C2C2C]"
                      href=""
                    >
                      more...
                    </a>
                  </div>
                  <div className="flex items-center gap-4 pt-8 pb-8">
                    <div className="">
                      <a
                        className="px-17.5 py-4 rounded-lg  font-popins font-medium border"
                        href=""
                      >
                        Add to Wishlist
                      </a>
                    </div>
                    <div className="">
                      <a
                        className="px-17.5 py-4 rounded-lg text-white bg-black font-popins font-medium"
                        href=""
                      >
                        Add to Card
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-8">
                    <div className="flex items-center">
                      <img className="w-6 h-6" src={shipping} alt="" />
                      <div className="flex gap-4">
                        <p className="font-popins text-[#717171] font-medium text-[14px] leading-4">
                          Free Delivery
                        </p>
                        <h4 className="font-popins font-medium text-[14px] leading-6">
                          1-2 day
                        </h4>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <img className="w-6 h-6" src={InStock} alt="" />
                      <div className="">
                        <p className="font-popins text-[#717171] font-medium text-[14px] leading-4">
                          In Stock
                        </p>
                        <h4 className="font-popins font-medium text-[14px] leading-6">
                          Today
                        </h4>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <img className="w-6 h-6" src={garentee} alt="" />
                      <div className="">
                        <p className="font-popins text-[#717171] font-medium text-[14px] leading-4">
                          Guaranteed
                        </p>
                        <h4 className="font-popins font-medium text-[14px] leading-6">
                          1 year
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default productdetail;
