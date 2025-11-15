import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import CartItems from "../../components/CartItems/CartItems";

const Cart = () => {

  return (
    <div className="cart py-5">
      <div className="container w-[80%] max-w-[80%] flex gap-5">
        <div className="leftPart w-[70%]">
          <div className="shadow-md rounded-md p-3 bg-white mt-5">
            <div className="cartHead p-2 pb-5 mb-3 border-b border-[#ff5252]">
              <h2 className="font-bold text-[18px]">YOUR CART</h2>
              <p className="mt-0 text-[16px] text-gray-600">
                There are{" "}
                <span className="font-bold text-[#ff5252] text-[16px]">2</span>{" "}
                Products in your Cart.
              </p>
            </div>
            <CartItems size={"S"} qty={1}></CartItems>
            <CartItems size={"S"} qty={1}></CartItems>
            <CartItems size={"S"} qty={1}></CartItems>
            <CartItems size={"S"} qty={1}></CartItems>
            <CartItems size={"S"} qty={1}></CartItems>
            <CartItems size={"S"} qty={1}></CartItems>
          </div>
        </div>
        <div className="rightPart w-[30%]">
          <div className="shadow-md rounded-md p-3 bg-white mt-5">
            <div className="cartHead p-2 pb-5 mb-3 border-b border-[#ff5252]">
              <h2 className="font-bold text-[18px]">CART TOTAL</h2>
              <p className="mt-0 text-[16px] text-gray-600">
                All{" "}
                <span className="font-bold text-[#ff5252] text-[16px]">
                  Tax
                </span>{" "}
                Applied.
              </p>
            </div>
            <div className="charges">
              <div className="flex items-center justify-between mx-2 my-1">
                <span className="text-[14px] font-[500]">Total</span>
                <span className="text-[14px] font-[500] text-[#ff5252]">
                  ₹2376
                </span>
              </div>
              <div className="flex items-center justify-between mx-2 my-1">
                <span className="text-[14px] font-[500]">CGST</span>
                <span className="text-[14px] font-[500] text-[#ff5252]">
                  2.5%
                </span>
              </div>
              <div className="flex items-center justify-between mx-2 my-1">
                <span className="text-[14px] font-[500]">SGST</span>
                <span className="text-[14px] font-[500] text-[#ff5252]">
                  2.5%
                </span>
              </div>
              <div className="flex items-center justify-between mx-2 my-1">
                <span className="text-[14px] font-[500]">Delivery Charge</span>
                <span className="text-[14px] font-[500] text-[#ff5252]">
                  Free
                </span>
              </div>
              <div className="flex items-center justify-between mx-2 my-1">
                <span className="text-[14px] font-[500]">Handling Fee</span>
                <span className="text-[14px] font-[500] text-[#ff5252]">
                  Free
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between mx-2 my-3 py-5 border-y border-[#ff5252]">
              <span className="text-[18px] font-bold">Subtotal</span>
              <span className="text-[18px] font-bold text-[#ff5252]">
                ₹2496
              </span>
            </div>
            <Button className="btn-org !py-2 !font-bold hover:!bg-black hover:!text-white transition-all duration-300 !w-full !my-1">
              <Link to={"/checkout"}>Checkout</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
