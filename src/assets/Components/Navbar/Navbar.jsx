// src/components/Navbar.jsx
import React, { useState } from "react";
import logo from "../../images/cyber_logo.png";
import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { FiSmartphone } from "react-icons/fi";
import { HiComputerDesktop } from "react-icons/hi2";
import { TbDeviceGamepad } from "react-icons/tb";
import { MdOutlineCameraAlt } from "react-icons/md";
import { FiHeadphones } from "react-icons/fi";
import { Link } from "react-router";

const categories = [
  { id: "phones", label: "Phones", Icon: FiSmartphone },
  { id: "computers", label: "Computers", Icon: HiComputerDesktop },
  { id: "watches", label: "Smart Watches", Icon: TbDeviceGamepad },
  { id: "cameras", label: "Cameras", Icon: MdOutlineCameraAlt },
  { id: "headphones", label: "Headphones", Icon: FiHeadphones },
  { id: "gaming", label: "Gaming", Icon: TbDeviceGamepad },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSearch, setMobileSearch] = useState("");
  const [desktopSearch, setDesktopSearch] = useState("");

  return (
    <header className="w-full">
      {/* TOP NAV */}
      <nav className="bg-white">
        <div className="container">
          <div className="pt-5 pb-3 flex items-center gap-4">
            {/* logo */}
            <div className="logo pr-4">
              <Link to="/">
                <img src={logo} alt="logo" className="h-9 object-contain" />
              </Link>
            </div>

            {/* desktop search (hidden on small) */}
            <div className="relative hidden md:flex items-center flex-1 max-w-[560px]">
              <IoIosSearch className="absolute left-3 text-gray-400 text-[18px]" />
              <input
                type="text"
                value={desktopSearch}
                onChange={(e) => setDesktopSearch(e.target.value)}
                placeholder="Search"
                className="pl-10 pr-4 py-3 w-full rounded-lg font-popins text-[14px] leading-5 bg-[#F5F5F5] focus:outline-none"
              />
            </div>

            {/* desktop menu links (hidden on small) */}
            <div className="menu hidden md:block pl-6">
              <ul className="flex gap-8">
                <li>
                  <Link
                    className="hover:text-black transition-colors duration-200"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-black transition-colors duration-200"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-black transition-colors duration-200"
                    to="/contact"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-black transition-colors duration-200"
                    to="/blog"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* right icons & mobile hamburger */}
            <div className="ml-auto flex items-center gap-4">
              {/* mobile hamburger (shows slide-over) */}
              <button
                className="md:hidden p-2 rounded hover:bg-gray-100"
                aria-label="open mobile menu"
                onClick={() => setMobileOpen(true)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>

              {/* icons (show on sm+) */}
              <Link className="hidden sm:inline-block" to="">
                <FaRegHeart className="text-[22px]" />
              </Link>
              <Link className="hidden sm:inline-block" to="/shopcart">
                <IoCartOutline className="text-[22px]" />
              </Link>
              <Link className="hidden sm:inline-block" to="">
                <FiUser className="text-[22px]" />
              </Link>
            </div>
          </div>
        </div>

        {/* CATEGORY BAR — hidden on mobile, shown on md+ */}
        <div className="hidden md:block bg-[#2E2E2E] py-2">
          <div className="container">
            <div className="Chatagory">
              <ul className="flex gap-6 md:gap-0 md:justify-between items-center overflow-x-auto md:overflow-visible whitespace-nowrap">
                {categories.map((cat) => (
                  <li
                    key={cat.id}
                    className="flex items-center gap-2 min-w-fit"
                  >
                    <cat.Icon className="text-white/60" />
                    <a className="text-white/80" href={`#${cat.id}`}>
                      {cat.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU (slide-over style) */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50">
          {/* backdrop (lower z than panel so-panel receives clicks) */}
          <button
            className="absolute inset-0 bg-black/40 z-40"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          />

          {/* panel (on top) */}
          <div className="absolute right-0 top-0 w-11/12 max-w-[360px] h-full bg-white shadow-xl overflow-auto z-50">
            <div className="p-4 flex items-center justify-between border-b">
              <div className="flex items-center gap-3">
                <Link to="/">
                  <img src={logo} alt="logo" className="h-8 object-contain" />
                </Link>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="p-2"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* mobile search */}
            <div className="p-4 border-b">
              <div className="relative">
                <IoIosSearch className="absolute left-3 top-3 text-gray-400 text-[18px]" />
                <input
                  type="text"
                  placeholder="Search products"
                  value={mobileSearch}
                  onChange={(e) => setMobileSearch(e.target.value)}
                  className="pl-10 pr-3 py-3 w-full rounded-lg font-popins text-[14px] leading-5 bg-[#F5F5F5] focus:outline-none"
                />
              </div>
            </div>

            {/* nav links (mobile) */}
            <div className="p-4 border-b">
              <ul className="flex flex-col gap-3">
                <li>
                  <Link
                    className="block py-2 hover:text-black transition-colors"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="block py-2 hover:text-black transition-colors"
                    to=""
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="block py-2 hover:text-black transition-colors"
                    to=""
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="block py-2 hover:text-black transition-colors"
                    to=""
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* mobile categories inside slide-over (only here) */}
            <div className="p-4 border-b">
              <h3 className="text-sm font-semibold mb-3">Categories</h3>
              <ul className="flex flex-col gap-3">
                {categories.map((cat) => (
                  <li key={cat.id} className="flex items-center gap-2">
                    <cat.Icon className="text-gray-600" />
                    <a
                      href={`#${cat.id}`}
                      className="block py-2 hover:text-black transition-colors"
                    >
                      {cat.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* icons (heart/cart/user) */}
            <div className="p-4">
              <div className="flex gap-4">
                <Link className="p-3 rounded bg-gray-100" to="">
                  <FaRegHeart className="text-[18px]" />
                </Link>

                {/* checkout / CTA link — adjust route as needed */}
                <Link
                  className="py-2 px-4 rounded font-popins text-[16px] font-medium bg-black text-white"
                  to=""
                >
                  Check Out
                </Link>

                <Link className="p-3 rounded bg-gray-100" to="/shopcart">
                  <IoCartOutline className="text-[18px]" />
                </Link>
                <Link className="p-3 rounded bg-gray-100" to="">
                  <FiUser className="text-[18px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
