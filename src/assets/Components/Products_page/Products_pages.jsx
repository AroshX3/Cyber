import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import iphone11 from '../../images/Iphone 14 pro 1.png'
import iphoneblue1 from '../../images/iphone_blue (1).png'
import iphonebluecover from '../../images/Iphone 14 pro 1 (1).png'
import iphonetwocamamra from '../../images/Iphone 14 pro 1 (2).png'
import iphoneGold from "../../images/iphone_gold.png";
import { FaChevronLeft } from "react-icons/fa6";
import fackheart from '../../images/Favorite_duotone.png'
import { FaChevronRight } from "react-icons/fa6";

const brandsList = [
  { name: "Apple", count: 110 },
  { name: "Samsung", count: 125 },
  { name: "Xiaomi", count: 68 },
  { name: "Poco", count: 44 },
  { name: "OPPO", count: 36 },
  { name: "Honor", count: 10 },
  { name: "Motorola", count: 34 },
  { name: "Nokia", count: 22 },
  { name: "Realme", count: 36 },
];

const memoryList = [
  { name: "16GB", count: 65 },
  { name: "32GB", count: 123 },
  { name: "64GB", count: 48 },
  { name: "128GB", count: 50 },
  { name: "512GB", count: 8 },
];

function FilterSection({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="pb-6">
      <button
        onClick={() => setOpen((s) => !s)}
        className="w-full flex items-baseline justify-between focus:outline-none"
        aria-expanded={open}
      >
        <h4 className="font-popins font-medium text-[18px] leading-6 text-black">
          {title}
        </h4>
        {open ? <FaChevronDown /> : <FaChevronUp />}
      </button>

      <div className={`pt-6 ${open ? "block" : "hidden"}`}>{children}</div>
    </div>
  );
}

