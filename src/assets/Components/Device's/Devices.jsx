import React from 'react'
import playtation from '../../images/PlayStation.png'
import headphone from '../../images/headphone.png'
import vision from '../../images/applevision.png' 
import macBook from '../../images/MacBook Pro 14.png'

const Devices = () => {
  return (
    <>
      <section>
        <div className="devices">
          <div className="flex">
            <div className="">
              <div className="flex">
                <img src={playtation} alt="" />
                <div className="py-25 pr-12">
                  <h3 className="font-popins font-medium text-[49px] leading-10">
                    Playstation 5
                  </h3>
                  <p className="pt-4 font-popins font-medium text-[14px] text-[#909090] leading-6">
                    Incredibly powerful CPUs, GPUs, and an SSD with integrated
                    I/O will redefine your PlayStation experience.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="bg-[#EDEDED] flex">
                  <img src={headphone} alt="" />
                  <div className="py-[64.5px] px-12">
                    <h4 className="font-popins font-light text-[29px] leading-10">
                      Apple <br /> AirPods{" "}
                      <span className="font-medium">Max</span>
                    </h4>
                    <p className="pt-4 font-popins font-medium text-[14px] text-[#909090] leading-6">
                      Computational audio. <br /> Listen, it's powerful
                    </p>
                  </div>
                </div>
                <div className="bg-[#353535] flex">
                  <img src={vision} alt="" />
                  <div className="py-[64.5px] px-12">
                    <h4 className="font-popins font-light text-white text-[29px] leading-10">
                      Apple <br /> Vision{" "}
                      <span className="font-medium">Pro</span>
                    </h4>
                    <p className="pt-4 font-popins font-medium text-[14px] text-[#909090] leading-6">
                      An immersive way to <br /> experience entertainment
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="py-48 pl-14 pr-3">
                <h2 className="font-popins font-thin text-[58px] leading-14.5">
                  Macbook <span className="font-medium">Air</span>
                </h2>
                <p className="pt-4 font-popins font-medium text-[14px] text-[#909090] leading-6">
                  The new 15‑inch MacBook Air makes room for more of what you
                  love with a spacious Liquid Retina display.
                </p>
              </div>
              <img src={macBook} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Devices
