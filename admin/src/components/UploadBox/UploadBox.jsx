import React from "react";
import { BiSolidImageAdd } from "react-icons/bi";
import { FaImages } from "react-icons/fa6";

const UploadBox = (props) => {
  return (
    <div
      className="relative group cursor-pointer p-3 mb-5 bg-[#fff8f8] transition-all duration-300 flex flex-col items-center hover:bg-[#fcc9c9] justify-center rounded-md overflow-hidden border border-dashed border-[#ff5252]
      w-[150px] h-[150px]"
    >
      <div className="flex flex-col items-center justify-center transition-all duration-300 group-hover:scale-105">
        {props.multiple === false ? (
          <BiSolidImageAdd className="text-[50px] text-[#ff5252]"></BiSolidImageAdd>
        ) : (
          <FaImages className="text-[50px] text-[#ff5252]"></FaImages>
        )}
        <h1 className="text-[14px] font-bold primary">{props.image}</h1>
      </div>
      <input
        type="file"
        multiple={props.multiple}
        className="absolute cursor-pointer w-full h-full opacity-0"
      />
    </div>
  );
};

export default UploadBox;
