import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { GoTriangleDown } from "react-icons/go";
import Rating from "@mui/material/Rating";

const CartItems = (props) => {
  const [sizeAnchorEl, setSizeAnchorEl] = useState(null);
  const [selectedSize, setSelectedSize] = useState(props.size);

  const openSize = Boolean(sizeAnchorEl);
  const handleClickSize = (event) => {
    setSizeAnchorEl(event.currentTarget);
  };
  const handleCloseSize = (value) => {
    setSizeAnchorEl(null);
    if (value !== null) {
      setSelectedSize(value);
    }
  };

  const [qtyAnchorEl, setQtyAnchorEl] = useState(null);
  const [selectedQty, setSelectedQty] = useState(props.qty);

  const openQty = Boolean(qtyAnchorEl);
  const handleClickQty = (event) => {
    setQtyAnchorEl(event.currentTarget);
  };
  const handleCloseQty = (value) => {
    setQtyAnchorEl(null);
    if (value !== null) {
      setSelectedQty(value);
    }
  };

  return (
    <div className="cartItem w-full flex items-center gap-4 pb-4 mb-3 border-b border-gray-300">
      <div className="img w-[12%] rounded-md overflow-hidden">
        <Link to={"/productDetail/1"} className="group">
          <img
            src="../src/assets/Products/p2.jpg"
            alt=""
            className="w-full group-hover:scale-110 transition-all duration-300"
          />
        </Link>
      </div>
      <div className="info w-[88%] relative ml-5">
        <span className="text-[12px] font-[500] px-2 cursor-pointer absolute top-5 right-10 transition-all duration-300 bg-[#ff5252] text-white p-1 rounded-sm hover:bg-black">
          REMOVE
        </span>
        <span className="text-[13px] font-[500]">TAGDO</span>
        <h3 className="text-[18px] font-[500] mb-1">
          TAGDO Gray Shirt | Casual Shirt
        </h3>
        <div className="rating flex pb-1 items-center gap-2">
          <Rating name="size-small" defaultValue={2} size="small" readOnly />
          <h6 className="text-[14px] primary mb-0.5">(3+rating)</h6>
        </div>
        <div className="flex items-center mb-1 gap-3">
          <div className="relative">
            <span
              className="flex items-center justify-center cursor-pointer my-1 text-[13px] font-[500] px-2 rounded-sm bg-gray-100"
              onClick={handleClickSize}
            >
              Size :{" "}
              <p className="text-[#ff5252] font-black pl-2">{selectedSize}</p>
              <GoTriangleDown className="text-[22px] ml-1"></GoTriangleDown>
            </span>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={sizeAnchorEl}
              open={openSize}
              onClose={() => handleCloseSize(null)}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem
                onClick={() => handleCloseSize("S")}
                className="!text-[13px] !font-[600] hover:!bg-[#ff5252] hover:!text-white transition-all duration-75"
              >
                Small
              </MenuItem>
              <MenuItem
                onClick={() => handleCloseSize("M")}
                className="!text-[13px] !font-[600] hover:!bg-[#ff5252] hover:!text-white transition-all duration-75"
              >
                Medium
              </MenuItem>
              <MenuItem
                onClick={() => handleCloseSize("L")}
                className="!text-[13px] !font-[600] hover:!bg-[#ff5252] hover:!text-white transition-all duration-75"
              >
                Large
              </MenuItem>
              <MenuItem
                onClick={() => handleCloseSize("XL")}
                className="!text-[13px] !font-[600] hover:!bg-[#ff5252] hover:!text-white transition-all duration-75"
              >
                X Large
              </MenuItem>
              <MenuItem
                onClick={() => handleCloseSize("XXL")}
                className="!text-[13px] !font-[600] hover:!bg-[#ff5252] hover:!text-white transition-all duration-75"
              >
                XX Large
              </MenuItem>
            </Menu>
          </div>
          <div className="relative">
            <span
              className="flex items-center justify-center cursor-pointer my-1 text-[13px] font-[500] px-3 rounded-sm bg-gray-100"
              onClick={handleClickQty}
            >
              Qty :{" "}
              <p className="text-[#ff5252] font-black pl-2">{selectedQty}</p>
              <GoTriangleDown className="text-[22px] ml-1"></GoTriangleDown>
            </span>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={qtyAnchorEl}
              open={openQty}
              onClose={() => handleCloseQty(null)}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem
                onClick={() => handleCloseQty(1)}
                className="!text-[13px] !font-[600] !min-w-[90px] hover:!bg-[#ff5252] hover:!text-white transition-all duration-75"
              >
                1
              </MenuItem>
              <MenuItem
                onClick={() => handleCloseQty(2)}
                className="!text-[13px] !font-[600] hover:!bg-[#ff5252] hover:!text-white transition-all duration-75"
              >
                2
              </MenuItem>
              <MenuItem
                onClick={() => handleCloseQty(3)}
                className="!text-[13px] !font-[600] hover:!bg-[#ff5252] hover:!text-white transition-all duration-75"
              >
                3
              </MenuItem>
              <MenuItem
                onClick={() => handleCloseQty(4)}
                className="!text-[13px] !font-[600] hover:!bg-[#ff5252] hover:!text-white transition-all duration-75"
              >
                4
              </MenuItem>
              <MenuItem
                onClick={() => handleCloseQty(5)}
                className="!text-[13px] !font-[600] hover:!bg-[#ff5252] hover:!text-white transition-all duration-75"
              >
                5
              </MenuItem>
              <MenuItem
                onClick={() => handleCloseQty(6)}
                className="!text-[13px] !font-[600] hover:!bg-[#ff5252] hover:!text-white transition-all duration-75"
              >
                6
              </MenuItem>
              <MenuItem
                onClick={() => handleCloseQty(7)}
                className="!text-[13px] !font-[600] hover:!bg-[#ff5252] hover:!text-white transition-all duration-75"
              >
                7
              </MenuItem>
              <MenuItem
                onClick={() => handleCloseQty(8)}
                className="!text-[13px] !font-[600] hover:!bg-[#ff5252] hover:!text-white transition-all duration-75"
              >
                8
              </MenuItem>
              <MenuItem
                onClick={() => handleCloseQty(9)}
                className="!text-[13px] !font-[600] hover:!bg-[#ff5252] hover:!text-white transition-all duration-75"
              >
                9
              </MenuItem>
              <MenuItem
                onClick={() => handleCloseQty(10)}
                className="!text-[13px] !font-[600] hover:!bg-[#ff5252] hover:!text-white transition-all duration-75"
              >
                10
              </MenuItem>
            </Menu>
          </div>
        </div>
        <div className="flex gap-2">
          <span className="line-through text-[18px] font-[500] text-gray-500">
            $899
          </span>
          <span className="text-[#ff5252] text-[18px] font-bold">$399</span>
          <span className="text-green-600 bg-green-200 px-2 text-[16px] py-[1px] font-bold rounded-sm">
            55% DISCOUNT
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
