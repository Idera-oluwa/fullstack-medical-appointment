"use client"
import React from 'react'
import Header from "../../../../components/profilePage/Header";
import BottomNav from "../../../../components/BottomNav";
import Tabs from "../../../../components/history/Tabs"
import {BsSearch } from "react-icons/bs";
import { PiFunnel } from "react-icons/pi";

const page = () => {
  return (
    <div>
      <Header text='History'/>
      <div className='bg-white mt-[5rem]'>
      <div className="w-full bg-light h-[1.2cm] mt-[1rem]  rounded-[10px] flex flex-row px-4 py-1 items-center shadow-normal">
        <BsSearch className="text-primary font-bold w-6 h-6 " />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent px-4   w-full text-[0.4cm] text-dark outline-0 border-r focus:ring-0 focus:outline-0 border-0 focus:border-gray-300 border-gray-300"
        />
        <div className=" min-h-[18px] min-w-[18px] pl-3 flex items-center justify-center  ">
          <PiFunnel className="min-w-[18px] min-h-[18px]" />
        </div>
      </div>
      <Tabs/>
      </div>
      <BottomNav/>
    </div>
  )
}

export default page
