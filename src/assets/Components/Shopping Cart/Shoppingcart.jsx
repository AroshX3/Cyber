import React from 'react'
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import iphone from '../../images/Iphone-small.png'
import headphone from '../../images/menu2airpods.png'
import watch from '../../images/menu2applewatch.png'
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router';


const Shoppingcart = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="grid grid-cols-2 items-center gap-12">
            <div className="">
              <div className="pt-18 pb-10">
                <h3 className="font-popins font-semibold text-[24px] leading-6">
                  Shopping Cart
                </h3>
              </div>
              <div className="">
                <div className="pb-10">
                  <div className="flex items-center gap-3.75 pb-10 border-[#A3A3A3] border-b">
                    <img className="w-22.5 h-22.5" src={iphone} alt="" />
                    <div className="flex items-center justify-between gap-6 py-5.25">
                      <div className="max-w-49">
                        <h3 className="font-popins font-medium text-[16px] pb-2 leading-6">
                          Apple iPhone 14 Pro Max 128Gb Deep Purple
                        </h3>
                        <p className="font-popins font-normal">
                          #25139526913984
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <FaMinus />
                        <h4 className="font-popins font-medium text-[16px] leading-4">
                          1
                        </h4>
                        <FaPlus />
                      </div>
                      <div className="">
                        <span className="font-popins font-medium text-[20px] leading-8">
                          $1399
                        </span>
                      </div>
                      <div className="">
                        <AiOutlineClose />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pb-10">
                  <div className="flex items-center gap-3.75 pb-10 border-[#A3A3A3] border-b">
                    <img className="w-22.5 h-22.5" src={headphone} alt="" />
                    <div className="flex items-center justify-between gap-6 py-5.25">
                      <div className="max-w-49">
                        <h3 className="font-popins font-medium text-[16px] pb-2 leading-6">
                          AirPods Max Silver
                        </h3>
                        <p className="font-popins font-normal">#53459358345</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <FaMinus />
                        <h4 className="font-popins font-medium text-[16px] leading-4">
                          1
                        </h4>
                        <FaPlus />
                      </div>
                      <div className="">
                        <span className="font-popins font-medium text-[20px] leading-8">
                          $549
                        </span>
                      </div>
                      <div className="">
                        <AiOutlineClose />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pb-10">
                  <div className="flex items-center gap-3.75 pb-10">
                    <img className="w-22.5 h-22.5" src={watch} alt="" />
                    <div className="flex items-center justify-between gap-6 py-5.25">
                      <div className="max-w-49">
                        <h3 className="font-popins font-medium text-[16px] pb-2 leading-6">
                          Apple Watch Series 9 GPS 41mm Starlight Aluminium
                        </h3>
                        <p className="font-popins font-normal">#63632324</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <FaMinus />
                        <h4 className="font-popins font-medium text-[16px] leading-4">
                          1
                        </h4>
                        <FaPlus />
                      </div>
                      <div className="">
                        <span className="font-popins font-medium text-[20px] leading-8">
                          $399
                        </span>
                      </div>
                      <div className="">
                        <AiOutlineClose />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-[#EBEBEB] p-12">
              <div className="">
                <h4 className="font-popins font-bold text-[20px] pb-10 leading-4">
                  Order Summary
                </h4>
                <div className="pb-6">
                  <div className="">
                    <h5 className="font-popins font-medium text-[14px] leading-4 pb-2 text-[#545454]">
                      Discount code / Promo code
                    </h5>
                  </div>
                  <div className="">
                    <input
                      type="text"
                      placeholder="Code"
                      className="py-4 w-full font-popins font-normal pl-4 text-[14px] leading-6"
                    />
                  </div>
                </div>

                <div className="pb-4">
                  <div className="">
                    <h5 className="font-popins font-medium text-[14px] leading-4 pb-2 text-[#545454]">
                      Your bonus card number
                    </h5>
                  </div>
                  <div className="">
                    <input
                      type="text"
                      placeholder="Enter Card Number"
                      className="py-4 w-full font-popins font-normal pl-4 text-[14px] leading-6"
                    />
                  </div>
                </div>
                <div className=" pb-12">
                  <div className="flex items justify-between pb-4">
                    <h4 className="font-popins font-medium text-[16px] leading-4">
                      Subtotal
                    </h4>
                    <p className="font-popins font-medium text-[16px] leading-8">
                      $2347
                    </p>
                  </div>
                  <div className="flex items justify-between pb-4">
                    <h4 className="font-popins font-normal text-[16px] text-[#545454] leading-8">
                      Estimated Tax
                    </h4>
                    <p className="font-popins font-medium text-[16px] leading-8">
                      $50
                    </p>
                  </div>
                  <div className="flex items justify-between pb-4">
                    <h4 className="font-popins font-normal text-[16px] text-[#545454] leading-8">
                      Estimated shipping & Handling
                    </h4>
                    <p className="font-popins font-medium text-[16px] leading-8">
                      $29
                    </p>
                  </div>
                  <div className="flex items justify-between">
                    <h4 className="font-popins font-normal text-[16px] text-[#545454] leading-8">
                      Total
                    </h4>
                    <p className="font-popins font-medium text-[16px] leading-8">
                      $2426
                    </p>
                  </div>

                  <div className="flex items-center text-center justify-center">
                    <Link className='font-popins text-[16px] font-medium leading-6 px-41.25 py-4 rounded-md bg-black text-white' to='/step1'>Check Out</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Shoppingcart