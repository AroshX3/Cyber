import React from "react";
import iphoneGold from "../../images/iphone_gold.png";
import iphoneBlue from '../../images/iphone_blue (1).png'
import headphone from "../../images/menu2airpods.png";
import watch from "../../images/menu2applewatch.png";
import { FaHeart } from "react-icons/fa";
const Discount = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="pb-20">
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
      </section>
    </>
  );
};

export default Discount;
