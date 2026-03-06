import React from "react";
import popularProduct from "../../images/popularproducts.png";
import popolarProduct2 from "../../images/popularproduct2.png";
import popolarProduct3 from "../../images/popularproduct3.png";
import popolarProduct4 from "../../images/popularproduct4.png";
const PopularProduct = () => {
  return (
    <>
      <section>
        <div className="grid grid-cols-4  pb-10 items-start">
          <div className="">
            <div className="">
              <img src={popularProduct} alt="" />
            </div>
            <div className="px-8">
              <h3 className=" font-popins font-light text-[33px] pb-4 leading-12">
                Popular Products
              </h3>
              <p className="font-popins font-medium text-[14px] text-[#909090] pb-6 leading-6">
                iPad combines a magnificent 10.2-inch Retina display, incredible
                performance, multitasking and ease of use.
              </p>

              <div className="button">
                <a
                  className="py-4 px-13.5  font-popins font-[500px] leading-6 text-black border rounded-[5px]"
                  href=""
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>

          <div className="bg-[#F9F9F9] h-149.25">
            <div className="flex justify-end">
              <img src={popolarProduct2} alt="" />
            </div>
            <div className="px-8 pt-14">
              <h3 className=" font-popins font-light text-[33px] pb-4 leading-12">
                Ipad Pro
              </h3>
              <p className="font-popins font-medium text-[14px] text-[#909090] pb-6 leading-6">
                iPad combines a magnificent 10.2-inch Retina display, incredible
                performance, multitasking and ease of use.
              </p>

              <div className="button">
                <a
                  className="py-4 px-13.5  font-popins font-[500px] leading-6 text-black border rounded-[5px]"
                  href=""
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>

          <div className="bg-[#EAEAEA] pb-7 overflow-hidden">
            <div className="flex justify-center -translate-y-10">
              <img src={popolarProduct3} alt="" className="transform" />
            </div>

            <div className="px-8 pt-12">
              <h3 className="font-popins font-light text-[33px] pb-4 leading-12">
                Samsung Galaxy
              </h3>

              <p className="font-popins font-medium text-[14px] text-[#909090] pb-6 leading-6">
                iPad combines a magnificent 10.2-inch Retina display, incredible
                performance, multitasking and ease of use.
              </p>

              <div className="button">
                <a
                  className="py-4 px-13.5 font-popins font-[500px] leading-6 text-black border rounded-[5px]"
                  href=""
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>

          {/* fourth cell */}
          <div className="bg-[#2C2C2C]">
            <div className="flex justify-end">
              <img src={popolarProduct4} alt="" />
            </div>
            <div className="relative">
              <div className="px-8 pt-14">
                <h3 className=" font-popins font-light text-[33px] pb-4 leading-12">
                  Macbook Pro
                </h3>
                <p className="font-popins font-medium text-[14px] text-[#909090] pb-6 leading-6">
                  iPad combines a magnificent 10.2-inch Retina display,
                  incredible performance, multitasking and ease of use.
                </p>

                <div className="button">
                  <a
                    className="py-4 px-13.5  font-popins font-[500px] leading-6 text-black border rounded-[5px]"
                    href=""
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularProduct;