const Products_pages = () => {
  
  const MIN = 0;
  const MAX = 5000;

  
  const [minVal, setMinVal] = useState(1299);
  const [maxVal, setMaxVal] = useState(1299);

  
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedMemory, setSelectedMemory] = useState([]);

  
  const handleFromInput = (v) => {
    const num = Number(String(v).replace(/\D/g, "")) || 0;
    const clamped = Math.min(Math.max(num, MIN), Math.max(maxVal - 1, MIN));
    setMinVal(clamped);
  };
  const handleToInput = (v) => {
    const num = Number(String(v).replace(/\D/g, "")) || 0;
    const clamped = Math.max(Math.min(num, MAX), Math.min(minVal + 1, MAX));
    setMaxVal(clamped);
  };

  
  const handleMinRange = (e) => {
    const val = Number(e.target.value);
    const clamped = Math.min(val, maxVal - 1);
    setMinVal(clamped);
  };

  const handleMaxRange = (e) => {
    const val = Number(e.target.value);
    const clamped = Math.max(val, minVal + 1);
    setMaxVal(clamped);
  };

  
  const toggleBrand = (name) => {
    setSelectedBrands((prev) =>
      prev.includes(name) ? prev.filter((p) => p !== name) : [...prev, name],
    );
  };

  const toggleMemory = (name) => {
    setSelectedMemory((prev) =>
      prev.includes(name) ? prev.filter((p) => p !== name) : [...prev, name],
    );
  };

  
  useEffect(() => {
    if (minVal >= maxVal) {
      setMaxVal(Math.min(minVal + 1, MAX));
    }
    if (maxVal <= minVal) {
      setMinVal(Math.max(maxVal - 1, MIN));
    }
    
  }, [minVal, maxVal]);

  return (
    <>
      <section>
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <ul className="flex gap-6 py-2">
              <li>
                <a
                  className="font-popins text-[#A4A4A4] font-medium text-[16px]"
                  href=""
                >
                  Home
                </a>
              </li>
              <span>
                <FaChevronRight className="text-[#A4A4A4]" />
              </span>
              <li>
                <a
                  className="font-popins text-[#A4A4A4] font-medium text-[16px]"
                  href=""
                >
                  Catalog
                </a>
              </li>
              <span>
                <FaChevronRight className="text-[#A4A4A4]" />
              </span>
              <li>
                <a
                  className="font-popins text-black font-medium text-[16px]"
                  href=""
                >
                  Smartphones
                </a>
              </li>
            </ul>
          </div>

          <div className="flex gap-8">
            <div className="w-[30%]">
              <FilterSection title="Price" defaultOpen={true}>
                <div className="flex items-center gap-6 pb-4">
                  <div className="w-1/2">
                    <p className="text-[#A7A7A7] text-[14px]">From</p>
                    <input
                      type="text"
                      value={minVal}
                      onChange={(e) => handleFromInput(e.target.value)}
                      className="w-full py-2 rounded-none text-[14px] border px-2"
                    />
                  </div>

                  <div className="w-1/2">
                    <p className="text-[#A7A7A7] text-[14px] text-right">To</p>
                    <input
                      type="text"
                      value={maxVal}
                      onChange={(e) => handleToInput(e.target.value)}
                      className="w-full py-2 rounded-none text-[14px] border px-2"
                    />
                  </div>
                </div>
                <div className="relative h-6">
                  <div className="absolute inset-0 top-2 h-1 bg-gray-300 rounded-full" />
                  <div
                    className="absolute top-2 h-1 bg-black rounded-full"
                    style={{
                      left: `${(minVal / MAX) * 100}%`,
                      width: `${((maxVal - minVal) / MAX) * 100}%`,
                    }}
                  />

                  <input
                    type="range"
                    min={MIN}
                    max={MAX}
                    value={minVal}
                    onChange={handleMinRange}
                    className="absolute inset-0 w-full h-6 appearance-none"
                    style={{ zIndex: 40 }}
                  />

                  <input
                    type="range"
                    min={MIN}
                    max={MAX}
                    value={maxVal}
                    onChange={handleMaxRange}
                    className="absolute inset-0 w-full h-6 appearance-none"
                    style={{ zIndex: 50 }}
                  />
                </div>
              </FilterSection>

              {/* Brand */}
              <FilterSection
                className="underline"
                title="Brand"
                defaultOpen={true}
              >
                <div className="pb-4 relative">
                  <CiSearch className="absolute left-3 top-3 text-lg" />
                  <input
                    className="w-full p-2 text-[14px] pl-10 bg-[#F5F5F5] rounded-lg"
                    placeholder="Search"
                    type="text"
                    aria-label="Search brands"
                  />
                </div>

                <ul className="space-y-3">
                  {brandsList.map((b) => (
                    <li key={b.name}>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedBrands.includes(b.name)}
                          onChange={() => toggleBrand(b.name)}
                          className="w-4 h-4 accent-black"
                        />
                        <span className="flex items-baseline gap-2 font-popins">
                          <span className="font-medium text-[15px]">
                            {b.name}
                          </span>
                          <span className="text-[12px] text-[rgba(0,0,0,0.45)]">
                            {b.count}
                          </span>
                        </span>
                      </label>
                    </li>
                  ))}
                </ul>
              </FilterSection>

              {/* Built-in memory */}
              <FilterSection title="Built-in memory" defaultOpen={false}>
                <div className="pb-4 relative">
                  <CiSearch className="absolute left-3 top-3 text-lg" />
                  <input
                    className="w-full p-2 text-[14px] pl-10"
                    placeholder="Search memory"
                    type="text"
                    aria-label="Search memory"
                  />
                </div>

                <ul className="space-y-3">
                  {memoryList.map((m) => (
                    <li key={m.name}>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedMemory.includes(m.name)}
                          onChange={() => toggleMemory(m.name)}
                          className="w-4 h-4 accent-black "
                        />
                        <span className="flex items-baseline gap-2 font-popins">
                          <span className="font-medium text-[15px]">
                            {m.name}
                          </span>
                          <span className="text-[12px] text-[rgba(0,0,0,0.45)]">
                            {m.count}
                          </span>
                        </span>
                      </label>
                    </li>
                  ))}
                </ul>
              </FilterSection>

              <FilterSection title="Protection class" defaultOpen={false}>
                <div className="text-sm text-gray-600">
                  Filters will go here
                </div>
              </FilterSection>

              <FilterSection title="Screen diagonal" defaultOpen={false}>
                <div className="text-sm text-gray-600">
                  Filters will go here
                </div>
              </FilterSection>

              <FilterSection title="Screen type" defaultOpen={false}>
                <div className="text-sm text-gray-600">
                  Filters will go here
                </div>
              </FilterSection>

              <FilterSection title="Battery capacity" defaultOpen={false}>
                <div className="text-sm text-gray-600">
                  Filters will go here
                </div>
              </FilterSection>
            </div>

            <div className="w-[80%] flex flex-col justify-center items-center">
              <div className="">
                <div className="pb-6 flex justify-between items-baseline">
                  <h3 className="font-medium font-popins text-[16px] text-[#6C6C6C] leading-4">
                    Selected Products:
                    <span className="text-[20px] pl-1.5 text-black">85</span>
                  </h3>
                  <div className="flex justify-between items-center border p-3 rounded-lg border-[#D4D4D4] w-[256px]">
                    <h4 className="font-popins font-normal text-[14px] leading-4">
                      By rating
                    </h4>
                    <FaChevronDown />
                  </div>
                </div>
                <div className="">
                  <div className="grid grid-cols-3">
                    <div className=" bg-[#F6F6F6]">
                      <div className="flex justify-end ">
                        <img className="pt-6 pr-4" src={fackheart} alt="" />
                      </div>
                      <div className="flex justify-center items-center">
                        <img className="w-40 h-40" src={iphoneGold} alt="" />
                      </div>
                      <p className="font-popins font-medium text-[16px] pt-4 leading-6 text-center px-4.5">
                        Apple iPhone 14 Pro 512GB Gold (MQ233)
                      </p>
                      <h4 className="font-popins font-semibold text-[24px] leading-6 pt-4 text-center">
                        $1437
                      </h4>
                      <div className="button pb-6 pt-9 flex justify-center items-center">
                        <a
                          className="font-popins bg-black rounded-lg text-white text-[14px] leading-6 px-16 py-3 "
                          href=""
                        >
                          Buy Now
                        </a>
                      </div>
                    </div>
                    <div className=" bg-[#F6F6F6]">
                      <div className="flex justify-end ">
                        <img className="pt-6 pr-4" src={fackheart} alt="" />
                      </div>
                      <div className="flex justify-center items-center">
                        <img className="w-40 h-40" src={iphone11} alt="" />
                      </div>
                      <p className="font-popins font-medium text-[16px] pt-4 leading-6 text-center px-4.5">
                        Apple iPhone 11 128GB White (MQ233)
                      </p>
                      <h4 className="font-popins font-semibold text-[24px] leading-6 pt-4 text-center">
                        $510
                      </h4>
                      <div className="button pb-6 pt-9 flex justify-center items-center">
                        <a
                          className="font-popins bg-black rounded-lg text-white text-[14px] leading-6 px-16 py-3 "
                          href=""
                        >
                          Buy Now
                        </a>
                      </div>
                    </div>
                    <div className=" bg-[#F6F6F6]">
                      <div className="flex justify-end ">
                        <img className="pt-6 pr-4" src={fackheart} alt="" />
                      </div>
                      <div className="flex justify-center items-center">
                        <img className="w-40 h-40" src={iphone11} alt="" />
                      </div>
                      <p className="font-popins font-medium text-[16px] pt-4 leading-6 text-center px-4.5">
                        Apple iPhone 11 128GB White (MQ233)
                      </p>
                      <h4 className="font-popins font-semibold text-[24px] leading-6 pt-4 text-center">
                        $510
                      </h4>
                      <div className="button pb-6 pt-9 flex justify-center items-center">
                        <a
                          className="font-popins bg-black rounded-lg text-white text-[14px] leading-6 px-16 py-3 "
                          href=""
                        >
                          Buy Now
                        </a>
                      </div>
                    </div>
                    <div className=" bg-[#F6F6F6]">
                      <div className="flex justify-end ">
                        <img className="pt-6 pr-4" src={fackheart} alt="" />
                      </div>
                      <div className="flex justify-center items-center">
                        <img className="w-40 h-40" src={iphoneblue1} alt="" />
                      </div>
                      <p className="font-popins font-medium text-[16px] pt-4 leading-6 text-center px-4.5">
                        Apple iPhone 14 Pro 1TB Gold (MQ2V3)
                      </p>
                      <h4 className="font-popins font-semibold text-[24px] leading-6 pt-4 text-center">
                        $1499
                      </h4>
                      <div className="button pb-6 pt-9 flex justify-center items-center">
                        <a
                          className="font-popins bg-black rounded-lg text-white text-[14px] leading-6 px-16 py-3 "
                          href=""
                        >
                          Buy Now
                        </a>
                      </div>
                    </div>
                    <div className=" bg-[#F6F6F6]">
                      <div className="flex justify-end ">
                        <img className="pt-6 pr-4" src={fackheart} alt="" />
                      </div>
                      <div className="flex justify-center items-center">
                        <img className="w-40 h-40" src={iphoneGold} alt="" />
                      </div>
                      <p className="font-popins font-medium text-[16px] pt-4 leading-6 text-center px-4.5">
                        Apple iPhone 14 Pro 1TB Gold (MQ2V3)
                      </p>
                      <h4 className="font-popins font-semibold text-[24px] leading-6 pt-4 text-center">
                        $1399
                      </h4>
                      <div className="button pb-6 pt-9 flex justify-center items-center">
                        <a
                          className="font-popins bg-black rounded-lg text-white text-[14px] leading-6 px-16 py-3 "
                          href=""
                        >
                          Buy Now
                        </a>
                      </div>
                    </div>
                    <div className=" bg-[#F6F6F6]">
                      <div className="flex justify-end ">
                        <img className="pt-6 pr-4" src={fackheart} alt="" />
                      </div>
                      <div className="flex justify-center items-center">
                        <img
                          className="w-40 h-40"
                          src={iphonebluecover}
                          alt=""
                        />
                      </div>
                      <p className="font-popins font-medium text-[16px] pt-4 leading-6 text-center px-4.5">
                        Apple iPhone 14 Pro 128GB Deep Purple (MQ0G3)
                      </p>
                      <h4 className="font-popins font-semibold text-[24px] leading-6 pt-4 text-center">
                        $1600
                      </h4>
                      <div className="button pb-6 pt-9 flex justify-center items-center">
                        <a
                          className="font-popins bg-black rounded-lg text-white text-[14px] leading-6 px-16 py-3 "
                          href=""
                        >
                          Buy Now
                        </a>
                      </div>
                    </div>
                    <div className=" bg-[#F6F6F6]">
                      <div className="flex justify-end ">
                        <img className="pt-6 pr-4" src={fackheart} alt="" />
                      </div>
                      <div className="flex justify-center items-center">
                        <img
                          className="w-40 h-40"
                          src={iphonetwocamamra}
                          alt=""
                        />
                      </div>
                      <p className="font-popins font-medium text-[16px] pt-4 leading-6 text-center px-4.5">
                        Apple iPhone 13 mini 128GB Pink (MLK23)
                      </p>
                      <h4 className="font-popins font-semibold text-[24px] leading-6 pt-4 text-center">
                        $850
                      </h4>
                      <div className="button pb-6 pt-9 flex justify-center items-center">
                        <a
                          className="font-popins bg-black rounded-lg text-white text-[14px] leading-6 px-16 py-3 "
                          href=""
                        >
                          Buy Now
                        </a>
                      </div>
                    </div>
                    <div className=" bg-[#F6F6F6]">
                      <div className="flex justify-end ">
                        <img className="pt-6 pr-4" src={fackheart} alt="" />
                      </div>
                      <div className="flex justify-center items-center">
                        <img
                          className="w-40 h-40"
                          src={iphonebluecover}
                          alt=""
                        />
                      </div>
                      <p className="font-popins font-medium text-[16px] pt-4 leading-6 text-center px-4.5">
                        Apple iPhone 14 Pro 256GB Space Black (MQ0T3)
                      </p>
                      <h4 className="font-popins font-semibold text-[24px] leading-6 pt-4 text-center">
                        $1399
                      </h4>
                      <div className="button pb-6 pt-9 flex justify-center items-center">
                        <a
                          className="font-popins bg-black rounded-lg text-white text-[14px] leading-6 px-16 py-3 "
                          href=""
                        >
                          Buy Now
                        </a>
                      </div>
                    </div>
                    <div className=" bg-[#F6F6F6]">
                      <div className="flex justify-end ">
                        <img className="pt-6 pr-4" src={fackheart} alt="" />
                      </div>
                      <div className="flex justify-center items-center">
                        <img className="w-40 h-40" src={iphoneblue1} alt="" />
                      </div>
                      <p className="font-popins font-medium text-[16px] pt-4 leading-6 text-center px-4.5">
                        Apple iPhone 14 Pro 256GB Silver (MQ103)
                      </p>
                      <h4 className="font-popins font-semibold text-[24px] leading-6 pt-4 text-center">
                        $1399
                      </h4>
                      <div className="button pb-6 pt-9 flex justify-center items-center">
                        <a
                          className="font-popins bg-black rounded-lg text-white text-[14px] leading-6 px-16 py-3 "
                          href=""
                        >
                          Buy Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex items-center gap-4">
                  <FaChevronLeft />

                  <div className="py-1 px-3 bg-black rounded-md">
                    <a
                      href=""
                      className="font-popins font-medium text-[18px]  text-white leading-6"
                    >
                      1
                    </a>
                  </div>
                  <div className="py-1 px-3 bg-white rounded-md">
                    <a
                      href=""
                      className="font-popins font-medium text-[18px]  text-black leading-6"
                    >
                      2
                    </a>
                  </div>
                  <div className="py-1 px-3 bg-white rounded-md">
                    <a
                      href=""
                      className="font-popins font-medium text-[18px]  text-black leading-6"
                    >
                      3
                    </a>
                  </div>
                  <div className="py-1 px-3 bg-white rounded-md">
                    <a
                      href=""
                      className="font-popins font-medium text-[18px]  text-[#737373] leading-6"
                    >
                      ....
                    </a>
                  </div>
                  <div className="py-1 px-3 bg-white rounded-md">
                    <a
                      href=""
                      className="font-popins font-medium text-[18px]  text-black leading-6"
                    >
                      12
                    </a>
                  </div>
                  <FaChevronRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products_pages;
