import React from "react";
import Header from "../../../components/profilePage/Header";
import BottomNav from "../../../components/BottomNav";
import { FaRegCalendarAlt, FaPhoneAlt, FaMedal } from "react-icons/fa";
import { BsPeople, BsStar } from "react-icons/bs";

const page = () => {
  return (
    <div className="bg-gray-100 mt-[4.5rem] mb-[3cm]">
      <Header text={"Upcoming Appointment"} />
      <div className="flex flex-row bg-white px-[0.5cm] pt-[1rem] items-center pb-[1rem]">
        <div className="flex flex-row gap-[1rem] items-center">
          <div className="w-[1.9cm] h-[1.9cm] ">
            <img
              src="/Images/available-doctor-1.jpg"
              alt=""
              className="rounded-[10px] object-cover h-[100%] w-full"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-[0.9rem] text-dark">
              Dr. Mahububa Islam
            </p>
            <p className="text-secondary text-[0.75rem] mt-[0.3rem]">
              Gynecology
            </p>
            <div className="flex flex-row mt-[0.8rem] items-center gap-[0.2cm]">
              <FaRegCalendarAlt className="text-primary text-[0.7rem]" />
              <p className="text-secondary text-[0.7rem]">20 Nov 2023</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-auto gap-[0.9rem]">
          <div className="bg-[#c0eef789] flex items-center justify-center w-[1cm] h-[1cm] rounded-full ml-auto">
            <FaPhoneAlt className="text-light-primary" />
          </div>
          <div className="px-[0.5rem] py-[0.115rem] rounded-full bg-success-bg-subtle">
            <p className="text-[0.55rem] text-success">RUNNING</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row px-[0.5cm] py-[1rem] items-center justify-between bg-white shadow-md border-t border-1 border-gray-200">
        <div className="flex flex-row items-center gap-[1rem]">
          <BsPeople className="text-light-primary text-[1.2rem]" />
          <div className="flex flex-col">
            <p className="text-[0.65rem]">Patient</p>
            <p className="text-[0.75rem] font-semibold text-primary">2.05K</p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-[1rem]">
          <BsStar className="text-light-primary text-[1.2rem]" />
          <div className="flex flex-col">
            <p className="text-[0.65rem]">Review</p>
            <p className="text-[0.75rem] font-semibold text-primary">5.3K</p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-[1rem]">
          <FaMedal className="text-light-primary text-[1.2rem]" />
          <div className="flex flex-col">
            <p className="text-[0.65rem]">Experience</p>
            <p className="text-[0.75rem] font-semibold text-primary">7 Years</p>
          </div>
        </div>
      </div>
      <div className="p-[1rem] flex flex-col gap-[0.6rem]">
        <div className="bg-white p-[1rem] outline outline-1 outline-gray-200">
          <p className="font-semibold text-[0.83rem] text-dark">Visit Time</p>
          <div className="flex flex-row gap-[1rem] mt-[0.8rem]">
            <div className="flex flex-col">
              <p className="text-[0.75rem] text-secondary">Day</p>
              <p className="text-[0.75rem] text-secondary mt-[0.5rem]">
                Visit Time
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-[0.75rem] text-secondary">
                : Thursday, Nov 13, 2021
              </p>
              <p className="text-[0.75rem] text-secondary mt-[0.5rem]">
                : Afternoon - 2:00 - 2:30 PM
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-[1rem] outline outline-1 outline-gray-200">
          <p className="font-semibold text-[0.83rem] text-dark">Patient Info</p>
          <div className="flex flex-row gap-[1rem] mt-[0.8rem]">
            <div className="flex flex-col">
              <p className="text-[0.75rem] text-secondary">Full Name</p>
              <p className="text-[0.75rem] text-secondary mt-[0.5rem]">Age</p>
              <p className="text-[0.75rem] text-secondary mt-[0.5rem]">Phone</p>
            </div>
            <div className="flex flex-col">
              <p className="text-[0.75rem] text-secondary">: MS Samantha</p>
              <p className="text-[0.75rem] text-secondary mt-[0.5rem]">: 22</p>
              <p className="text-[0.75rem] text-secondary mt-[0.5rem]">
                : 2348086357254
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-[1rem] outline outline-1 outline-gray-200">
          <p className="font-semibold text-[0.83rem] text-dark">
            Fee Information
          </p>
          <div className="flex flex-row gap-[1rem] mt-[0.8rem]">
            <div className="flex flex-col">
              <p className="text-[0.75rem] text-secondary">Short Time</p>
              <p className="text-[0.75rem] text-secondary mt-[0.5rem]">
                Long Time
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-[0.75rem] text-secondary">: $99</p>
              <p className="text-[0.75rem] text-secondary mt-[0.5rem]">
                : $199
              </p>
            </div>
          </div>
        </div>
        <div className="bg-light-primary w-full flex items-center justify-center py-[1rem] rounded-[10px] mt-[1rem] cursor-pointer">
          <p className="text-white font-semibold text-[0.9rem]">
            Call Now &#40;Start at 2:00 PM&#41;
          </p>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default page;
