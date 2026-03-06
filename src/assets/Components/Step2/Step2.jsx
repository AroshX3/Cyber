import React from "react";
import location from "../../images/location.png";
import shipping from "../../images/Shipping.png";
import payment from "../../images/Payment.png";
import addMore from "../../images/Plus.png";
import line from "../../images/l1.png";
import { MdEdit } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router";

const Step2 = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="">
            <div className="py-18 flex items-center">
              <div className="w-56 opacity-25 flex items-center gap-2">
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
              <div className="w-56 flex items-center gap-2">
                <img className="w-6 h-6 " src={shipping} alt="" />
                <div className="">
                  <h4 className="font-popins font-medium text-[16px] leading-4">
                    step 2
                  </h4>
                  <p className="font-popins font-medium text-[19px] leading-6">
                    Shipping
                  </p>
                </div>
              </div>
              <img src={line} alt="" />
              <div className="w-56 opacity-25 flex items-center gap-2">
                <img className="w-6 h-6 " src={payment} alt="" />
                <div className="">
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
              <h4>Shipment Method</h4>
            </div>

            <div className="flex pb-12 justify-end gap-6">
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
                  to=""
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
