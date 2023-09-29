import React from 'react'
import {LiaBarsSolid} from 'react-icons/lia'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import Link from 'next/link'

const Header = ({text}) => {
  return (
    <div className='flex flex-row h-[4.5rem] px-[0.5cm] items-center shadow-sm bg-white fixed w-full top-0'>
      <div className='flex flex-row items-center gap-[1rem]'>
     <Link href='/'> <div className='outline outline-1 outline-gray-200 w-[2rem] h-[2rem] rounded-full flex items-center justify-center'><AiOutlineArrowLeft className='text-dark cursor-pointer'/></div></Link>
     <p className='font-semibold text-[0.9rem]'>{text}</p>
      </div>
      <div className='ml-auto'>
    <div className='outline outline-1 outline-gray-200 w-[2rem] h-[2rem] rounded-full flex items-center justify-center'><LiaBarsSolid className='text-dark cursor-pointer'/></div>
    </div>
    </div>
  )
}

export default Header
