import React from 'react'
import logo from '../../images/cyber_logo.png'
import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { FiSmartphone } from "react-icons/fi";
import { HiComputerDesktop } from "react-icons/hi2";
import { TbDeviceGamepad } from "react-icons/tb";
import { MdOutlineCameraAlt } from "react-icons/md";
import { FiHeadphones } from "react-icons/fi";
const Navbar = () => {
  return (
    <>
      <nav>
        <div className="container">
          <div className="pt-7 pb-4 flex items-center">
            <div className="logo pr-8">
              <img src={logo} alt="" />
            </div>

            <div className="relative flex items-center">
              <IoIosSearch className="absolute left-3 text-gray-400 text-[18px]" />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 p-4 w-101.25 h-14 rounded-lg font-popins text-[14px] leading-4.5 bg-[#F5F5F5]"
              />
            </div>

            <div className="menu pl-8 pr-8">
              <ul className="flex gap-13">
                <li>
                  <a
                    className=""
                    href=""
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className=""
                    href=""
                  >
                    About
                  </a>
                </li>
                <li>
                  <a href="">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
              </ul>
            </div>
            <div className="sections flex gap-6">
              <a href="">
                <FaRegHeart className="text-[22px]" />
              </a>
              <a href="">
                <IoCartOutline className="text-[22px]" />
              </a>
              <a href="">
                <FiUser className="text-[22px]" />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-[#2E2E2E] pt-2 pb-2">
          <div className="container ">
            <div className="Chatagory">
              <ul className="flex justify-between gap-[81.4px]">
                <li>
                  <FiSmartphone className="text-[rgba(255,255,255,0.5)]" />
                  <a href="">Phones</a>
                </li>
                <li>
                  <HiComputerDesktop className="text-[rgba(255,255,255,0.5)]" />
                  <a href="">Computers</a>
                </li>
                <li>
                  <TbDeviceGamepad className="text-[rgba(255,255,255,0.5)]" />
                  <a href="">Smart Watches</a>
                </li>
                <li>
                  <MdOutlineCameraAlt className="text-[rgba(255,255,255,0.5)]" />
                  <a href="">Cameras</a>
                </li>
                <li>
                  <FiHeadphones className="text-[rgba(255,255,255,0.5)]" />
                  <a href="">Headphones</a>
                </li>
                <li>
                  <TbDeviceGamepad className="text-[rgba(255,255,255,0.5)]" />
                  <a href="">Gaming</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar