import React from 'react'
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import phone from '../../images/Phones.png'
import smartWatch from '../../images/smartWatch.png'
import camera from '../../images/Cameras.png'
import headPhone from '../../images/Headphones.png'
import Computer from '../../images/Computers.png'
const Catagory = () => {
  return (
    <>
      <section className="pt-20 bg-[#FAFAFA]">
        <div className="container">
          <div className="flex justify-between items-baseline">
            <h3 className="font-popins font-medium text-[24px] leading-8">
              Browse By Category
            </h3>
            <div className="arrows flex gap-4">
              <MdOutlineArrowBackIos />
              <MdOutlineArrowForwardIos />
            </div>
          </div>
          <div className="grid grid-cols-6 pt-8 pb-20 gap-8">
            <div className=" flex flex-col rounded-[15px] justify-center items-center bg-[#EDEDED] py-6">
              <img src={phone} alt="" />
              <h4 className="font-popins font-medium text-[16px] leading-6">
                Phones
              </h4>
            </div>
            <div className="flex flex-col rounded-[15px] justify-center items-center bg-[#EDEDED] py-6">
              <img src={smartWatch} alt="" />
              <h4 className="font-popins font-medium text-[16px] leading-6">
                Smart Watch
              </h4>
            </div>
            <div className="flex flex-col rounded-[15px] justify-center items-center bg-[#EDEDED] py-6">
              <img src={camera} alt="" />
              <h4 className="font-popins font-medium text-[16px] leading-6">
                Camera
              </h4>
            </div>
            <div className="flex flex-col rounded-[15px] justify-center items-center bg-[#EDEDED] py-6">
              <img src={headPhone} alt="" />
              <h4 className="font-popins font-medium text-[16px] leading-6">
                HeadPhone
              </h4>
            </div>
            <div className="flex flex-col rounded-[15px] justify-center items-center bg-[#EDEDED] py-6">
              <img src={Computer} alt="" />
              <h4 className="font-popins font-medium text-[16px] leading-6">
                Computer
              </h4>
            </div>
            <div className="flex flex-col rounded-[15px] justify-center items-center bg-[#EDEDED] py-6">
              <img src={phone} alt="" />
              <h4 className="font-popins font-medium text-[16px] leading-6">
                Gaming
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Catagory