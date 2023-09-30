"use client";
import React from "react";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import { Tab } from "@headlessui/react";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { useState } from "react";

const ProfileTabs = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="mt-[1cm] w-full ">
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.List className="flex w-full justify-between items-center h-[53px] gap-1  bg-white shadow-sm text-base border-t border-t-bs transition-all">
          <Tab
            className={`w-[33%] h-full border-b-[3px] border-transparent ${
              selectedIndex === 0 &&
              "text-[#14bef0] border-b-[#14bef0] bg-[#eefbff] font-medium"
            }`}
          >
            Info
          </Tab>
          <Tab
            className={`w-[33%] h-full border-b-[3px] border-transparent ${
              selectedIndex === 1 &&
              "text-[#14bef0] border-b-[#14bef0] bg-[#eefbff] font-medium"
            }`}
          >
            Experience
          </Tab>
          <Tab
            className={`w-[33%] h-full border-b-[3px] border-transparent ${
              selectedIndex === 2 &&
              "text-[#14bef0] border-b-[#14bef0] bg-[#eefbff] font-medium"
            }`}
          >
            Review
          </Tab>
        </Tab.List>

        <Tab.Panels className="w-full pt-4 transition-all">
          <Tab.Panel>
            <Tab1 />
          </Tab.Panel>
          <Tab.Panel>
            <Tab2 />
          </Tab.Panel>
          <Tab.Panel>
            <Tab3 />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      <div className="flex flex-row  gap-[3%] px-4 justify-between fixed bottom-0 mb-0 w-full  py-[1rem] bg-gray-100 ">
        <div className="flex flex-row items-center justify-center gap-[0.3cm] w-[48.5%] h-[1.5cm] bg-white hover:bg-light-primary rounded-[10px] outline outline-1 outline-light-primary cursor-pointer hover:text-white text-light-primary">
          <BsFillCameraVideoFill className="" />
          <p className="font-semibold">Call</p>
        </div>
        <div className="flex flex-row items-center justify-center gap-[0.3cm] w-[48.5%] h-[1.5cm] bg-light-primary rounded-[10px] cursor-pointer">
          <p className="text-white font-semibold">Book</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileTabs;
