import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import iphoneGold from "../../images/iphone_gold.png";
import iphoneBlue from "../../images/iphone_blue (1).png";
import headphone from "../../images/menu2airpods.png";
import watch from "../../images/menu2applewatch.png";
import { FaHeart } from "react-icons/fa";

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

import userPic from "../../images/User-Pic1.png";
import userPic2 from "../../images/User-Pic2.png";
import userPic3 from "../../images/User-Pic-3.png";
import userimage1 from "../../images/user-3-image.png";
import userimage2 from "../../images/user-3-image2.png";

import { FaChevronRight } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";
import { GoStarFill } from "react-icons/go";
import { CiStar } from "react-icons/ci";

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
                  <div className="flex pt-7 pb-29.25 gap-8">
                    <div className="flex items-center gap-4">
                      <div className="">
                        <img className="w-6 h-6" src={shipping} alt="" />
                      </div>
                      <div className=" gap-4">
                        <p className="font-popins text-[#717171] font-medium text-[14px] leading-4">
                          Free Delivery
                        </p>
                        <h4 className="font-popins font-medium text-[14px] leading-6">
                          1-2 day
                        </h4>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="">
                        <img className="w-6 h-6" src={InStock} alt="" />
                      </div>
                      <div className="">
                        <p className="font-popins text-[#717171] font-medium text-[14px] leading-4">
                          In Stock
                        </p>
                        <h4 className="font-popins font-medium text-[14px] leading-6">
                          Today
                        </h4>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="">
                        <img className="w-6 h-6" src={garentee} alt="" />
                      </div>
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
          <div className="">
            <div className="details">
              <div className="pb-4">
                <h4 className="font-popins font-semibold text-[24px] pb-8 leading-8">
                  Details
                </h4>
                <p className="text-[#9D9D9D] font-popins font-medium text-[14px] leading-6">
                  Just as a book is judged by its cover, the first thing you
                  notice when you pick up a modern smartphone is the display.
                  Nothing surprising, because advanced technologies allow you to
                  practically level the display frames and cutouts for the front
                  camera and speaker, leaving no room for bold design solutions.
                  And how good that in such realities Apple everything is fine
                  with displays. Both critics and mass consumers always praise
                  the quality of the picture provided by the products of the
                  Californian brand. And last year's 6.7-inch Retina panels,
                  which had ProMotion, caused real admiration for many.
                </p>
              </div>
              <div className="">
                <h4 className="font-popins font-semibold text-[24px] pb-4 leading-8">
                  Screen
                </h4>
                <div className="">
                  <div className="flex justify-between">
                    <p className="font-popins font-normal text-[16px] pb-8 leading-6">
                      Screen diagonal
                    </p>
                    <p className="font-popins font-normal text-[16px] pb-8 leading-6">
                      6.7"
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-popins font-normal text-[16px] pb-8 leading-6">
                      The screen resolution
                    </p>
                    <p className="font-popins font-normal text-[16px] pb-8 leading-6">
                      2796x1290
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-popins font-normal text-[16px] pb-8 leading-6">
                      The screen refresh rate
                    </p>
                    <p className="font-popins font-normal text-[16px] pb-8 leading-6">
                      120 Hz
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-popins font-normal text-[16px] pb-8 leading-6">
                      The pixel density
                    </p>
                    <p className="font-popins font-normal text-[16px] pb-8 leading-6">
                      460 ppi
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-popins font-normal text-[16px] pb-8 leading-6">
                      Screen type
                    </p>
                    <p className="font-popins font-normal text-[16px] pb-8 leading-6">
                      OLED
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-popins font-normal text-[16px] pb-8 leading-6">
                      Additionally
                    </p>
                    <p className="font-popins font-normal  text-[16px] pb-8 leading-6">
                      Dynamic Island <br /> Always-On display <br /> HDR display
                      True <br /> ToneWide color (P3)
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <h4 className="font-popins font-semibold text-[24px] pb-4 leading-8">
                  CPU
                </h4>
                <div className="">
                  <div className="flex justify-between">
                    <p className="font-popins font-normal text-[16px] pb-8 leading-6">
                      CPU
                    </p>
                    <p className="font-popins font-normal text-[16px] pb-8 leading-6">
                      A16 Bionic
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-popins font-normal text-[16px] pb-8 leading-6">
                      Number of cores
                    </p>
                    <p className="font-popins font-normal text-[16px] pb-8 leading-6">
                      6
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center pt-8 pb-12">
                  <a
                    className="px-17.5 py-4 rounded-lg flex gap-2 items-center font-popins font-medium border"
                    href=""
                  >
                    View More <FaChevronDown />
                  </a>
                </div>
              </div>
              <div className="">
                <div className="pb-8">
                  <div className="">
                    <input
                      className="w-full py-6 font-popins font-normal text-[14px] leading-4.5 p-4"
                      type="text"
                      placeholder="Leave Comment"
                    />
                  </div>
                  <div className="pt-8 pb-6">
                    <div className="flex pb-6 gap-4.75">
                      <img src={userPic} className="w-14 h-14 " alt="" />
                      <div className="">
                        <h3 className="font-popins font-bold text-[17px] leading-6 pb-2">
                          Grace Carey
                        </h3>
                        <div className="flex">
                          <GoStarFill className="text-[yellow] w-6 h-6" />
                          <GoStarFill className="text-[yellow] w-6 h-6" />
                          <GoStarFill className="text-[yellow] w-6 h-6" />
                          <GoStarFill className="text-[yellow] w-6 h-6" />
                          <CiStar className="text-[yellow] w-6 h-6" />
                        </div>
                        <p className="font-popins font-medium text-[15px] leading-6 text-[#7E7E7E]">
                          I was a bit nervous to be buying a secondhand phone
                          from Amazon, but I couldn’t be happier with my
                          purchase!! I have a pre-paid data plan so I was
                          worried that this phone wouldn’t connect with my data
                          plan, since the new phones don’t have the physical Sim
                          tray anymore, but couldn’t have been easier! I bought
                          an Unlocked black iPhone 14 Pro Max in excellent
                          condition and everything is PERFECT. It was super easy
                          to set up and the phone works and looks great. It
                          truly was in excellent condition. Highly
                          recommend!!!🖤
                        </p>
                      </div>
                    </div>
                    <div className="flex pb-6 gap-4.75">
                      <img src={userPic2} className="w-14 h-14 " alt="" />
                      <div className="">
                        <h3 className="font-popins font-bold text-[17px] leading-6 pb-2">
                          Ronald Richards
                        </h3>
                        <div className="flex">
                          <GoStarFill className="text-[yellow] w-6 h-6" />
                          <GoStarFill className="text-[yellow] w-6 h-6" />
                          <GoStarFill className="text-[yellow] w-6 h-6" />
                          <GoStarFill className="text-[yellow] w-6 h-6" />
                          <GoStarFill className="text-[yellow] w-6 h-6" />
                        </div>
                        <p className="font-popins font-medium text-[15px] leading-6 text-[#7E7E7E]">
                          This phone has 1T storage and is durable. Plus all the
                          new iPhones have a C port! Apple is phasing out the
                          current ones! (All about the Benjamin’s) So if you
                          want a phone that’s going to last grab an iPhone 14
                          pro max and get several cords and plugs.
                        </p>
                      </div>
                    </div>
                    <div className="flex pb-83 gap-4.75">
                      <img src={userPic3} className="w-14 h-14 " alt="" />
                      <div className="">
                        <h3 className="font-popins font-bold text-[17px] leading-6 pb-2">
                          Darcy King
                        </h3>
                        <div className="flex">
                          <GoStarFill className="text-[yellow] w-6 h-6" />
                          <GoStarFill className="text-[yellow] w-6 h-6" />
                          <GoStarFill className="text-[yellow] w-6 h-6" />
                          <GoStarFill className="text-[yellow] w-6 h-6" />
                          <CiStar className="text-[yellow] w-6 h-6" />
                        </div>
                        <p className="font-popins font-medium text-[15px] leading-6 text-[#7E7E7E]">
                          I might be the only one to say this but the camera is
                          a little funky. Hoping it will change with a software
                          update: otherwise, love this phone! Came in great
                          condition
                        </p>
                        <div className="flex gap-2">
                          <img className="rounded-md" src={userimage1} alt="" />
                          <img className="rounded-md" src={userimage2} alt="" />
                        </div>
                        <div className="flex justify-center items-center pt-8 pb-12">
                          <a
                            className="px-17.5 py-4 rounded-lg flex gap-2 items-center font-popins font-medium border"
                            href=""
                          >
                            View More <FaChevronDown />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="items grid grid-cols-4 gap-4  ">
                    <div className=" bg-[#F6F6F6]">
                      <div className="flex justify-end ">
                        <FaHeart className="text-[25px] mt-4" />
                      </div>
                      <div className="flex justify-center items-center">
                        <img className="w-40 h-40" src={iphoneGold} alt="" />
                      </div>
                      <p className="font-popins font-medium text-[16px] pt-4 leading-6 text-center px-4.5">
                        Apple iPhone 14 Pro 512GB Gold (MQ233)
                      </p>
                      <h4 className="font-popins font-semibold text-[24px] leading-6 pt-4 text-center">
                        $1437
                      </h4>
                      <div className="button pb-6 pt-9 flex justify-center items-center">
                        <a
                          className="font-popins bg-black rounded-lg text-white text-[14px] leading-6 px-16 py-3 "
                          href=""
                        >
                          Buy Now
                        </a>
                      </div>
                    </div>
                    <div className="bg-[#F6F6F6]">
                      <div className="flex justify-end ">
                        <FaHeart className="text-[25px] mt-4" />
                      </div>
                      <div className="flex justify-center items-center">
                        <img className="w-40 h-40" src={headphone} alt="" />
                      </div>
                      <p className="font-popins font-medium text-[16px] pt-4 leading-6 text-center px-4.5">
                        AirPods Max Silver
                      </p>
                      <h4 className="font-popins font-semibold text-[24px] leading-6 pt-4 text-center">
                        $549
                      </h4>
                      <div className="button pb-6 pt-9 flex justify-center items-center">
                        <a
                          className="font-popins bg-black rounded-lg text-white text-[14px] leading-6 px-16 py-3 "
                          href=""
                        >
                          Buy Now
                        </a>
                      </div>
                    </div>
                    <div className="bg-[#F6F6F6]">
                      <div className="flex justify-end ">
                        <FaHeart className="text-[25px] mt-4" />
                      </div>
                      <div className="flex justify-center items-center">
                        <img className="w-40 h-40" src={watch} alt="" />
                      </div>
                      <p className="font-popins font-medium text-[16px] pt-4 leading-6 text-center px-4.5">
                        Apple Watch Series 9 GPS 41mm Starlight Aluminium Case
                      </p>
                      <h4 className="font-popins font-semibold text-[24px] leading-6 pt-4 text-center">
                        $399
                      </h4>
                      <div className="button pb-6 pt-9 flex justify-center items-center">
                        <a
                          className="font-popins bg-black rounded-lg text-white text-[14px] leading-6 px-16 py-3 "
                          href=""
                        >
                          Buy Now
                        </a>
                      </div>
                    </div>
                    <div className="bg-[#F6F6F6]">
                      <div className="flex justify-end ">
                        <FaHeart className="text-[25px] mt-4" />
                      </div>
                      <div className="flex justify-center items-center">
                        <img className="w-40 h-40" src={iphoneBlue} alt="" />
                      </div>
                      <p className="font-popins font-medium text-[16px] pt-4 leading-6 text-center px-4.5">
                        Apple iPhone 14 Pro 1TB Gold (MQ2V3)
                      </p>
                      <h4 className="font-popins font-semibold text-[24px] leading-6 pt-4 text-center">
                        $1499
                      </h4>
                      <div className="button pb-6 pt-9 flex justify-center items-center">
                        <a
                          className="font-popins bg-black rounded-lg text-white text-[14px] leading-6 px-16 py-3 "
                          href=""
                        >
                          Buy Now
                        </a>
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
