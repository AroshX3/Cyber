
import React from "react";
import banner from "../../images/bal/Footerbanner.png";
import { Link } from "react-router";

const BigSummerSale = () => {
  return (
    <section
      
      style={{ backgroundImage: `url(${banner})` }}
      className="bg-cover bg-center"
    >
      <div className="container mx-auto py-12 md:py-20 lg:py-28 flex items-center justify-center">
        <div className="text-center max-w-3xl px-6">
          <h1 className="font-popins font-thin text-white text-3xl md:text-5xl lg:text-[72px] leading-tight md:leading-tight">
            Big Summer <span className="font-popins font-medium">Sale</span>
          </h1>

          <p className="mt-4 text-[14px] md:text-[16px] text-[#B0B0B0]">
            Commodo fames vitae vitae leo mauris in. Eu consequat.
          </p>

          <Link
            to="/productpage"
            className="inline-block font-popins font-medium text-[16px] leading-6 mt-8 md:mt-10 px-6 md:px-14 py-3 md:py-4 text-[14px] md:text-[16px] border border-white rounded-lg text-white bg-transparent hover:bg-white hover:text-black transition"
            role="button"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BigSummerSale;
