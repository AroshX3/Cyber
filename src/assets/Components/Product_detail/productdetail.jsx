// src/components/ProductDetail/productdetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router";
import { addToCartLocal } from "../../../utils/cart"; // <<-- NEW tiny helper
// ... keep your other imports (images, icons) as before
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import iphoneGold from "../../images/bal/iphone_gold.png";
import iphoneBlue from "../../images/bal/iphone_blue (1).png";
import headphone from "../../images/bal/menu2airpods.png";
import watch from "../../images/bal/menu2applewatch.png";
import { FaHeart } from "react-icons/fa";

import phone from "../../images/bal/iphone-detail.png";
import bionic from "../../images/bal/bionic-details.png";
import bionic2 from "../../images/bal/bionic-2.png";
import camara from "../../images/bal/camara-details.png";
import camara2 from "../../images/bal/recamara-details.png";
import charger from "../../images/bal/charger-details.png";

import shipping from "../../images/bal/delivary-detail.png";
import InStock from "../../images/bal/instock-details.png";
import garentee from "../../images/bal/garentee-details.png";

import nigIphone from "../../images/bal/IphoneBig.png";
import smallIphone from "../../images/bal/iphone-small.png";
import smallIphone2 from "../../images/bal/iphone-small2.png";
import smallIphone3 from "../../images/bal/iphone-small4.png";
import smallIphone4 from "../../images/bal/iphone-small3.png";

import userPic from "../../images/bal/User-Pic1.png";
import userPic2 from "../../images/bal/User-Pic2.png";
import userPic3 from "../../images/bal/User-Pic-3.png";
import userimage1 from "../../images/bal/user-3-image.png";
import userimage2 from "../../images/bal/user-3-image2.png";

import { FaChevronRight, FaChevronDown } from "react-icons/fa6";
import { GoStarFill } from "react-icons/go";
import { CiStar } from "react-icons/ci";

const fallbackImages = [
  nigIphone,
  smallIphone,
  smallIphone2,
  smallIphone3,
  smallIphone4,
];

const ProductDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [product, setProduct] = useState(location.state?.product || null);
  const [loading, setLoading] = useState(!location.state?.product);
  const [error, setError] = useState(null);
  const [mainImageIndex, setMainImageIndex] = useState(0);

  // popup UI state (for desktop)
  const [showPopup, setShowPopup] = useState(false);
  const [popupProduct, setPopupProduct] = useState(null);

  useEffect(() => {
    if (product) return;
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) throw new Error("Failed to fetch product");
        const data = await res.json();
        if (!mounted) return;
        setProduct(data);
        setError(null);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [id, product]);

  const onAddToCart = () => {
    if (!product) return;
    addToCartLocal(product, 1);

    // small screen -> alert
    const isSmall = window.innerWidth < 640; // sm breakpoint
    if (isSmall) {
      alert(`${product.title} added to cart`);
      return;
    }

    // desktop -> show right-side popup
    setPopupProduct({
      title: product.title,
      price: product.price,
      thumbnail:
        product.thumbnail || (product.images && product.images[0]) || null,
    });
    setShowPopup(true);
    // auto-hide after 3.5s
    setTimeout(() => setShowPopup(false), 3500);
  };

  if (loading)
    return (
      <section>
        <div className="container mx-auto px-4 py-12 text-center">
          Loading product…
        </div>
      </section>
    );
  if (error)
    return (
      <section>
        <div className="container mx-auto px-4 py-12 text-center text-red-500">
          Error: {error}
        </div>
      </section>
    );

  const title = product?.title ?? "Product";
  const price = product?.price ?? "—";
  const description = product?.description ?? "";
  const brand = product?.brand ?? "";
  const rating = product?.rating ?? null;
  const stock = product?.stock ?? null;
  const productImages =
    product?.images && product.images.length ? product.images : fallbackImages;

  return (
    <>
      <section>
        <div className="container mx-auto px-4">
          {/* breadcrumb & main content (keep your existing markup) */}
          <div className="py-6">
            <ul className="hidden sm:flex items-center gap-3 py-2">
              <li>
                <a
                  className="font-popins text-[#A4A4A4] font-medium text-[16px]"
                  href="/"
                >
                  Home
                </a>
              </li>
              <FaChevronRight className="text-[#A4A4A4] text-[12px]" />
              <li>
                <a
                  className="font-popins text-[#A4A4A4] font-medium text-[16px]"
                  href="/catalog"
                >
                  Catalog
                </a>
              </li>
              <FaChevronRight className="text-[#A4A4A4] text-[12px]" />
              <li>
                <a
                  className="font-popins text-[#A4A4A4] font-medium text-[16px]"
                  href="/productpage"
                >
                  Smartphones
                </a>
              </li>
              <FaChevronRight className="text-[#A4A4A4] text-[12px]" />
              <li>
                <span className="font-popins text-black font-medium text-[16px]">
                  {brand}
                </span>
              </li>
              <FaChevronRight className="text-[#A4A4A4] text-[12px]" />
              <li>
                <span className="font-popins text-black font-medium text-[16px]">
                  {title}
                </span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-8">
            <div className="w-full sm:w-1/2 flex flex-col sm:flex-row gap-6">
              <div className="flex-1 flex justify-center items-center">
                <img
                  src={productImages[mainImageIndex]}
                  className="w-full max-w-[320px] object-contain sm:w-full"
                  alt={title}
                />
              </div>

              <div className="flex flex-row justify-around sm:flex-col gap-4 sm:gap-6 items-start">
                {productImages.slice(0, 4).map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setMainImageIndex(idx)}
                    className={`w-[64px] h-[64px] object-contain p-0 border ${idx === mainImageIndex ? "ring-2 ring-black" : ""}`}
                  >
                    <img
                      src={img}
                      className="w-full h-full object-contain"
                      alt={`${title} thumb ${idx}`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full sm:w-1/2">
              <h3 className="font-popins font-bold text-[28px] sm:text-[40px] leading-8 pb-4">
                {title}
              </h3>

              <div className="flex items-center gap-4 pb-4">
                <span className="font-semibold text-[24px] sm:text-[32px] leading-6">
                  ${price}
                </span>
                {product?.discountPercentage ? (
                  <span className="text-[#A0A0A0]">
                    <del className="font-normal leading-6 text-[18px]">
                      $
                      {Math.round(
                        price + price * (product.discountPercentage / 100),
                      )}
                    </del>
                  </span>
                ) : null}
                <div className="ml-auto text-sm text-gray-600">
                  ID: <span className="font-medium">{product?.id}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 pb-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) =>
                    i < Math.round(rating ?? 0) ? (
                      <GoStarFill key={i} className="text-yellow-400 w-4 h-4" />
                    ) : (
                      <CiStar key={i} className="text-yellow-400 w-4 h-4" />
                    ),
                  )}
                </div>
                <div className="text-sm text-gray-600">
                  ({rating ?? "—"} rating)
                </div>
                <div className="ml-4 text-sm text-gray-600">Brand: {brand}</div>
                <div className="ml-4 text-sm text-gray-600">
                  Stock: {stock ?? "—"}
                </div>
              </div>

              {/* action buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pb-4">
                <button
                  onClick={() => alert("Added to wishlist (demo).")}
                  className="w-full sm:w-auto text-center px-6 py-3 rounded-lg border font-popins"
                >
                  Add to Wishlist
                </button>

                <button
                  onClick={onAddToCart}
                  className="w-full sm:w-auto text-center px-6 py-3 rounded-lg bg-black text-white font-popins"
                >
                  Add to Cart
                </button>
              </div>

              {/* rest unchanged (delivery, details, reviews...) */}
              <div className="flex justify-around sm:flex-row gap-4 pb-4">
                <div className="flex items-center gap-3">
                  <img className="w-6 h-6" src={shipping} alt="" />
                  <div>
                    <p className="text-[14px] text-[#717171]">Free Delivery</p>
                    <h4 className="font-medium text-[14px]">1-2 day</h4>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img className="w-6 h-6" src={InStock} alt="" />
                  <div>
                    <p className="text-[14px] text-[#717171]">In Stock</p>
                    <h4 className="font-medium text-[14px]">
                      {stock && stock > 0 ? "Today" : "Out of stock"}
                    </h4>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img className="w-6 h-6" src={garentee} alt="" />
                  <div>
                    <p className="text-[14px] text-[#717171]">Guaranteed</p>
                    <h4 className="font-medium text-[14px]">1 year</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* details & reviews unchanged (omitted here to keep snippet compact) */}
        </div>
      </section>

      {/* POPUP: visible on desktop (sm+). simple absolute fixed card on right */}
      {showPopup && popupProduct && (
        <div
          className="hidden sm:flex fixed right-6 top-20 z-50 w-[320px] bg-white border rounded shadow-lg overflow-hidden"
          role="status"
        >
          <div className="p-3 flex gap-3 items-center">
            <img
              src={popupProduct.thumbnail}
              alt={popupProduct.title}
              className="w-16 h-16 object-contain"
            />
            <div className="flex-1">
              <div className="text-sm font-medium">{popupProduct.title}</div>
              <div className="text-lg font-semibold">${popupProduct.price}</div>
              <div className="mt-2 flex gap-2">
                <button
                  onClick={() => navigate("/shopcart")}
                  className="px-3 py-1 bg-black text-white text-sm rounded"
                >
                  View cart
                </button>
                <button
                  onClick={() => setShowPopup(false)}
                  className="px-3 py-1 border rounded text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
