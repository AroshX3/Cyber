import React from "react";
import tictok from "../../images/Tiktok.png";
import logo_white from "../../images/cyber_white.png";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
const Footer = () => {
  return (
    <>
      <section className="bg-black">
        <div className="container">
          <div className="grid grid-cols-3 gap-9 pt-26 pb-6">
            <div className="">
              <img src={logo_white} alt="" />
              <div className="">
                <p className="text-[#CFCFCF] font-popins font-medium text-[14px]">
                  We are a residential interior design firm located in Portland.
                  Our boutique-studio offers more than
                </p>
              </div>
            </div>
            <div className="">
              <h3 className="font-popins font-semibold text-[16px] leading-4 text-white">
                Services
              </h3>
              <div className="">
                <ul className="text-[#CFCFCF] pt-4">
                  <li>
                    <a href="">Bonus program</a>
                  </li>
                  <li>
                    <a href="">Gift Cards</a>
                  </li>
                  <li>
                    <a href="">Credit and Payment</a>
                  </li>
                  <li>
                    <a href="">Service contracts</a>
                  </li>
                  <li>
                    <a href="">Non-cash Account</a>
                  </li>
                  <li>
                    <a href="">Payment</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <h3 className="font-popins font-semibold text-[16px] leading-4 text-white">
                Assistance to the buyer
              </h3>
              <div className="">
                <ul className="text-[#CFCFCF] pt-4">
                  <li>
                    <a href="">Find a order</a>
                  </li>
                  <li>
                    <a href="">Terms of delivery</a>
                  </li>
                  <li>
                    <a href="">Exchange and return of goods</a>
                  </li>
                  <li>
                    <a href="">Guarantee</a>
                  </li>
                  <li>
                    <a href="">Frequently asked questions</a>
                  </li>
                  <li>
                    <a href="">Term of use of the site</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="social flex gap-[36.66px] pb-26">
            <a href="">
              <FaTwitter className="text-white" />
            </a>

            <a href="">
              <FaFacebookF className="text-white" />
            </a>
            <a href="">
              <img src={tictok} alt="" />
            </a>
            <a href="">
              <RiInstagramFill className="text-white" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
