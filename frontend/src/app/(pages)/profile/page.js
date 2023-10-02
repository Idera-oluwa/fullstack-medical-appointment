"use client";
import React from "react";
import { LiaBarsSolid } from "react-icons/lia";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";
import { PiCaretRightBold } from "react-icons/pi";
import Link from "next/link";
import Footer from "@components/BottomNav";

const page = () => {
  return (
    <div className="bg-gray-100 h-[100vh]">
      <div className="flex flex-row h-[4.5rem] px-[0.5cm] items-center shadow-md bg-white">
        <div className="flex flex-row items-center gap-[1rem]">
          <Link href="/">
            {" "}
            <div className="outline outline-1 outline-gray-200 w-[2rem] h-[2rem] rounded-full flex items-center justify-center">
              <AiOutlineArrowLeft className="text-dark cursor-pointer" />
            </div>
          </Link>
          <div className="flex flex-row gap-[0.5rem]">
            <Link href="/Pages/Profile">
              <img
                src="/Images/profilepic1.jpg"
                className="w-[1cm] h-[1cm] rounded-full cursor-pointer"
              />
            </Link>
            <div className="flex flex-col w-[5cm]">
              <p className="text-[0.75rem] font-semibold text-dark">
                Ms Samantha
              </p>
              <p className="text-orange cursor-pointer text-[0.67rem]">
                @mssamantha
              </p>
            </div>
          </div>
        </div>
        <div className="ml-auto">
          <div className="outline outline-1 outline-gray-200 w-[2rem] h-[2rem] rounded-full flex items-center justify-center">
            <LiaBarsSolid className="text-dark cursor-pointer" />
          </div>
        </div>
      </div>
      <div className=" mt-[0.5rem] p-[1rem]  relative">
        <div className="bg-white p-[1rem] relative overflow-hidden rounded-[10px] outline outline-1 outline-gray-200">
          <BiSolidEdit className="absolute text-white text-[1.7rem] right-[0.5cm] top-[0.5cm] z-20 cursor-pointer" />
          <div className="w-[4cm] h-[4cm] rounded-full bg-primary absolute right-[-2cm] top-[-2cm] cursor-pointer"></div>
          <p className="text-[0.93rem]">Personal Info</p>
          <div className="flex flex-row mt-[1rem]">
            <div className=" flex flex-col gap-[1rem] w-[50%]">
              <div className="flex flex-col gap-[0.1rem]">
                <p className="text-[0.65rem] text-secondary">Name</p>
                <p className="text-[0.75rem] text-dark">Ms Samantha</p>
              </div>
              <div className="flex flex-col gap-[0.1rem]">
                <p className="text-[0.65rem] text-secondary">Gender</p>
                <p className="text-[0.75rem] text-dark">Female</p>
              </div>
              <div className="flex flex-col gap-[0.1rem]">
                <p className="text-[0.65rem] text-secondary">Email</p>
                <p className="text-[0.75rem] text-dark">samantha@gmail.com</p>
              </div>
            </div>
            <div className=" flex flex-col gap-[1rem]">
              <div className="flex flex-col gap-[0.1rem]">
                <p className="text-[0.65rem] text-secondary">Date of Birth</p>
                <p className="text-[0.75rem] text-dark">11 Jan 2000</p>
              </div>
              <div className="flex flex-col gap-[0.1rem]">
                <p className="text-[0.65rem] text-secondary">Phone</p>
                <p className="text-[0.75rem] text-dark">234868**3765</p>
              </div>
              <div className="flex flex-col gap-[0.1rem]">
                <p className="text-[0.65rem] text-secondary">Location</p>
                <p className="text-[0.75rem] text-dark">Nigeria</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-[1rem] gap-[0.1rem] outline outline-1 outline-gray-200 rounded-[10px] overflow-hidden">
          <div className="bg-white flex flex-row p-[1rem] justify-between items-center cursor-pointer">
            <p>My Appointment</p>
            <div className="outline outline-1 outline-gray-200 w-[2rem] h-[2rem] rounded-full flex items-center justify-center">
              <PiCaretRightBold className="text-dark cursor-pointer" />
            </div>
          </div>
          <div className="bg-white flex flex-row p-[1rem] justify-between items-center cursor-pointer">
            <p>History</p>
            <div className="outline outline-1 outline-gray-200 w-[2rem] h-[2rem] rounded-full flex items-center justify-center">
              <PiCaretRightBold className="text-dark cursor-pointer" />
            </div>
          </div>
          <div className="bg-white flex flex-row p-[1rem] justify-between items-center cursor-pointer">
            <p>Favorite Doctor</p>
            <div className="outline outline-1 outline-gray-200 w-[2rem] h-[2rem] rounded-full flex items-center justify-center">
              <PiCaretRightBold className="text-dark cursor-pointer" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default page;
