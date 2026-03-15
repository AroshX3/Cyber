import React from 'react'
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import phone from '../../images/bal/Phones.png'
import smartWatch from '../../images/bal/smartWatch.png'
import camera from '../../images/bal/Cameras.png'
import headPhone from '../../images/bal/Headphones.png'
import Computer from '../../images/bal/Computers.png'
import gaming from '../../images/bal/Gaming.png'
import { Link } from 'react-router';
const Catagory = () => {
  return (
    <>
      <section className="pt-20 p-4 ">
        <div className="container">
          <div className="flex sm:justify-between text-center items-baseline gap-4 pb-12">
            <h3 className="font-popins text-center font-medium text-[24px] leading-8">
              Browse By Category
            </h3>
            <div className="flex sm:block justify-between gap-4">
              <MdOutlineArrowBackIos />
              <MdOutlineArrowForwardIos />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-6">
            <Link to="/productpage">
              <div className=" flex flex-col rounded-[15px] justify-center items-center bg-[#EDEDED] py-6">
                <img src={phone} alt="" />
                <h4 className="font-popins font-medium text-[16px] leading-6">
                  Phones
                </h4>
              </div>
            </Link>
            <Link to="/productpage">
              <div className="flex flex-col rounded-[15px] justify-center items-center bg-[#EDEDED] py-6">
                <img src={smartWatch} alt="" />
                <h4 className="font-popins font-medium text-[16px] leading-6">
                  Smart Watch
                </h4>
              </div>
            </Link>
            <Link to="/productpage">
              <div className="flex flex-col rounded-[15px] justify-center items-center bg-[#EDEDED] py-6">
                <img src={camera} alt="" />
                <h4 className="font-popins font-medium text-[16px] leading-6">
                  Camera
                </h4>
              </div>
            </Link>
            <Link to="/productpage">
              <div className="flex flex-col rounded-[15px] justify-center items-center bg-[#EDEDED] py-6">
                <img src={headPhone} alt="" />
                <h4 className="font-popins font-medium text-[16px] leading-6">
                  HeadPhone
                </h4>
              </div>
            </Link>
            <Link to="/productpage">
              <div className="flex flex-col rounded-[15px] justify-center items-center bg-[#EDEDED] py-6">
                <img src={Computer} alt="" />
                <h4 className="font-popins font-medium text-[16px] leading-6">
                  Computer
                </h4>
              </div>
            </Link>
            <Link to="/productpage">
              <div className="flex flex-col rounded-[15px] justify-center items-center bg-[#EDEDED] py-6">
                <img src={gaming} alt="" />
                <h4 className="font-popins font-medium text-[16px] leading-6">
                  Gaming
                </h4>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Catagory