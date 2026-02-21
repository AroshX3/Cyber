import React from "react";
import banner from "../../../../public/Footerbanner.png";
const BigSummerSale = () => {
  return (
    <>
      <section className='bg-[url("public/Footerbanner.png")] py-27.5 bg-cover bg-center'>
        <div className="container mx-auto flex items-center justify-center flex-col">
          <h1 className="font-poppins font-thin text-white text-[72px] text-center">
            Big Summer <span className="font-medium">Sale</span>
          </h1>
          <p className="font-poppins font-normal text-[16px] text-[#787878] text-center">
            Commodo fames vitae vitae leo mauris in. Eu consequat.
          </p>
          <a
            href="#"
            className="px-14 text-[16px] mt-10 py-4 border border-white rounded-lg duration-150 hover:bg-white hover:text-black font-popins font-medium text-white"
          >
            Shop Now
          </a>
        </div>
      </section>
    </>
  );
};

export default BigSummerSale;
