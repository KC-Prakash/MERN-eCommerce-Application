import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import DashboardBox from "../../components/DashboardBox/DashboardBox";

const Dashboard = () => {
  const [openProduct, setOpenProduct] = useState(null);
  const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };
  return (
    <section>
      <div className="container flex pt-10">
        <div className="sidebarWrapper h-full w-[20%] bg-white">
          <Sidebar></Sidebar>
        </div>
        <div className="sidebarWrapper w-[80%] my-7 h-full">
          <div className="bg-white flex items-center gap-7 mb-3 py-3 px-4">
            <div className="w-[20%]">
              <img
                src="./src/assets/svg/dashSVG.png"
                alt=""
                className="w-[200px] pl-8"
              />
            </div>
            <div className="info leading-none w-[80%] px-18 border-l border-gray-300">
              <h1 className="text-[18px] font-bold">Good Morning,</h1>
              <h1 className="text-[24px] primary font-bold mb-3 my-1.5 border-b pb-4 border-gray-300">
                Mohammed Shafeek. A
              </h1>
              <p className="text-[14px] text-gray-500 py-0.5 font-[500]">
                Here's What Happening on your Store today. See the Statistics at
                Once.
              </p>
            </div>
          </div>
          <DashboardBox></DashboardBox>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
