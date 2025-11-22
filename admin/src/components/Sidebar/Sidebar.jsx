import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Link, NavLink } from "react-router";
import { IoIosLogOut } from "react-icons/io";
import { BiSolidDashboard } from "react-icons/bi";
import { FaImages } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa";
import { TbCategoryFilled } from "react-icons/tb";
import { FaBagShopping } from "react-icons/fa6";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { Collapse } from "react-collapse";
import { FaCirclePlus } from "react-icons/fa6";
import { MdViewList } from "react-icons/md";

const Sidebar = () => {
  const [submenuIndex, setSubmenuIndex] = useState(null);

  const isOpenSubmenu = (index) => {
    if (submenuIndex === index) {
      setSubmenuIndex(null);
    } else {
      setSubmenuIndex(index);
    }
  };

  return (
    <>
      <div className="sidebar fixed top-0 left-0 bg-white border-r border-gray-300 w-[20%] h-full">
        <Link to={"/"}>
          <div className="logo py-1 flex items-center justify-center">
            <img src="./public/logo.png" alt="" className="h-11 w-[33%]" />
            <h1 className="headText font-bold text-[22px]">
              - <span className="primary">Admin</span> Panel
            </h1>
          </div>
        </Link>
        <div className="navigations mt-4">
          <ul className="list-none py-5 myAccountTabs">
            <li className="w-full py-1">
              <NavLink
                to={"/dashboard"}
                exact={"true"}
                activeclassname="isActive"
              >
                <Button className="w-full !link !py-1 !transition-all !duration-300 !rounded-none gap-2 !items-center !justify-start !px-10 !text-[16px] !font-[600] transition-all duration-300">
                  <BiSolidDashboard className="text-[20px] mr-2"></BiSolidDashboard>
                  <span>Dashboard</span>
                </Button>
              </NavLink>
            </li>
            <li className="w-full py-1">
              <NavLink to={"/"} exact={"true"} activeclassname="isActive">
                <Button
                  onClick={() => isOpenSubmenu(0)}
                  className="w-full !link !py-1 !transition-all !duration-300 !rounded-none gap-2 !items-center !justify-start !px-10 !text-[16px] !font-[600] transition-all duration-300"
                >
                  <FaImages className="text-[20px] mr-2"></FaImages>
                  <span>Home Slides</span>
                  {submenuIndex === 0 ? (
                    <FaAngleUp className="ml-auto"></FaAngleUp>
                  ) : (
                    <FaAngleDown className="ml-auto"></FaAngleDown>
                  )}
                </Button>
              </NavLink>
              <Collapse isOpened={submenuIndex === 0 ? true : false}>
                <div>
                  <ul className="w-full">
                    <li className="pt-1">
                      <Button className="w-full !link !py-1 !transition-all !duration-300 !rounded-none gap-2 !items-center !justify-start !px-10 !pl-19 !text-[14px] !font-[400] transition-all duration-300">
                        <MdViewList className="text-[20px] mr-0"></MdViewList>
                        <span>Home Sliders List</span>
                      </Button>
                    </li>
                    <li className="pt-1">
                      <Button className="w-full !link !py-1 !transition-all !duration-300 !rounded-none gap-2 !items-center !justify-start !px-10 !pl-19 !text-[14px] !font-[400] transition-all duration-300">
                        <FaCirclePlus className="text-[18px] mr-0.5"></FaCirclePlus>
                        <span>Add Home Banner Slides</span>
                      </Button>
                    </li>
                  </ul>
                </div>
              </Collapse>
            </li>
            <li className="w-full py-1">
              <NavLink to={"/"} exact={"true"} activeclassname="isActive">
                <Button className="w-full !link !py-1 !transition-all !duration-300 !rounded-none gap-2 !items-center !justify-start !px-10 !text-[16px] !font-[600] transition-all duration-300">
                  <FaUsers className="text-[20px] mr-2"></FaUsers>
                  <span>Users</span>
                </Button>
              </NavLink>
            </li>
            <li className="w-full py-1">
              <NavLink to={"/"} exact={"true"} activeclassname="isActive">
                <Button
                  onClick={() => isOpenSubmenu(1)}
                  className="w-full !link !py-1 !transition-all !duration-300 !rounded-none gap-2 !items-center !justify-start !px-10 !text-[16px] !font-[600] transition-all duration-300"
                >
                  <FaProductHunt className="text-[20px] mr-2"></FaProductHunt>
                  <span>Products</span>
                  {submenuIndex === 1 ? (
                    <FaAngleUp className="ml-auto"></FaAngleUp>
                  ) : (
                    <FaAngleDown className="ml-auto"></FaAngleDown>
                  )}
                </Button>
              </NavLink>
              <Collapse isOpened={submenuIndex === 1 ? true : false}>
                <div>
                  <ul className="w-full">
                    <li className="pt-1">
                      <Button className="w-full !link !py-1 !transition-all !duration-300 !rounded-none gap-2 !items-center !justify-start !px-10 !pl-19 !text-[14px] !font-[400] transition-all duration-300">
                        <MdViewList className="text-[20px] mr-0"></MdViewList>
                        <span>Products List</span>
                      </Button>
                    </li>
                    <li className="pt-1">
                      <Button className="w-full !link !py-1 !transition-all !duration-300 !rounded-none gap-2 !items-center !justify-start !px-10 !pl-19 !text-[14px] !font-[400] transition-all duration-300">
                        <FaCirclePlus className="text-[18px] mr-0.5"></FaCirclePlus>
                        <span>Add New Product</span>
                      </Button>
                    </li>
                  </ul>
                </div>
              </Collapse>
            </li>
            <li className="w-full py-1">
              <NavLink to={"/"} exact={"true"} activeclassname="isActive">
                <Button
                  onClick={() => isOpenSubmenu(2)}
                  className="w-full !link !py-1 !transition-all !duration-300 !rounded-none gap-2 !items-center !justify-start !px-10 !text-[16px] !font-[600] transition-all duration-300"
                >
                  <TbCategoryFilled className="text-[22px] mr-1.5"></TbCategoryFilled>
                  <span>Category</span>
                  {submenuIndex === 2 ? (
                    <FaAngleUp className="ml-auto"></FaAngleUp>
                  ) : (
                    <FaAngleDown className="ml-auto"></FaAngleDown>
                  )}
                </Button>
              </NavLink>
              <Collapse isOpened={submenuIndex === 2 ? true : false}>
                <div>
                  <ul className="w-full">
                    <li className="pt-1">
                      <Button className="w-full !link !py-1 !transition-all !duration-300 !rounded-none gap-2 !items-center !justify-start !px-10 !pl-19 !text-[14px] !font-[400] transition-all duration-300">
                        <MdViewList className="text-[20px] mr-0"></MdViewList>
                        <span>Category List</span>
                      </Button>
                    </li>
                    <li className="pt-1">
                      <Button className="w-full !link !py-1 !transition-all !duration-300 !rounded-none gap-2 !items-center !justify-start !px-10 !pl-19 !text-[14px] !font-[400] transition-all duration-300">
                        <FaCirclePlus className="text-[18px] mr-0.5"></FaCirclePlus>
                        <span>Add New Category</span>
                      </Button>
                    </li>
                  </ul>
                </div>
              </Collapse>
            </li>
            <li className="w-full py-1">
              <NavLink to={"/"} exact={"true"} activeclassname="isActive">
                <Button className="w-full !link !py-1 !transition-all !duration-300 !rounded-none gap-2 !items-center !justify-start !px-10 !text-[16px] !font-[600] transition-all duration-300">
                  <FaBagShopping className="text-[20px] mr-2"></FaBagShopping>
                  <span>Orders</span>
                </Button>
              </NavLink>
            </li>
            <li className="w-full py-1">
              <NavLink to={"/"} exact={"true"} activeclassname="isActive">
                <Button className="w-full !link !py-1 !transition-all !duration-300 !rounded-none gap-2 !items-center !justify-start !px-10 !text-[16px] !font-[600] transition-all duration-300">
                  <IoIosLogOut className="text-[22px] mr-2"></IoIosLogOut>
                  <span>Logout</span>
                </Button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
