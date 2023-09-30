import React from "react";
import { BiVideo } from "react-icons/bi";
import { TbHome } from "react-icons/tb";
import { BsChatLeftDots, BsPerson } from "react-icons/bs";
import { IoMdSearch } from "react-icons/io";

const BottomNav = () => {
  return (
    <div className="px-4 fixed bottom-[1rem] mx-auto flex justify-center items-center w-full  z-[2000]">
      <div className="flex flex-row items-center justify-between  shadow-normal bg-white px-4 sm:px-[2rem] py-[1rem] mt-[2rem] w-full max-w-[500px] rounded-[10px]">
        <div className="flex flex-col text-[#989898] gap-[0.3rem] cursor-pointer items-center">
          <TbHome className="w-6 h-9" />
          <p className="text-[10px] sm:text-[13px] font-semibold text-[#989898]">
            HOME
          </p>
        </div>
        <div className="flex flex-col text-[#989898] gap-[0.3rem] cursor-pointer items-center">
          <IoMdSearch className="w-6 h-9" />
          <p className="text-[10px] sm:text-[13px] font-semibold text-[#989898]">
            SEARCH
          </p>
        </div>
        <div className="flex flex-col text-[#989898] gap-[0.3rem] cursor-pointer items-center">
          <BiVideo className="w-6 h-9" />
          <p className="text-[10px] sm:text-[13px] font-semibold text-[#989898]">
            VIDEO
          </p>
        </div>
        <div className="flex flex-col text-[#989898] gap-[0.3rem] cursor-pointer items-center">
          <BsChatLeftDots className="w-6 h-9" />
          <p className="text-[10px] sm:text-[13px] font-semibold text-[#989898]">
            CHAT
          </p>
        </div>
        <div className="flex flex-col text-[#989898] gap-[0.3rem] cursor-pointer items-center">
          <BsPerson className="w-6 h-9" />
          <p className="text-[10px] sm:text-[13px] font-semibold text-[#989898]">
            PROFILE
          </p>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
