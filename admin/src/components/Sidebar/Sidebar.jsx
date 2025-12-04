import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import { Link, NavLink, useNavigate } from "react-router";
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
import { FaUserCircle } from "react-icons/fa";
import "./Sidebar.css";
import { MyContext } from "../../App";

const Sidebar = () => {
  const navigate = useNavigate();
  const context = useContext(MyContext);
  const [submenuIndex, setSubmenuIndex] = useState(null);

  const isOpenSubmenu = (index) => {
    if (submenuIndex === index) {
      setSubmenuIndex(null);
    } else {
      setSubmenuIndex(index);
    }
  };

  const logout = () => {
    context.setIsLogin(false);
    navigate("/login");
  };

  return (
    <>
      <div className="sidebar fixed top-5 left-0 bg-white w-[21%] h-full pt-6">
        <div className="navigations mt-4">
          <Link to={"/"}>
            <div className="adminProfile py-7 mb-3 border-b border-gray-300 flex items-center justify-center">
              <div className="profile pr-5 border-r border-[#ff5252]">
                <FaUserCircle className="text-[70px] text-[#ff5252]"></FaUserCircle>
              </div>
              <div className="data pl-5 flex flex-col justify-start">
                <span className="font-bold text-[16px] mb-2">
                  Mohammed Shafeek. A
                </span>
                <h1 className="font-black bg-[#ffdede] flex items-center justify-center py-1 rounded-sm text-[14px] primary">
                  PRIMARY ADMIN
                </h1>
              </div>
            </div>
          </Link>
          <ul className="list-none myAccountTabs">
            <li className="Dashboard w-full py-1">
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
            <li className="HomeSlides w-full py-1">
              <NavLink
                to={"/home-slides"}
                exact={"true"}
                activeclassname="isActive"
              >
                <Button className="w-full !link !py-1 !transition-all !duration-300 !rounded-none gap-2 !items-center !justify-start !px-10 !text-[16px] !font-[600] transition-all duration-300">
                  <FaImages className="text-[20px] mr-2"></FaImages>
                  <span>Home Slides</span>
                </Button>
              </NavLink>
            </li>
            <li className="Users w-full py-1">
              <NavLink to={"/users"} exact={"true"} activeclassname="isActive">
                <Button className="w-full !link !py-1 !transition-all !duration-300 !rounded-none gap-2 !items-center !justify-start !px-10 !text-[16px] !font-[600] transition-all duration-300">
                  <FaUsers className="text-[20px] mr-2"></FaUsers>
                  <span>Users</span>
                </Button>
              </NavLink>
            </li>
            <li className="Products w-full py-1">
              <NavLink
                to={"/products-data"}
                exact={"true"}
                activeclassname="isActive"
              >
                <Button className="w-full !link !py-1 !transition-all !duration-300 !rounded-none gap-2 !items-center !justify-start !px-10 !text-[16px] !font-[600] transition-all duration-300">
                  <FaProductHunt className="text-[20px] mr-2"></FaProductHunt>
                  <span>Products</span>
                </Button>
              </NavLink>
            </li>
            <li className="Category w-full py-1">
              <NavLink
                to={"/categories"}
                exact={"true"}
                activeclassname="isActive"
              >
                <Button className="w-full !link !py-1 !transition-all !duration-300 !rounded-none gap-2 !items-center !justify-start !px-10 !text-[16px] !font-[600] transition-all duration-300">
                  <TbCategoryFilled className="text-[20px] mr-2"></TbCategoryFilled>
                  <span>Categories</span>
                </Button>
              </NavLink>
            </li>
            <li className="Orders w-full py-1">
              <NavLink to={"/orders"} exact={"true"} activeclassname="isActive">
                <Button className="w-full !link !py-1 !transition-all !duration-300 !rounded-none gap-2 !items-center !justify-start !px-10 !text-[16px] !font-[600] transition-all duration-300">
                  <FaBagShopping className="text-[20px] mr-2"></FaBagShopping>
                  <span>Orders</span>
                </Button>
              </NavLink>
            </li>
            <li className="Logout w-full py-1">
              <NavLink to={"/logout"}>
                <Button
                  onClick={logout}
                  className="w-full !link !py-1 !transition-all !duration-300 !rounded-none gap-2 !items-center !justify-start !px-10 !text-[16px] !font-[600] transition-all duration-300"
                >
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
