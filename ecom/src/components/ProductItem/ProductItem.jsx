import React from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";

const ProductItem = () => {
  return (
    <div className="productItem pt-3 group overflow-hidden rounded-lg border-1 border-[rgba(0,0,0,0.3)] transition-all">
      <div className="imgWraapper w-[100%] h-[200px] overflow-hidden relative">
        <img
          src="../src/assets/Products/p1.jpg"
          alt=""
          className="w-full h-full object-contain group-hover:scale-110 transition-all"
        />
        <span className="discount flex items-center absolute top-[0px] left-[10px] z-50 bg-primary text-white rounded-md p-2 text-[12px] font-[500]">
          10%
        </span>
      </div>
      <Link>
        <div className="info p-3">
          <h6 className="transition-all text-[14px] text-[#5e5e5e] pl-1.5">
            Men's Regular Fit Casual
          </h6>
          <h3 className="transition-all text-[16px] mt-2 my-2 pl-1.5 font-medium group-hover:text-[#ff5252]">
            TAGDO Gray Shirt | Casual Shirt
          </h3>
          <div className="rating flex pb-3 justify-between">
            <Rating name="size-small" defaultValue={2} size="medium" readOnly />
            <h6 className="text-[14px] primary pr-1.5">(3+rating)</h6>
          </div>
          <div className="flex items-center gap-3 pl-1.5 p-1 bg-primary rounded-md justify-center">
            <span className="oldPrice text-white font-[500] line-through pt-1.5">
              $899
            </span>
            <span className="oldPrice text-[25px] font-medium text-white">
              $399
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
