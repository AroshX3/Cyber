// src/assets/Components/Shopping Cart/Shoppingcart.jsx
import React, { useEffect, useState } from "react";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router";
import {
  getCartLocal,
  updateQtyLocal,
  removeFromCartLocal,
  clearCartLocal,
} from "../../../utils/cart";

const Shoppingcart = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getCartLocal());
  }, []);

  const inc = (id) => {
    const current = getCartLocal();
    const found = current.find((i) => String(i.id) === String(id));
    if (found) {
      updateQtyLocal(id, found.qty + 1);
      setItems(getCartLocal());
    }
  };

  const dec = (id) => {
    const current = getCartLocal();
    const found = current.find((i) => String(i.id) === String(id));
    if (found) {
      const newQty = found.qty - 1;
      if (newQty <= 0) {
        removeFromCartLocal(id);
      } else {
        updateQtyLocal(id, newQty);
      }
      setItems(getCartLocal());
    }
  };

  const removeItem = (id) => {
    removeFromCartLocal(id);
    setItems(getCartLocal());
  };

  const subtotal = items.reduce((s, it) => s + it.price * (it.qty || 1), 0);
  const estimatedTax = Math.round(subtotal * 0.02);
  const shipping = items.length ? 29 : 0;
  const total = subtotal + estimatedTax + shipping;

  return (
    <>
      <section>
        <div className="container">
          <div className="sm:grid grid-cols-2 items-center gap-12">
            <div className="p-4 sm:p-0">
              <div className="pt-18 pb-10">
                <h3 className="font-popins font-semibold text-[24px] leading-6">
                  Shopping Cart
                </h3>
              </div>

              <div>
                {items.length === 0 ? (
                  <div className="py-12 text-center">Your cart is empty.</div>
                ) : (
                  items.map((it) => (
                    <div key={it.id} className="pb-10">
                      <div className="flex items-center gap-3.75 pb-10 border-[#A3A3A3] border-b">
                        <img
                          className="w-22.5 h-22.5 object-contain"
                          src={it.thumbnail}
                          alt={it.title}
                        />
                        <div className="flex items-center justify-between gap-6 py-5.25 w-full">
                          <div className="max-w-49">
                            <h3 className="font-popins font-medium text-[16px] pb-2 leading-6">
                              {it.title}
                            </h3>
                            <p className="font-popins font-normal">#{it.sku}</p>
                          </div>

                          <div className="flex items-center gap-4">
                            <button
                              onClick={() => dec(it.id)}
                              aria-label="decrement"
                            >
                              <FaMinus />
                            </button>
                            <h4 className="font-popins font-medium text-[16px] leading-4">
                              {it.qty}
                            </h4>
                            <button
                              onClick={() => inc(it.id)}
                              aria-label="increment"
                            >
                              <FaPlus />
                            </button>
                          </div>

                          <div>
                            <span className="font-popins font-medium text-[20px] leading-8">
                              ${Number(it.price * it.qty).toFixed(2)}
                            </span>
                          </div>

                          <div>
                            <button
                              onClick={() => removeItem(it.id)}
                              aria-label="remove"
                            >
                              <AiOutlineClose />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="border border-[#EBEBEB] p-12">
              <div>
                <h4 className="font-popins font-bold text-[20px] pb-10 leading-4">
                  Order Summary
                </h4>

                <div className="pb-6">
                  <h5 className="font-popins font-medium text-[14px] leading-4 pb-2 text-[#545454]">
                    Discount code / Promo code
                  </h5>
                  <input
                    type="text"
                    placeholder="Code"
                    className="py-4 w-full font-popins font-normal pl-4 text-[14px] leading-6"
                  />
                </div>

                <div className="pb-4">
                  <h5 className="font-popins font-medium text-[14px] leading-4 pb-2 text-[#545454]">
                    Your bonus card number
                  </h5>
                  <input
                    type="text"
                    placeholder="Enter Card Number"
                    className="py-4 w-full font-popins font-normal pl-4 text-[14px] leading-6"
                  />
                </div>

                <div className="pb-12">
                  <div className="flex items justify-between pb-4">
                    <h4 className="font-popins font-medium text-[16px] leading-4">
                      Subtotal
                    </h4>
                    <p className="font-popins font-medium text-[16px] leading-8">
                      ${subtotal.toFixed(2)}
                    </p>
                  </div>

                  <div className="flex items justify-between pb-4">
                    <h4 className="font-popins font-normal text-[16px] text-[#545454] leading-8">
                      Estimated Tax
                    </h4>
                    <p className="font-popins font-medium text-[16px] leading-8">
                      ${estimatedTax.toFixed(2)}
                    </p>
                  </div>

                  <div className="flex items justify-between pb-4">
                    <h4 className="font-popins font-normal text-[16px] text-[#545454] leading-8">
                      Estimated shipping & Handling
                    </h4>
                    <p className="font-popins font-medium text-[16px] leading-8">
                      ${shipping.toFixed(2)}
                    </p>
                  </div>

                  <div className="flex items justify-between pb-4">
                    <h4 className="font-popins font-normal text-[16px] text-[#545454] leading-8">
                      Total
                    </h4>
                    <p className="font-popins font-medium text-[16px] leading-8">
                      ${total.toFixed(2)}
                    </p>
                  </div>

                  <div className="flex items-center text-center justify-center">
                    <Link
                      className="font-popins text-[16px] font-medium leading-6 px-41.25 py-4 rounded-md bg-black text-white"
                      to="/step1"
                    >
                      Check Out
                    </Link>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    onClick={() => {
                      clearCartLocal();
                      setItems([]);
                    }}
                    className="mt-2 text-sm text-red-600"
                  >
                    Clear cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shoppingcart;
