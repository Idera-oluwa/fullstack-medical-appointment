import React from 'react'
import Header from "../../../../components/profilePage/Header";
import BottomNav from "../../../../components/BottomNav";
import { BsStarFill } from "react-icons/bs";
import {FaRegHeart} from 'react-icons/fa'

const page = () => {
    const starsArray = new Array(5).fill();
  return (
    <div className='bg-gray-100'>
      <Header text='Favorite Doctors'/>
     <div className='flex flex-col mt-[4.5rem] gap-[0.3rem] bg-gray-100 mb-[5rem]'>
     <div className='flex flex-row items-center p-[1rem] bg-white mt-[0.3rem]'>
       <div className='flex flex-row items-center gap-[1rem]'>
       <img src='/Images/top-doctor-2.jpg' alt='' className='w-[50px] h-[50px] rounded-full'/>
       <div className='flex flex-col gap-[0.5rem] justify-center'>
       <p className='font-semibold text-dark text-[14px]'>Dr. Taylor Samaro</p>
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
       <div className='ml-auto bg-lighter-primary-opacity flex items-center justify-center w-[1.9rem] h-[1.9rem] rounded-full'><FaRegHeart className='text-primary'/></div>
      </div>
      <div className='flex flex-row items-center p-[1rem] bg-white'>
       <div className='flex flex-row items-center gap-[1rem]'>
       <img src='/Images/top-doctor-1.jpg' alt='' className='w-[50px] h-[50px] rounded-full'/>
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
       <div className='ml-auto bg-lighter-primary-opacity flex items-center justify-center w-[1.9rem] h-[1.9rem] rounded-full'><FaRegHeart className='text-primary'/></div>
      </div>
      <div className='flex flex-row items-center p-[1rem] bg-white'>
       <div className='flex flex-row items-center gap-[1rem]'>
       <img src='/Images/top-doctor-3.jpg' alt='' className='w-[50px] h-[50px] rounded-full'/>
       <div className='flex flex-col gap-[0.5rem] justify-center'>
       <p className='font-semibold text-dark text-[14px]'>Dr. Morgan</p>
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
       <div className='ml-auto bg-lighter-primary-opacity flex items-center justify-center w-[1.9rem] h-[1.9rem] rounded-full'><FaRegHeart className='text-primary'/></div>
      </div>
      <div className='flex flex-row items-center p-[1rem] bg-white'>
       <div className='flex flex-row items-center gap-[1rem]'>
       <img src='/Images/profilepic1.jpg' alt='' className='w-[50px] h-[50px] rounded-full'/>
       <div className='flex flex-col gap-[0.5rem] justify-center'>
       <p className='font-semibold text-dark text-[14px]'>Dr. Leabow</p>
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
       <div className='ml-auto bg-lighter-primary-opacity flex items-center justify-center w-[1.9rem] h-[1.9rem] rounded-full'><FaRegHeart className='text-primary'/></div>
      </div>
      <div className='flex flex-row items-center p-[1rem] bg-white'>
       <div className='flex flex-row items-center gap-[1rem]'>
       <img src='/Images/profilepic2.jpg' alt='' className='w-[50px] h-[50px] rounded-full'/>
       <div className='flex flex-col gap-[0.5rem] justify-center'>
       <p className='font-semibold text-dark text-[14px]'>Dr. Riya Khondokar</p>
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
       <div className='ml-auto bg-lighter-primary-opacity flex items-center justify-center w-[1.9rem] h-[1.9rem] rounded-full'><FaRegHeart className='text-primary'/></div>
      </div>
      <div className='flex flex-row items-center p-[1rem] bg-white'>
       <div className='flex flex-row items-center gap-[1rem]'>
       <img src='/Images/top-doctor-2.jpg' alt='' className='w-[50px] h-[50px] rounded-full'/>
       <div className='flex flex-col gap-[0.5rem] justify-center'>
       <p className='font-semibold text-dark text-[14px]'>Dr. Salma</p>
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
       <div className='ml-auto bg-lighter-primary-opacity flex items-center justify-center w-[1.9rem] h-[1.9rem] rounded-full'><FaRegHeart className='text-primary'/></div>
      </div>
      <div className='flex flex-row items-center p-[1rem] bg-white'>
       <div className='flex flex-row items-center gap-[1rem]'>
       <img src='/Images/top-doctor-2.jpg' alt='' className='w-[50px] h-[50px] rounded-full'/>
       <div className='flex flex-col gap-[0.5rem] justify-center'>
       <p className='font-semibold text-dark text-[14px]'>Dr. Jannatul</p>
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
       <div className='ml-auto bg-lighter-primary-opacity flex items-center justify-center w-[1.9rem] h-[1.9rem] rounded-full'><FaRegHeart className='text-primary'/></div>
      </div>
     </div>
      <BottomNav/>
    </div>
  )
}

export default page
