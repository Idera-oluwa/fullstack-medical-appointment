"use client";
import { Tab } from "@headlessui/react";
import React, { useState } from "react";
import DepartmentTab from "./DepartmentTab";
import SymptomTab from "./SymptomTab";

const ChooseDepartment = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <section className="my-7 w-full sm:my-10 ">
      <h2 className="px-4 font-semibold  sm:text-lg lg:text-2xl">
        Choose a department or symptom
      </h2>
      <p className="text-small sm:text-[13px] lg:text-base text-secondary mt-1 mb-4 px-4">
        Find your doctor from 90+ clinical areas
      </p>
      <div className="mt-[1rem] w-full bg-gray-100">
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tab.List className="flex w-full  sm:rounded-[30px] sm:border-0 justify-between items-center h-[53px] gap-1  bg-white shadow-small text-base border-t border-t-bs transition-all">
            <Tab
              className={`basis-[50%] h-full sm:border-0 sm:rounded-l-[30px] border-b-[3px] border-transparent text-[14px] ${
                selectedIndex === 0 &&
                "text-[#14bef0] border-b-[#14bef0] bg-[#eefbff] font-medium"
              }`}
            >
              Departments
            </Tab>
            <Tab
              className={`basis-[50%] h-full sm:border-0 sm:rounded-r-[30px] border-b-[3px] border-transparent text-[14px] ${
                selectedIndex === 1 &&
                "text-[#14bef0] border-b-[#14bef0] bg-[#eefbff] font-medium"
              }`}
            >
              Symptoms
            </Tab>
          </Tab.List>

          <Tab.Panels className="w-full pt-4 transition-all">
            <Tab.Panel>
              <DepartmentTab />
            </Tab.Panel>
            <Tab.Panel>
              <SymptomTab />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
};

export default ChooseDepartment;
