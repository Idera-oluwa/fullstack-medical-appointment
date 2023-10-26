import React from 'react'
import Header from "../../components/profilePage/Header";
import { BsPerson } from "react-icons/bs";

const page = () => {
  return (
    <div className='bg-gray-100 pb-[6rem]'>
      <Header text='My Profile'/>
      <form className='mt-4 flex flex-col gap-4'>
       <div className='flex flex-col px-[1rem]'>
       <label htmlFor='first-name' className='text-[13px] text-secondary'>First Name</label>
        <div className="w-full bg-white h-[1.2cm] mt-[0.3rem]  rounded-[10px] flex flex-row px-4 py-1 items-center shadow-normal">
          <BsPerson className="text-dark font-bold w-6 h-6 " />
          <input
            type="text"
            placeholder="Type your first name"
            name='first-name'
            value='Mr'
            className="bg-white px-4   w-full text-[0.4cm] text-dark outline-0  focus:ring-0 focus:outline-0 border-0 focus:border-gray-300 border-gray-300"
          />
      </div>
       </div>
       <div className='flex flex-col px-[1rem]'>
       <label htmlFor='last-name' className='text-[13px] text-secondary'>Last Name</label>
        <div className="w-full bg-white h-[1.2cm] mt-[0.3rem]  rounded-[10px] flex flex-row px-4 py-1 items-center shadow-normal">
          <BsPerson className="text-dark font-bold w-6 h-6 " />
          <input
            type="text"
            placeholder="Type your first name"
            name='last-name'
            value='Singh'
            className="bg-white px-4   w-full text-[0.4cm] text-dark outline-0  focus:ring-0 focus:outline-0 border-0 focus:border-gray-300 border-gray-300"
          />
      </div>
       </div>
       <div className='flex flex-col px-[1rem]'>
       <label htmlFor='first-name' className='text-[13px] text-secondary'>First Name</label>
        <div className="w-full bg-white h-[1.2cm] mt-[0.3rem]  rounded-[10px] flex flex-row px-4 py-1 items-center shadow-normal">
          <BsPerson className="text-dark font-bold w-6 h-6 " />
          <input
            type="text"
            placeholder="Type your first name"
            name='first-name'
            value='Mr'
            className="bg-white px-4   w-full text-[0.4cm] text-dark outline-0  focus:ring-0 focus:outline-0 border-0 focus:border-gray-300 border-gray-300"
          />
      </div>
       </div>
       <div className='flex flex-col px-[1rem]'>
       <label htmlFor='first-name' className='text-[13px] text-secondary'>First Name</label>
        <div className="w-full bg-white h-[1.2cm] mt-[0.3rem]  rounded-[10px] flex flex-row px-4 py-1 items-center shadow-normal">
          <BsPerson className="text-dark font-bold w-6 h-6 " />
          <input
            type="text"
            placeholder="Type your first name"
            name='first-name'
            value='Mr'
            className="bg-white px-4   w-full text-[0.4cm] text-dark outline-0  focus:ring-0 focus:outline-0 border-0 focus:border-gray-300 border-gray-300"
          />
      </div>
       </div>
      <div className='h-[5rem] fixed bottom-0 mb-0 px-[1rem] z-[1000] w-full bg-gray-100 flex items-center justify-center'>
      <button className='text-white bg-light-primary h-[3.5rem] w-full rounded-[15px]'>Save Change</button>
      </div>
      </form>
    </div>
  )
}

export default page
