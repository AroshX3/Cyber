import React from "react";
import Iphone from "../../images/bal/iphone14.png";

const Banner = () => {
  return (
    <>
      <section className="bg-[#211C24]">
        <div className="container">
          <div className="wrapper flex-none p-4 sm:flex sm:items-center sm:justify-between">
            <div className="content m-0 sm:m-auto text-center sm:text-left">
              <h4 className="font-fagtree font-[600] pb-8 text-[25px] leading-8 text-[rgba(255,255,255,0.5)] pt-22 sm:pt-0">
                Pro.Beyond.
              </h4>

              <div className="flex flex-col items-center sm:items-start gap-2">
                <h2 className="font-popins font-thin text-[96px] leading-18 text-white">
                  IPhone 14
                </h2>

                <p className="font-popins font-semibold text-white text-[96px]">
                  Pro
                </p>
              </div>

              <p className="pb-10 font-popins font-medium text-[18px] leading-6 text-[#909090]">
                Created to change everything for the better. For everyone
              </p>

              <div className="button flex justify-center sm:justify-start">
                <a
                  className="py-4 px-13.5 font-popins font-[500] leading-6 text-white border rounded-[5px]"
                  href="/productpage"
                >
                  Shop Now
                </a>
              </div>
            </div>

            <div className="image pt-19.5 flex justify-center sm:justify-end">
              <img src={Iphone} alt="iphone" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
