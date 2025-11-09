import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "../Sidebar/Sidebar.css";
import { Collapse } from "react-collapse";
import Button from "@mui/material/Button";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const Sidebar = () => {
  const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(false);
  const [isOpenAvailabilityFilter, setIsOpenAvailabilityFilter] =
    useState(false);
  const [isOpenSizeFilter, setIsOpenSizeFilter] = useState(false);
  const [isOpenPriceFilter, setIsOpenPriceFilter] = useState(false);

  function valuetext(value) {
    return `${value}°C`;
  }

  const minDistance = 50;

  const [value1, setValue1] = useState([20, 37]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  const [value2, setValue2] = useState([20, 37]);

  const handleChange2 = (event, newValue, activeThumb) => {
    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue);
    }
  };

  return (
    <aside className="sidebar py-3">
      <div className="box">
        <div className="SidebarFlex flex justify-between mr-5">
          <h3 className="w-full pb-3 text-[16px] font-[600]">
            Shop by categories
          </h3>
          <Button
            className="!ml-4 !w-[30px] !h-[30px] !min-w-[30px] !rounded-full transition-all duration-300"
            onClick={() => setIsOpenCategoryFilter(!isOpenCategoryFilter)}
          >
            {isOpenCategoryFilter === true ? (
              <FaAngleUp></FaAngleUp>
            ) : (
              <FaAngleDown></FaAngleDown>
            )}
          </Button>
        </div>
        <Collapse isOpened={isOpenCategoryFilter}>
          <div className="scroll px-4">
            <FormControlLabel
              control={<Checkbox />}
              label="Fashion"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Electronics"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Accessories"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Bags"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Footwear"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Beauty"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Jewellery"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Wellness"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>
      <div className="box">
        <div className="SidebarFlex flex justify-between mr-5">
          <h3 className="w-full pb-3 text-[16px] font-[600]">Availability</h3>
          <Button
            className="!ml-4 !w-[30px] !h-[30px] !min-w-[30px] !rounded-full transition-all duration-300"
            onClick={() =>
              setIsOpenAvailabilityFilter(!isOpenAvailabilityFilter)
            }
          >
            {isOpenAvailabilityFilter === true ? (
              <FaAngleUp></FaAngleUp>
            ) : (
              <FaAngleDown></FaAngleDown>
            )}
          </Button>
        </div>

        <Collapse isOpened={isOpenAvailabilityFilter}>
          <div className="scroll px-4">
            <FormControlLabel
              control={<Checkbox />}
              label="Available (17)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="In Stock (10)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Out of Stock (90)"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>
      <div className="box">
        <div className="SidebarFlex flex justify-between mr-5">
          <h3 className="w-full pb-3 text-[16px] font-[600]">Size</h3>
          <Button
            className="!ml-4 !w-[30px] !h-[30px] !min-w-[30px] !rounded-full transition-all duration-300"
            onClick={() => setIsOpenSizeFilter(!isOpenSizeFilter)}
          >
            {isOpenSizeFilter === true ? (
              <FaAngleUp></FaAngleUp>
            ) : (
              <FaAngleDown></FaAngleDown>
            )}
          </Button>
        </div>
        <Collapse isOpened={isOpenSizeFilter}>
          <div className="scroll px-4">
            <FormControlLabel
              control={<Checkbox />}
              label="Small (12)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Medium (12)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Large (12)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="XL (12)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="XXL (12)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="XXXL (12)"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>
    </aside>
  );
};

export default Sidebar;
