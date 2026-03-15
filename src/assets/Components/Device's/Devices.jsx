import React from 'react'
import playtation from '../../images/bal/PlayStation.png'
import playstationfull from '../../images/bal/ful-playstation.png'
import headphone from '../../images/bal/headphone.png'
import headphoneful from '../../images/bal/ful-headphone.png'
import vision from '../../images/bal/applevision.png' 
import visionful from '../../images/bal/ful-applevison.png'
import macBook from '../../images/bal/MacBook Pro 14.png'
import macbookfull from '../../images/bal/macbookfull.png'
import { Link } from 'react-router'

const Devices = () => {
  return (
    <>
      <section>
        <div className="devices">
          <div className="flex-none grid grid-cols-1 sm:flex justify-between">
            <div className="">
              <div className="flex-none sm:flex">
                <img className="hidden sm:block" src={playtation} alt="" />
                <img
                  className="block pt-10 mx-auto sm:hidden"
                  src={playstationfull}
                  alt=""
                />
                <div className="flex flex-col items-center justify-center p-4 mb-10 max-w-84 sm:p-0 m-0 mx-auto">
                  <h3 className="font-popins font-medium text-[49px] leading-10">
                    Playstation 5
                  </h3>
                  <p className="pt-4 font-popins font-medium text-[14px] text-center text-[#909090] leading-6 sm:text-left">
                    Incredibly powerful CPUs, GPUs, and an SSD with integrated
                    I/O will redefine your PlayStation experience.
                  </p>
                </div>
              </div>
              <div className="flex-none sm:flex">
                <div className="bg-[#EDEDED] flex-none sm:flex gap-8">
                  <img className="hidden sm:block" src={headphone} alt="" />
                  <img
                    className="block mx-auto pb-4 pt-10 sm:hidden"
                    src={headphoneful}
                    alt=""
                  />
                  <div className="flex flex-col items-center justify-center pb-10 sm:p-0">
                    <h4 className="font-popins font-light flex flex-row gap-2 text-[29px] leading-10">
                      Apple AirPods
                      <span className="font-medium">Max</span>
                    </h4>
                    <p className="pt-4 font-popins text-center font-medium text-[14px] text-[#909090] leading-6 sm:text-left">
                      Computational audio. Listen, it's powerful
                    </p>
                  </div>
                </div>
                <div className="bg-[#353535] flex-none sm:flex">
                  <img className="hidden sm:block" src={vision} alt="" />
                  <img
                    className="bloxk mx-auto pt-10 sm:p-0 sm:hidden"
                    src={visionful}
                    alt=""
                  />
                  <div className="flex flex-col items-center justify-center pb-10 sm:p-0">
                    <h4 className="font-popins font-light text-white gap-2 flex flex-row text-[29px] leading-10">
                      Apple Vision
                      <span className="font-medium">Pro</span>
                    </h4>
                    <p className="pt-4 font-popins font-medium text-center text-[14px] text-[#909090] leading-6 sm:text-left">
                      An immersive way to experience entertainment
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-none sm:flex justify-center items-center pt-10 pb-10">
              <div className=" flex flex-col justify-center items-center w-90 h-90 sm:text-left mx-auto ">
                <img className="block sm:hidden" src={macbookfull} alt="" />
                <h2 className="font-popins font-thin text-[58px] leading-14.5">
                  Macbook <span className="font-medium">Air</span>
                </h2>
                <p className="pt-4 font-popins font-medium text-[14px] pb-4 text-[#909090] leading-6">
                  The new 15‑inch MacBook Air makes room for more of what you
                  love with a spacious Liquid Retina display.
                </p>
                <Link className="text-black bg-white w-[60%] font-popins text-center font-medium text-[16px] leading-6 py-4 border rounded-md" to="">
                  Shop now
                </Link>
              </div>
              <img className="hidden sm:block" src={macBook} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Devices
