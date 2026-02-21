import React from 'react'
import Iphone from '../../images/iphone14.png'
const Banner = () => {
  return (
    <>
      <section className="bg-[#211C24]">
        <div className="container">
          <div className="wrapper flex justify-between">
            <div className="content  m-auto">
              <h4 className="font-fagtree font-[600px] text-[25px] leading-8 text-[rgba(255,255,255,0.5)]">
                Pro.Beyond.
              </h4>
              <div className="flex items-center gap-8">
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
              <div className="button">
                <a
                  className="py-4 px-13.5  font-popins font-[500px] leading-6 text-white border rounded-[5px]"
                  href=""
                >
                  Shop Now
                </a>
              </div>
            </div>
            <div className="image pt-19.5">
              <img src={Iphone} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner