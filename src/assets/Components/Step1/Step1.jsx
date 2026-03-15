import React from "react";
import location from "../../images/bal/location.png";
import shipping from "../../images/bal/Shipping.png";
import payment from "../../images/bal/Payment.png";
import addMore from "../../images/bal/Plus.png";
import line from "../../images/bal/l1.png";
import { MdEdit } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router";

const Step1 = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="">
            <div className="py-18 sm:flex items-center">
              <div className="flex items-center justify-between pl-4 sm:p-0">
                <div className="w-56  flex justify-center items-center gap-2 sm:flex">
                  <img className="w-6 h-6" src={location} alt="" />
                  <div className="">
                    <h4 className="font-popins font-medium text-[16px] leading-4">
                      step 1
                    </h4>
                    <p className="font-popins font-medium text-[19px] leading-6">
                      Address
                    </p>
                  </div>
                </div>

                <img src={line} alt="" />

                <div className="w-56 flex opacity-25 justify-center items-center gap-2">
                  <img className="w-6 h-6" src={shipping} alt="" />
                  <div>
                    <h4 className="font-popins font-medium text-[16px] leading-4">
                      step 2
                    </h4>
                    <p className="font-popins font-medium text-[19px] leading-6">
                      Shipping
                    </p>
                  </div>
                </div>
              </div>

              <img className="hidden sm:block" src={line} alt="" />

              <div className="w-56 hidden opacity-25 sm:flex justify-center items-center gap-2">
                <img className="w-6 h-6" src={payment} alt="" />
                <div>
                  <h4 className="font-popins font-medium text-[16px] leading-4">
                    step 3
                  </h4>
                  <p className="font-popins font-medium text-[19px] leading-6">
                    Payment
                  </p>
                </div>
              </div>
            </div>

            <div className="">
              <h4 className="font-popins font-semibold text-[20px] leading-6 pb-8 text-[#17183B] md: pl-4">
                Select Address
              </h4>

              <div className="bg-[#F6F6F6] mb-6 py-6 px-6 gap-2 flex">
                <div className="flex gap-2 w-full">
                  <input
                    className="w-6 h-6 flex-shrink-0 mt-1"
                    type="radio"
                    name="option"
                  ></input>
                  <div className="">
                    <div className="flex gap-2 pb-4 items-start md:items-center">
                      <p className="font-popins text-[18px] font-normal leading-6 text-[#17183B]">
                        2118 Thornridge
                      </p>
                      <h5 className="w-[51px] h-[26px] font-popins text-center font-medium text-[12px] rounded-md bg-black text-white">
                        Home
                      </h5>
                    </div>
                    <div>
                      <p className="font-popins font-normal text-[16px] leading-6 pb-2 text-[#17183B]">
                        2118 Thornridge Cir. Syracuse, Connecticut 35624
                      </p>
                      <p className="font-popins font-normal text-[16px] leading-6 text-[#17183B]">
                        (209) 555-0104
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6 mt-4 md:mt-0">
                  <button
                    aria-label="edit"
                    className="p-1 rounded hover:bg-black/5"
                  >
                    <MdEdit className="w-6 h-6" />
                  </button>
                  <button
                    aria-label="close"
                    className="p-1 rounded hover:bg-black/5"
                  >
                    <AiOutlineClose className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="bg-[#F6F6F6] mb-6 py-6 px-6 gap-2 flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="flex gap-2 w-full">
                  <input
                    className="w-6 h-6 flex-shrink-0 mt-1"
                    type="radio"
                    name="option"
                  ></input>
                  <div className="flex-1">
                    <div className="flex gap-2 pb-4 items-start md:items-center">
                      <p className="font-popins text-[18px] font-normal leading-6 text-[#17183B]">
                        Headoffice
                      </p>
                      <h5 className="w-[51px] h-[26px] font-popins text-center font-medium text-[12px] rounded-md bg-black text-white">
                        office
                      </h5>
                    </div>
                    <div>
                      <p className="font-popins font-normal text-[16px] leading-6 pb-2 text-[#17183B]">
                        2715 Ash Dr. San Jose, South Dakota 83475
                      </p>
                      <p className="font-popins font-normal text-[16px] leading-6 text-[#17183B]">
                        (704) 555-0127
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6 mt-4 md:mt-0">
                  <button
                    aria-label="edit"
                    className="p-1 rounded hover:bg-black/5"
                  >
                    <MdEdit className="w-6 h-6" />
                  </button>
                  <button
                    aria-label="close"
                    className="p-1 rounded hover:bg-black/5"
                  >
                    <AiOutlineClose className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>

            <div className="pb-16 text-center">
              <div className="flex items-center pb-2 justify-center">
                <a href="">
                  <img src={addMore} alt="" className="w-8 h-8" />
                </a>
              </div>
              <p className="font-popins font-normal text-[14px] leading-4">
                Add New Address
              </p>
            </div>

            <div className="flex pb-12 items-center gap-6 justify-center  sm:justify-end ">
              <div className="">
                <Link
                  className="px-21.5 py-6 rounded-lg border font-popins font-medium text-[16px] leading-4 text-black"
                  to="/shopcart"
                >
                  Back
                </Link>
              </div>
              <div className="">
                <Link
                  className="px-21.5 py-6 rounded-lg font-popins font-medium text-[16px] leading-4 bg-black text-white"
                  to="/step2"
                >
                  Next
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Step1;
