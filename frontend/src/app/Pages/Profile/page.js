import React from 'react'
import Tabs from '../../Components/Tabs'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {BsHeart,BsShare,BsPeople,BsStar} from 'react-icons/bs'
import {LiaBarsSolid} from 'react-icons/lia'
import {FaMedal} from 'react-icons/fa'
import Link from 'next/link'

const Profile = () => {
  return (
<div>
<div className='flex flex-row h-[4.5rem] px-[0.5cm] items-center'>
      <div className='flex flex-row items-center gap-[1rem]'>
     <Link href='/'> <div className='outline outline-1 outline-gray-200 w-[2rem] h-[2rem] rounded-full flex items-center justify-center'><AiOutlineArrowLeft className='text-dark cursor-pointer'/></div></Link>
      <p className='font-semibold text-[0.9rem]'>Doctor Profile</p>
      </div>
      <div className='flex flex-row gap-[0.6rem] ml-auto'>
    <div className='outline outline-1 outline-gray-200 w-[2rem] h-[2rem] rounded-full flex items-center justify-center'><BsHeart className='text-primary cursor-pointer'/></div>
    <div className='outline outline-1 outline-gray-200 w-[2rem] h-[2rem] rounded-full flex items-center justify-center'><BsShare className='text-dark cursor-pointer'/></div>
    <div className='outline outline-1 outline-gray-200 w-[2rem] h-[2rem] rounded-full flex items-center justify-center'><LiaBarsSolid className='text-dark cursor-pointer'/></div>
    </div>
    </div>
    <div className='w-full h-[3cm] bg-primary px-[0.5cm] flex flex-row items-center gap-[2rem]'>
    <img src='/Images/appointment-doctor.png'
    alt='profile image'
    className='h-[100%]'
    />
    <div className='flex flex-col gap-[0.5rem]'>
    <p className='font-semibold text-white text-[0.9rem]'>Consultation Fee</p>
    <div className='flex flex-row items-center gap-[0.5rem]'>
      <h1 className='font-semibold text-warning text-[1.7rem]'>$199</h1>
      <p className='text-lighter-primary text-[0.9rem]'>Inc. VAT</p>
    </div>
    </div>
    </div>
    <div className='px-[0.5cm] mt-[0.5cm]'>
    <p className='text-[0.9rem]'>Dr. Cayden Stack</p>
    <p className='text-[0.6rem] mt-[0.2cm]'>MBBS - Gynecology</p>
    </div>
    <div>
      <div className='flex flex-row px-[0.5cm] mt-[1rem] items-center justify-between'>
     <div className='flex flex-row items-center gap-[1rem]'>
    <BsPeople className='text-light-primary text-[1.2rem]'/>
    <div className='flex flex-col'>
    <p className='text-[0.65rem]'>Patient</p>
    <p className='text-[0.75rem] font-semibold text-primary'>2.05K</p>
    </div>
     </div>
     <div className='flex flex-row items-center gap-[1rem]'>
    <BsStar className='text-light-primary text-[1.2rem]'/>
    <div className='flex flex-col'>
    <p className='text-[0.65rem]'>Review</p>
    <p className='text-[0.75rem] font-semibold text-primary'>5.3K</p>
    </div>
      </div>
     <div className='flex flex-row items-center gap-[1rem]'>
    <FaMedal className='text-light-primary text-[1.2rem]'/>
    <div className='flex flex-col'>
    <p className='text-[0.65rem]'>Experience</p>
    <p className='text-[0.75rem] font-semibold text-primary'>7 Years</p>
    </div>
     </div>
      </div>
    </div>
    <Tabs/>
</div>
  )
}

export default Profile
