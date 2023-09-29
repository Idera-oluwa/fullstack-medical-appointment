'use client'
import React from 'react'
import {BsHeart, BsBell,BsSearch} from 'react-icons/bs'
import {LiaBarsSolid} from 'react-icons/lia'
import {PiFunnel} from 'react-icons/pi'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='mt-[2rem] px-[0.5cm] shadow-md py-[1rem]'>
    <div className='flex flex-row items-center justify-between'>
    <div className='flex flex-row gap-[1rem]'>
      <Link href='/Pages/Profile'><img src='Images/profilepic1.jpg'
      className='w-[1cm] h-[1cm] rounded-full cursor-pointer'
      /></Link>
      <div className='flex flex-col w-[5cm]'>
        <p className='text-[0.7rem] text-orange'>Welcome</p>
        <p className='font-semibold text-primary cursor-pointer text-[0.75rem]'>Hey, Samantha!</p>
      </div>
    </div>
    <div className='flex flex-row gap-[1rem]'>
    <div className='outline outline-1 outline-gray-200 w-[2rem] h-[2rem] rounded-full flex items-center justify-center'><BsHeart className='text-primary cursor-pointer'/></div>
    <div className='outline outline-1 outline-gray-200 w-[2rem] h-[2rem] rounded-full flex items-center justify-center'><BsBell className='text-primary cursor-pointer'/></div>
    <div className='outline outline-1 outline-gray-200 w-[2rem] h-[2rem] rounded-full flex items-center justify-center'><LiaBarsSolid className='text-primary cursor-pointer'/></div>
    </div>
    </div>
    <div className='w-full bg-gray-100 h-[1.2cm] mt-[1rem] outline outline-1 outline-gray-200 rounded-[5px] flex flex-row pl-[0.5cm] items-center'>
     <BsSearch className='text-primary font-bold'/>
     <input type='text'
     placeholder='Find your suitable doctor!'
     className='bg-transparent ml-[0.5cm] text-[0.4cm] text-dark outline-none'
     />
     <div className='ml-auto h-[1.2cm] w-[1.2cm] flex items-center justify-center border-l border-gray-200'><PiFunnel/></div>
    </div>
    </div>
  )
}

export default Header
