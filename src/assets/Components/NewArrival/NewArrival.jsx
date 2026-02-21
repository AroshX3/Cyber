import React from "react";
import { FaHeart } from "react-icons/fa";
import ihpone from "../../images/menu2iphone.png";
import camera from '../../images/menu2camera.png'
import smartWatch from '../../images/menu2applewatch.png'
import airpods from '../../images/menu2airpods.png'
import samsungWatch from '../../images/menu2samsungwatch.png'
import galaxyFold from '../../images/menu2galaxyfold.png'
import airPhone from '../../images/menu2airphone.png'
import applePad from '../../images/menu2Macbook.png'

const NewArrival = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="">
            <div className="menu2 pb-8 pt-14.5">
              <ul className="flex gap-8">
                <li>
                  <a className="" href="">
                    New Arrival
                  </a>
                </li>
                <li>
                  <a href="">Bestseller</a>
                </li>
                <li>
                  <a href="">Featured Products</a>
                </li>
              </ul>
            </div>

            <div className="items grid grid-cols-4 gap-4 bg-[#F6F6F6] mb-14">
              <div className=" bg-[]">
                <div className="flex justify-end ">
                  <FaHeart className="text-[25px] mt-4" />
                </div>
                <div className="flex justify-center items-center">
                  <img className="w-40 h-40" src={ihpone} alt="" />
                </div>
                <p className="font-popins font-medium text-[16px] pt-4 leading-6 text-center px-4.5">
                  Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)
                </p>
                <h4 className="font-popins font-semibold text-[24px] leading-6 pt-4 text-center">
                  $900
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
              <div className="">
                <div className="flex justify-end ">
                  <FaHeart className="text-[25px] mt-4" />
                </div>
                <div className="flex justify-center items-center">
                  <img className="w-40 h-40 " src={camera} alt="" />
                </div>
                <p className="font-popins font-medium text-[16px] pt-4 leading-6 text-center px-4.5">
                  Blackmagic Pocket Cinema Camera 6k
                </p>
                <h4 className="font-popins font-semibold text-[24px] leading-6 pt-4 text-center">
                  $2535
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
              <div className="">
                <div className="flex justify-end ">
                  <FaHeart className="text-[25px] mt-4" />
                </div>
                <div className="flex justify-center items-center">
                  <img className="w-40 h-40 " src={smartWatch} alt="" />
                </div>
                <p className="font-popins font-medium text-[16px] pt-4 leading-6 text-center px-4.5">
                  Apple Watch Series 9 GPS 41mm Starlight Aluminium Case
                </p>
                <h4 className="font-popins font-semibold text-[24px] leading-6 pt-4 text-center">
                  $900
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
              <div className="">
                <div className="flex justify-end ">
                  <FaHeart className="text-[25px] mt-4" />
                </div>
                <div className="flex justify-center items-center">
                  <img className="w-40 h-40 " src={airpods} alt="" />
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
              <div className="">
                <div className="flex justify-end ">
                  <FaHeart className="text-[25px] mt-4" />
                </div>
                <div className="flex justify-center items-center">
                  <img className="w-40 h-40 " src={samsungWatch} alt="" />
                </div>
                <p className="font-popins font-medium text-[16px] pt-4 leading-6 text-center px-4.5">
                  Samsung Galaxy Watch6 Classic 47mm Black
                </p>
                <h4 className="font-popins font-semibold text-[24px] leading-6 pt-4 text-center">
                  $369
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
              <div className="">
                <div className="flex justify-end ">
                  <FaHeart className="text-[25px] mt-4 text-[red]" />
                </div>
                <div className="flex justify-center items-center">
                  <img className="w-40 h-40 " src={galaxyFold} alt="" />
                </div>
                <p className="font-popins font-medium text-[16px] pt-4 leading-6 text-center px-4.5">
                  Galaxy Z Fold5 Unlocked | 256GB | Phantom Black
                </p>
                <h4 className="font-popins font-semibold text-[24px] leading-6 pt-4 text-center">
                  $1799
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
              <div className="">
                <div className="flex justify-end ">
                  <FaHeart className="text-[25px] mt-4" />
                </div>
                <div className="flex justify-center items-center">
                  <img className="w-40 h-40 " src={airPhone} alt="" />
                </div>
                <p className="font-popins font-medium text-[16px] pt-4 leading-6 text-center px-4.5">
                  Galaxy Buds FE Graphite
                </p>
                <h4 className="font-popins font-semibold text-[24px] leading-6 pt-4 text-center">
                  $99.99
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
              <div className="">
                <div className="flex justify-end ">
                  <FaHeart className="text-[25px] mt-4" />
                </div>
                <div className="flex justify-center items-center">
                  <img className="w-40 h-40 " src={applePad} alt="" />
                </div>
                <p className="font-popins font-medium text-[16px] pt-4 leading-6 text-center px-4.5">
                  Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021
                </p>
                <h4 className="font-popins font-semibold text-[24px] leading-6 pt-4 text-center">
                  $398
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

export default NewArrival;
