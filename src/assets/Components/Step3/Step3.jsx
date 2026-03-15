// src/assets/Components/Step3/Step3.jsx
import React, { useEffect, useState } from "react";
import location from "../../images/bal/location.png";
import shippingIcon from "../../images/bal/Shipping.png";
import paymentIcon from "../../images/bal/Payment.png";
import line from "../../images/bal/l1.png";
import credit from "../../images/bal/Credit Card.png";

import { Link, useNavigate } from "react-router";
import { getCartLocal, clearCartLocal } from "../../../utils/cart";

const Step3 = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [showComplete, setShowComplete] = useState(false);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    setItems(getCartLocal());
  }, []);

  const subtotal = items.reduce(
    (s, it) => s + Number(it.price || 0) * (it.qty || 1),
    0,
  );
  const estimatedTax = Math.round(subtotal * 0.02 * 100) / 100; // 2% tax example
  const shipping = subtotal > 0 ? 29 : 0;
  const total = Math.round((subtotal + estimatedTax + shipping) * 100) / 100;

  const handlePay = () => {
    if (subtotal <= 0) {
      // small guard
      alert("Your cart is empty. Add something before paying.");
      return;
    }

    const isSmall = window.innerWidth < 640; // tailwind 'sm' breakpoint
    // simulate payment success
    const newOrderId = `ORD-${Math.random().toString(36).slice(2, 9).toUpperCase()}`;
    setOrderId(newOrderId);

    // clear cart (for demo)
    clearCartLocal();
    setItems([]);

    if (isSmall) {
      // mobile: simple alert (as you requested for mobile behaviours)
      alert(`Payment complete — ${newOrderId}\nTotal: $${total.toFixed(2)}`);
      // navigate to home or orders page if desired
      navigate("/");
      return;
    }

    // desktop: show popup
    setShowComplete(true);
  };

  const closePopup = () => {
    setShowComplete(false);
    navigate("/"); // after closing, go home
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="">
            <div className="py-18 sm:flex items-center">
              <div className="w-56 opacity-25 flex justify-center items-center gap-2 hidden sm:block ">
                <img className="w-6 h-6" src={location} alt="" />
                <div className="">
                  <h4 className="font-popins font-medium text-[16px] leading-4">
                    step 1
                  </h4>
                  <p className="font-popins font-medium text-[19px] leading-6">
                    Address
                  </p>
                </div>
              </div>

              <img className="hidden sm:block" src={line} alt="" />

              <div className="flex items-center justify-between pl-4 sm:p-0">
                <div className="w-56 opacity-25 flex justify-center items-center gap-2">
                  <img className="w-6 h-6 " src={shippingIcon} alt="" />
                  <div className="">
                    <h4 className="font-popins font-medium text-[16px] leading-4">
                      step 2
                    </h4>
                    <p className="font-popins font-medium text-[19px] leading-6">
                      Shipping
                    </p>
                  </div>
                </div>

                <img className="block sm:block" src={line} alt="" />

                <div className="w-56 flex justify-center items-center gap-2">
                  <img className="w-6 h-6 " src={paymentIcon} alt="" />
                  <div className="">
                    <h4 className="font-popins font-medium text-[16px] leading-4">
                      step 3
                    </h4>
                    <p className="font-popins font-medium text-[19px] leading-6">
                      Payment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:grid grid-cols-2 gap-24">
              {/* SUMMARY (hidden on mobile due to your styles) */}
              <div className="summary p-6 border border-white hidden sm:block">
                <div className="pb-6">
                  <h3 className="font-popins font-medium text-[20px] leading-4">
                    Summary
                  </h3>
                </div>

                {items.length === 0 ? (
                  <div className="text-sm text-gray-500">
                    Your cart is empty.
                  </div>
                ) : (
                  <div className="pb-6">
                    {items.map((it) => (
                      <div
                        key={it.id}
                        className="flex items-center justify-between gap-4 bg-[#F6F6F6] p-4 mb-4"
                      >
                        <img
                          className="w-10 h-10 object-contain"
                          src={it.thumbnail}
                          alt={it.title}
                        />
                        <h4 className="font-popins font-medium text-[16px] leading-6 truncate">
                          {it.title}
                        </h4>
                        <p className="font-popins font-bold text-[16px] leading-6">
                          ${(Number(it.price) * (it.qty || 1)).toFixed(2)}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                <div>
                  <div className="pb-4">
                    <h4 className="font-popins font-medium text-[14px] leading-4 text-[#545454] pb-6">
                      Address
                    </h4>
                    <p className="font-popins font-normal text-[16px] leading-4 ">
                      1131 Dusty Townline, Jacksonville, TX 40322
                    </p>
                  </div>

                  <div className="pb-6">
                    <h4 className="font-popins font-medium text-[14px] leading-4 text-[#545454] pb-4">
                      Shipment method
                    </h4>
                    <p className="font-popins font-normal text-[16px] leading-4 ">
                      Free
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between">
                      <h4 className="font-popins font-medium text-[16px] leading-6">
                        Subtotal
                      </h4>
                      <h5 className="font-popins font-medium text-[16px] leading-8">
                        ${subtotal.toFixed(2)}
                      </h5>
                    </div>
                    <div className="flex justify-between">
                      <h4 className="font-popins font-normal text-[16px] leading-8 text-[#545454]">
                        Estimated Tax
                      </h4>
                      <h5 className="font-popins font-medium text-[16px] leading-8">
                        ${estimatedTax.toFixed(2)}
                      </h5>
                    </div>
                    <div className="flex justify-between">
                      <h4 className="font-popins font-normal text-[16px] leading-8 text-[#545454]">
                        Estimated shipping & Handling
                      </h4>
                      <h5 className="font-popins font-medium text-[16px] leading-8">
                        ${shipping.toFixed(2)}
                      </h5>
                    </div>
                    <div className="flex justify-between">
                      <h4 className="font-popins font-medium text-[16px] leading-6">
                        Total
                      </h4>
                      <h5 className="font-popins font-bold text-[16px] leading-8">
                        ${total.toFixed(2)}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              {/* PAYMENT FORM / RIGHT SIDE */}
              <div className="payment">
                <div className="p-4 sm:p-0">
                  <div className="pb-6">
                    <h3 className="font-popins font-bold leading-4 pb-6 sm:pb-0 text-[20px]">
                      Payment
                    </h3>
                  </div>

                  <ul className="flex justify-around underline sm:gap-14 pb-10">
                    <li>
                      <Link
                        className="font-popins font-medium text-[14px] leading-4"
                        to=""
                      >
                        Credit Card
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-popins font-medium text-[14px] leading-4"
                        to=""
                      >
                        PayPal
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-popins font-medium text-[14px] leading-4"
                        to=""
                      >
                        PayPal Credit
                      </Link>
                    </li>
                  </ul>

                  <div className="pb-10 flex justify-center item-center sm:flex-none">
                    <img className="w-[80%] sm:w-full" src={credit} alt="" />
                  </div>

                  <div className="">
                    <input
                      className="font-popins font-normal text-[14px] leading-4 text-[#979797] p-4 w-full mb-4"
                      placeholder="Cardholder Name"
                      type="text"
                    />
                    <input
                      className="font-popins font-normal text-[14px] leading-4 text-[#979797] p-4 w-full mb-4"
                      placeholder="Card Number"
                      type="text"
                    />
                    <div className="grid grid-cols-2 gap-4 pb-16">
                      <input
                        placeholder="Exp.Date"
                        className="font-popins font-normal text-[14px] leading-4 text-[#979797] p-4 w-full"
                        type="text"
                      />
                      <input
                        placeholder="CVV"
                        className="font-popins font-normal text-[14px] leading-4 text-[#979797] p-4 w-full"
                        type="text"
                      />
                    </div>

                    <div className="flex gap-2 pb-14">
                      <input
                        className="bg-black text-white rounded-md"
                        type="checkbox"
                      />
                      <p className="font-popins font-medium text-[15px] leading-6 ">
                        Same as billing address
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pb-18">
                  <div className="flex pb-12 justify-center items-center sm:justify-end gap-6">
                    <div>
                      <Link
                        className="px-21.5 py-6 rounded-lg border font-popins font-medium text-[16px] leading-4 text-black"
                        to="/step2"
                      >
                        Back
                      </Link>
                    </div>
                    <div>
                      {/* Pay is a button now so we can run logic */}
                      <button
                        onClick={handlePay}
                        className="px-21.5 py-6 rounded-lg font-popins font-medium text-[16px] leading-4 bg-black text-white"
                      >
                        Pay
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAYMENT COMPLETE POPUP (desktop only) */}
      {showComplete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-lg">
            <h3 className="font-popins font-bold text-[20px] mb-4">
              Payment Complete
            </h3>
            <p className="mb-4 text-sm text-gray-600">
              Thank you — your order{" "}
              <span className="font-medium">{orderId}</span> is confirmed.
            </p>

            <div className="mb-4">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Tax</span>
                <span className="font-medium">${estimatedTax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Shipping</span>
                <span className="font-medium">${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mt-3 border-t pt-3">
                <span className="font-medium">Total</span>
                <span className="font-bold">${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <button onClick={closePopup} className="px-4 py-2 border rounded">
                Close
              </button>
              <button
                onClick={() => navigate("/")}
                className="px-4 py-2 bg-black text-white rounded"
              >
                Go to Home
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Step3;
