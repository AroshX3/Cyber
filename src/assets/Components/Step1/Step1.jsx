import React from 'react'
import location from '../../images/location.png'
import shipping from '../../images/Shipping.png'
import payment from '../../images/Payment.png'
import addMore from '../../images/Plus.png'
import line from '../../images/l1.png'
import { MdEdit } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router'

const Step1 = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="">
            <div className="py-18 flex items-center">
              <div className="w-56 flex items-center gap-2">
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
              <div className="w-56 opacity-25 flex items-center gap-2">
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
              <h4 className="font-popins font-semibold text-[20px] leading-6 pb-8 text-[#17183B]">
                Select Address
              </h4>
              <div className="bg-[#F6F6F6] mb-6 py-6 px-6 gap-2 flex justify-between items-center">
                <div className="flex gap-2">
                  <input className="w-6 h-6" type="radio" name="option"></input>
                  <div className="">
                    <div className="">
                      <div className="flex gap-2 pb-4">
                        <p className="font-popins text-[18px] font-normal leading-6 text-[#17183B]">
                          2118 Thornridge
                        </p>
                        <h5 className="w-[51px] h-[26px] font-popins text-center font-medium text-[12px] rounded-md bg-black text-white">
                          office
                        </h5>
                      </div>
                      <div className="">
                        <p className="font-popins font-normal text-[16px] leading-6 pb-2 text-[#17183B]">
                          2118 Thornridge Cir. Syracuse, Connecticut 35624
                        </p>
                        <p className="font-popins font-normal text-[16px] leading-6 text-[#17183B]">
                          (209) 555-0104
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-6">
                  <MdEdit className="w-6 h-6" />
                  <AiOutlineClose className="w-6 h-6" />
                </div>
              </div>
              <div className="bg-[#F6F6F6] mb-6 py-6 px-6 gap-2 flex justify-between items-center">
                <div className="flex gap-2">
                  <input className="w-6 h-6" type="radio" name="option"></input>
                  <div className="">
                    <div className="">
                      <div className="flex gap-2 pb-4">
                        <p className="font-popins text-[18px] font-normal leading-6 text-[#17183B]">
                          Headoffice
                        </p>
                        <h5 className="w-[51px] h-[26px] font-popins text-center font-medium text-[12px] rounded-md bg-black text-white">
                          office
                        </h5>
                      </div>
                      <div className="">
                        <p className="font-popins font-normal text-[16px] leading-6 pb-2 text-[#17183B]">
                          2715 Ash Dr. San Jose, South Dakota 83475
                        </p>
                        <p className="font-popins font-normal text-[16px] leading-6 text-[#17183B]">
                          (704) 555-0127
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-6">
                  <MdEdit className="w-6 h-6" />
                  <AiOutlineClose className="w-6 h-6" />
                </div>
              </div>
            </div>
            <div className="pb-16 text-center">
              <div className="flex items-center pb-2 justify-center">
                <a href="">
                  <img src={addMore} alt="" />
                </a>
              </div>
              <p className="font-popins font-normal text-[14px] leading-4">
                Add New Address
              </p>
            </div>
            <div className="flex pb-12 justify-end gap-6">
              <div className="">
                <Link
                  className="px-21.5 py-6 rounded-lg border font-popins font-medium text-[16px] leading-4 text-black"
                  to="/step"
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
}

export default Step1