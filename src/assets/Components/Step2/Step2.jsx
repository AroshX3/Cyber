import React from "react";
import location from "../../images/bal/location.png";
import shipping from "../../images/bal/Shipping.png";
import payment from "../../images/bal/Payment.png";
import line from "../../images/bal/l1.png";
import { Link } from "react-router";

const Step2 = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="">
            <div className="py-18 sm:flex items-center">
              <div className="flex items-center justify-between pl-4 sm:p-0">
                <div className="w-56 opacity-25 flex justify-center items-center gap-2 sm:flex">
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

                <div className="w-56 flex justify-center items-center gap-2">
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

            <div className="p-4 sm:p-0">
              <h4 className="font-popins font-semibold pb-8 text-[20px] leading-6 pb-8 text-[#17183B]">
                Shipment Method
              </h4>
              <div className="flex flex-col gap-4 pb-56">
                <div className="flex justify-between border border-[#D1D1D8] rounded-lg p-6">
                  <div className="flex gap-4">
                    <input
                      className="w-6 h-6"
                      type="radio"
                      name="option"
                    ></input>
                    <h4 className="font-popins font-medium text-[16px] leading-6">
                      Free
                    </h4>
                    <p className="font-popins font-normal text-[16px] text-[#17183B]">
                      Regulary shipment
                    </p>
                  </div>
                  <div className="">
                    <p className="font-popins font-medium text-[16px] leading-6 ">
                      17 Oct, 2023
                    </p>
                  </div>
                </div>
                <div className="flex justify-between border border-[#D1D1D8] rounded-lg p-6">
                  <div className="flex gap-4">
                    <input
                      className="w-6 h-6"
                      type="radio"
                      name="option"
                    ></input>
                    <h4 className="font-popins font-medium text-[16px] leading-6">
                      $8.50
                    </h4>
                    <p className="font-popins font-normal text-[16px] text-[#17183B]">
                      Get your delivery as soon as possible
                    </p>
                  </div>
                  <div className="">
                    <p className="font-popins font-medium text-[16px] leading-6 ">
                      1 Oct, 2023
                    </p>
                  </div>
                </div>
                <div className="flex justify-between border border-[#D1D1D8] rounded-lg p-6">
                  <div className="flex gap-4">
                    <input
                      className="w-6 h-6"
                      type="radio"
                      name="option"
                    ></input>
                    <h4 className="font-popins font-medium text-[16px] leading-6">
                      Schedule
                    </h4>
                    <p className="font-popins font-normal text-[16px] text-[#17183B]">
                      Pick a date when you want to get your delivery
                    </p>
                  </div>
                  <div className="">
                    <p className="font-popins font-medium text-[16px] leading-6 ">
                      Select Date
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex pb-12 items-center gap-6 justify-center  sm:justify-end ">
              <div className="">
                <Link
                  className="px-21.5 py-6 rounded-lg border font-popins font-medium text-[16px] leading-4 text-black"
                  to="/step1"
                >
                  Back
                </Link>
              </div>
              <div className="">
                <Link
                  className="px-21.5 py-6 rounded-lg font-popins font-medium text-[16px] leading-4 bg-black text-white"
                  to="/step3"
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

export default Step2;
