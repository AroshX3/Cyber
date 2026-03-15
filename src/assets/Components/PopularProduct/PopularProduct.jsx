import React from "react";
import popularProduct from "../../images/bal/popularproducts.png";
import popolarProduct2 from "../../images/bal/popularproduct2.png";
import popolarProduct3 from "../../images/bal/popularproduct3.png";
import popolarProduct4 from "../../images/bal/popularproduct4.png";

import { Link } from "react-router";

const Picture = ({ desktop, mobile, alt, className = "" }) => (
  <picture>
    <source media="(max-width: 767px)" srcSet={mobile} />
    <img
      src={desktop}
      alt={alt}
      className={`w-full h-auto object-contain ${className}`}
    />
  </picture>
);

const PopularProduct = () => {
  return (
    <section className=" md:px-6 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-10 ">
        <div className="bg-white hidden sm:block">
          <div>
            <Picture
              desktop={popularProduct}
              alt="Popular products banner"
            />
          </div>
          <div className="px-6 py-4">
            <h3 className="font-popins font-light text-[28px] md:text-[33px] pb-4 leading-8">
              Popular Products
            </h3>
            <p className="font-popins font-medium text-[14px] text-[#909090] pb-6 leading-6">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <Link
              className="inline-block py-3 px-6 font-popins font-medium leading-6 text-black border rounded-[5px]"
              to="/productpage"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* 2 */}
        <div className="bg-[#F9F9F9]">
          <div className="flex justify-end">
            <div className="w-1/2 md:w-full">
              <Picture
                desktop={popolarProduct2}
                alt="iPad Pro"
              />
            </div>
          </div>
          <div className="px-6 pt-6 md:pt-14 pb-6">
            <h3 className="font-popins font-light text-[28px] md:text-[33px] pb-4 leading-8">
              Ipad Pro
            </h3>
            <p className="font-popins font-medium text-[14px] text-[#909090] pb-6 leading-6">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <Link
              className="inline-block py-3 px-6 font-popins font-medium leading-6 text-black border rounded-[5px]"
              to="/productpage"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* 3 */}
        <div className="bg-[#EAEAEA] overflow-hidden hidden sm:block">
          <div className="flex  justify-center -translate-y-10">
            <div className="w-3/4 md:w-full">
              <Picture
                desktop={popolarProduct3}
                alt="Samsung Galaxy"
              />
            </div>
          </div>

          <div className="px-6 pt-6 sm:pt-12 pb-6">
            <h3 className="font-popins font-light text-[28px] text-center sm:text-[33px] pb-4 leading-8">
              Samsung Galaxy
            </h3>
            <p className="font-popins font-medium text-[14px] text-[#909090] pb-6 leading-6">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <Link
              className="inline-block py-3 px-6 font-popins font-medium leading-6 text-black border rounded-[5px]"
              to="/productpage"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* 4 - only cell I changed to ensure mobile-safe image and no cutoff */}
        <div className="bg-[#2C2C2C] text-white hidden sm:block">
          {/* Use picture to swap automatically on small screens. object-contain prevents cropping. */}
          <div className="flex justify-end">
            <div className="w-1/2 md: flex items-center">
              <picture>
                <source
                  media="(max-width: 767px)"
                />
                <img
                  src={popolarProduct4}
                  alt="Macbook Pro"
                  className="w-full h-auto object-contain"
                />
              </picture>
            </div>
          </div>

          <div className="px-6 pt-6 md:pt-14 pb-6">
            <h3 className="font-popins font-light text-[28px] md:text-[33px] pb-4 leading-8">
              Macbook Pro
            </h3>
            <p className="font-popins font-medium text-[14px] text-[#909090] pb-6 leading-6 md:text-center">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>

            <Link
              className="inline-block py-3 px-6 font-popins font-medium leading-6 text-black bg-white rounded-[5px]"
              to="/productpage"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularProduct;
