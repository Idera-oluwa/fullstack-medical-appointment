import Header from "@/src/components/search/header";
import React from "react";
import { BsSearch,BsStarFill } from "react-icons/bs";
const starsArray = new Array(5).fill();

const Search = () => {
  return (
    <div className="bg-light min-h-screen pb-[8rem]">
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
      <p className='m-[1rem] font-semibold'>Specialist</p>
      <div className='flex flex-col gap-1'>
      <div className='flex flex-row items-center p-[1rem] bg-white'>
       <div className='flex flex-row items-center gap-[1rem]'>
       <img src='/Images/top-doctor-1.jpg' alt='' className='w-[50px] h-[50px] rounded-[10px]'/>
       <div className='flex flex-col gap-[0.5rem] justify-center'>
       <p className='font-semibold text-dark text-[14px]'>Dr. Cayden Stack</p>
       <div className='flex flex-row items-center gap-[0.2rem]'>
       <div className="flex flex-row gap-[0.4rem]">
              {starsArray.map((_, index) => {
                return (
                  <div key={index}>
                    <BsStarFill className="text-warning text-[8px]" />
                  </div>
                );
              })}
            </div>
            <p className="text-warning text-[11px]">4.9</p>
            <p className='text-[11px] text-secondary'>&#40;5,380&#41;</p>
       </div>
       <p className='text-[11px] text-secondary'>Dentist- Cumilla Medical College</p>
       </div>
       </div>
      </div>
      <div className='flex flex-row items-center p-[1rem] bg-white'>
       <div className='flex flex-row items-center gap-[1rem]'>
       <img src='/Images/top-doctor-1.jpg' alt='' className='w-[50px] h-[50px] rounded-[10px]'/>
       <div className='flex flex-col gap-[0.5rem] justify-center'>
       <p className='font-semibold text-dark text-[14px]'>Dr. Cayden Stack</p>
       <div className='flex flex-row items-center gap-[0.2rem]'>
       <div className="flex flex-row gap-[0.4rem]">
              {starsArray.map((_, index) => {
                return (
                  <div key={index}>
                    <BsStarFill className="text-warning text-[8px]" />
                  </div>
                );
              })}
            </div>
            <p className="text-warning text-[11px]">4.9</p>
            <p className='text-[11px] text-secondary'>&#40;5,380&#41;</p>
       </div>
       <p className='text-[11px] text-secondary'>Dentist- Cumilla Medical College</p>
       </div>
       </div>
      </div>
      <div className='flex flex-row items-center p-[1rem] bg-white'>
       <div className='flex flex-row items-center gap-[1rem]'>
       <img src='/Images/top-doctor-1.jpg' alt='' className='w-[50px] h-[50px] rounded-[10px]'/>
       <div className='flex flex-col gap-[0.5rem] justify-center'>
       <p className='font-semibold text-dark text-[14px]'>Dr. Cayden Stack</p>
       <div className='flex flex-row items-center gap-[0.2rem]'>
       <div className="flex flex-row gap-[0.4rem]">
              {starsArray.map((_, index) => {
                return (
                  <div key={index}>
                    <BsStarFill className="text-warning text-[8px]" />
                  </div>
                );
              })}
            </div>
            <p className="text-warning text-[11px]">4.9</p>
            <p className='text-[11px] text-secondary'>&#40;5,380&#41;</p>
       </div>
       <p className='text-[11px] text-secondary'>Dentist- Cumilla Medical College</p>
       </div>
       </div>
      </div>
      <div className='flex flex-row items-center p-[1rem] bg-white'>
       <div className='flex flex-row items-center gap-[1rem]'>
       <img src='/Images/top-doctor-1.jpg' alt='' className='w-[50px] h-[50px] rounded-[10px]'/>
       <div className='flex flex-col gap-[0.5rem] justify-center'>
       <p className='font-semibold text-dark text-[14px]'>Dr. Cayden Stack</p>
       <div className='flex flex-row items-center gap-[0.2rem]'>
       <div className="flex flex-row gap-[0.4rem]">
              {starsArray.map((_, index) => {
                return (
                  <div key={index}>
                    <BsStarFill className="text-warning text-[8px]" />
                  </div>
                );
              })}
            </div>
            <p className="text-warning text-[11px]">4.9</p>
            <p className='text-[11px] text-secondary'>&#40;5,380&#41;</p>
       </div>
       <p className='text-[11px] text-secondary'>Dentist- Cumilla Medical College</p>
       </div>
       </div>
      </div>
      <div className='flex flex-row items-center p-[1rem] bg-white'>
       <div className='flex flex-row items-center gap-[1rem]'>
       <img src='/Images/top-doctor-1.jpg' alt='' className='w-[50px] h-[50px] rounded-[10px]'/>
       <div className='flex flex-col gap-[0.5rem] justify-center'>
       <p className='font-semibold text-dark text-[14px]'>Dr. Cayden Stack</p>
       <div className='flex flex-row items-center gap-[0.2rem]'>
       <div className="flex flex-row gap-[0.4rem]">
              {starsArray.map((_, index) => {
                return (
                  <div key={index}>
                    <BsStarFill className="text-warning text-[8px]" />
                  </div>
                );
              })}
            </div>
            <p className="text-warning text-[11px]">4.9</p>
            <p className='text-[11px] text-secondary'>&#40;5,380&#41;</p>
       </div>
       <p className='text-[11px] text-secondary'>Dentist- Cumilla Medical College</p>
       </div>
       </div>
      </div>
      <div className='flex flex-row items-center p-[1rem] bg-white'>
       <div className='flex flex-row items-center gap-[1rem]'>
       <img src='/Images/top-doctor-1.jpg' alt='' className='w-[50px] h-[50px] rounded-[10px]'/>
       <div className='flex flex-col gap-[0.5rem] justify-center'>
       <p className='font-semibold text-dark text-[14px]'>Dr. Cayden Stack</p>
       <div className='flex flex-row items-center gap-[0.2rem]'>
       <div className="flex flex-row gap-[0.4rem]">
              {starsArray.map((_, index) => {
                return (
                  <div key={index}>
                    <BsStarFill className="text-warning text-[8px]" />
                  </div>
                );
              })}
            </div>
            <p className="text-warning text-[11px]">4.9</p>
            <p className='text-[11px] text-secondary'>&#40;5,380&#41;</p>
       </div>
       <p className='text-[11px] text-secondary'>Dentist- Cumilla Medical College</p>
       </div>
       </div>
      </div>
      
      </div>
    </div>
  );
};

export default Search;
