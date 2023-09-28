import React from 'react'
import {BiVideo} from 'react-icons/bi'
import {TbHome} from 'react-icons/tb'
import {BsChatLeftDots,BsPerson} from 'react-icons/bs'
import {IoMdSearch} from 'react-icons/io'

const Footer = () => {
  return (
    <div className='p-[1rem] fixed bottom-[1rem] w-full right-0'>
    <div className='flex flex-row items-center justify-between bg-white px-[2rem] py-[1rem] mt-[2rem] outline outline-1 outline-gray-200 rounded-[10px]'>
    <div className='flex flex-col text-secondary gap-[0.3rem] cursor-pointer items-center'>
      <TbHome className='text-[1.4rem]'/>
      <p className='text-[0.6rem]'>HOME</p>
    </div>
    <div className='flex flex-col text-secondary gap-[0.3rem] cursor-pointer items-center'>
      <IoMdSearch className='text-[1.4rem]'/>
      <p className='text-[0.6rem]'>SEARCH</p>
    </div>
    <div className='flex flex-col text-secondary gap-[0.3rem] cursor-pointer items-center'>
      <BiVideo className='text-[1.4rem]'/>
      <p className='text-[0.6rem]'>VIDEO</p>
    </div>
    <div className='flex flex-col text-secondary gap-[0.3rem] cursor-pointer items-center'>
      <BsChatLeftDots className='text-[1.4rem]'/>
      <p className='text-[0.6rem]'>CHAT</p>
    </div> 
    <div className='flex flex-col text-secondary gap-[0.3rem] cursor-pointer items-center'>
      <BsPerson className='text-[1.4rem]'/>
      <p className='text-[0.6rem]'>PROFILE</p>
    </div>
    </div>
    </div>
  )
}

export default Footer
