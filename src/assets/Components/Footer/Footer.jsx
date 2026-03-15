import React from "react";
import tictok from "../../images/bal/Tiktok.png";
import logo_white from "../../images/bal/cyber_white.png";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
const Footer = () => {
  return (
    <>
      <section className="bg-black">
        <div className="container">
          <div className="text-center p-6 sm:grid sm:grid-cols-3 sm:text-left gap-9 pt-[26px] pb-6">
            <div className="flex justify-center items-center flex-col pb-6 sm:p-0 sm:items-start">
              <img className="w-[96px] h-[32px]" src={logo_white} alt="" />
              <div>
                <p className="text-[#CFCFCF] font-popins font-medium text-[14px]">
                  We are a residential interior design firm located in Portland.
                  Our boutique-studio offers more than
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-popins font-semibold text-[16px] leading-4 text-white">
                Services
              </h3>
              <div>
                <ul className="text-[#CFCFCF] pt-4">
                  <li>
                    <a className="font-popins font-thin text-[14px]" href="">
                      Bonus program
                    </a>
                  </li>
                  <li>
                    <a className="font-popins font-thin text-[14px]" href="">
                      Gift Cards
                    </a>
                  </li>
                  <li>
                    <a className="font-popins font-thin text-[14px]" href="">
                      Credit and Payment
                    </a>
                  </li>
                  <li>
                    <a className="font-popins font-thin text-[14px]" href="">
                      Service contracts
                    </a>
                  </li>
                  <li>
                    <a className="font-popins font-thin text-[14px]" href="">
                      Non-cash Account
                    </a>
                  </li>
                  <li>
                    <a className="font-popins font-thin text-[14px]" href="">
                      Payment
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pb-6 sm:p-0">
              <h3 className="font-popins font-semibold text-[16px] leading-4 text-white">
                Assistance to the buyer
              </h3>
              <div>
                <ul className="text-[#CFCFCF] pt-4">
                  <li>
                    <a className="font-popins font-thin text-[14px]" href="">
                      Find a order
                    </a>
                  </li>
                  <li>
                    <a className="font-popins font-thin text-[14px]" href="">
                      Terms of delivery
                    </a>
                  </li>
                  <li>
                    <a className="font-popins font-thin text-[14px]" href="">
                      Exchange and return of goods
                    </a>
                  </li>
                  <li>
                    <a className="font-popins font-thin text-[14px]" href="">
                      Guarantee
                    </a>
                  </li>
                  <li>
                    <a className="font-popins font-thin text-[14px]" href="">
                      Frequently asked questions
                    </a>
                  </li>
                  <li>
                    <a className="font-popins font-thin text-[14px]" href="">
                      Term of use of the site
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-center sm:justify-start gap-[36.66px] pb-[26px]">
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
