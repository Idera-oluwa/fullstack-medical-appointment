import Header from "@/src/components/search/header";
import React from "react";
import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <div className="bg-light min-h-screen">
      <Header />
      <div className="px-4 w-full pt-4 pb-4 bg-white shadow-normal">
        <div className="w-full bg-light h-[1.2cm] mt-[1rem]  rounded-[10px] flex flex-row px-4 py-1 items-center shadow-normal">
          <BsSearch className="text-primary font-bold w-6 h-6 " />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent px-4   w-full text-[0.4cm] text-dark outline-0  focus:ring-0 focus:outline-0 border-0 focus:border-gray-300 border-gray-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
