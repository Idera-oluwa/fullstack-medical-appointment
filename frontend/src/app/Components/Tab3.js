import React from 'react'
import {BsStarFill} from 'react-icons/bs'

const Tab3 = () => {
  const starsArray= new Array(5).fill();
  console.log(starsArray.length)
  
  return (
    <div className='bg-gray-100 py-[0.5cm] pb-[8rem] mt-[-0.5cm] mx-[-0.5cm]'>
      <p className='px-[0.5cm] text-[0.93rem] font-semibold text-dark'>Review &#40;2350&#41;</p>
      <div className=' mt-[0.5cm] flex flex-col gap-[0.1rem]'>
      <div className='px-[0.5cm] bg-white py-[0.25cm] flex flex-row items-center'>
        <img src='/Images/profilepic1.jpg'
        alt=''
        className='w-[1cm] h-[1cm] rounded-full'/>
        <div className='flex flex-col ml-[0.3cm]'>
          <p className='text-[0.8rem] font-semibold text-dark'>Sadia</p>
          <p className='text-[0.65rem] text-secondary'>Oct 31, 2023</p>
        </div>
        <div className='flex flex-row ml-auto items-center gap-[0.5rem]'>
          <div className='flex flex-row gap-[0.5rem]'>
          {starsArray.map(()=>{
          return(
            <div>
            <BsStarFill className='text-warning text-[0.6rem]'/>
            </div>
          )
        })}
          </div>
          <div className='text-dark font-bold text-[0.5rem] bg-warning w-[1.5rem] h-[0.8rem] rounded-full flex justify-center items-center'><p>4.9</p></div>
        </div>
      </div>
      <div className='px-[0.5cm] bg-white py-[0.25cm] flex flex-row items-center'>
        <img src='/Images/profilepic1.jpg'
        alt=''
        className='w-[1cm] h-[1cm] rounded-full'/>
        <div className='flex flex-col ml-[0.3cm]'>
          <p className='text-[0.8rem] font-semibold text-dark'>Sadia</p>
          <p className='text-[0.65rem] text-secondary'>Oct 31, 2023</p>
        </div>
        <div className='flex flex-row ml-auto items-center gap-[0.5rem]'>
          <div className='flex flex-row gap-[0.5rem]'>
          {starsArray.map(()=>{
          return(
            <div>
            <BsStarFill className='text-warning text-[0.6rem]'/>
            </div>
          )
        })}
          </div>
          <div className='text-dark font-bold text-[0.5rem] bg-warning w-[1.5rem] h-[0.8rem] rounded-full flex justify-center items-center'><p>4.9</p></div>
        </div>
      </div>
      <div className='px-[0.5cm] bg-white py-[0.25cm] flex flex-row items-center'>
        <img src='/Images/profilepic1.jpg'
        alt=''
        className='w-[1cm] h-[1cm] rounded-full'/>
        <div className='flex flex-col ml-[0.3cm]'>
          <p className='text-[0.8rem] font-semibold text-dark'>Sadia</p>
          <p className='text-[0.65rem] text-secondary'>Oct 31, 2023</p>
        </div>
        <div className='flex flex-row ml-auto items-center gap-[0.5rem]'>
          <div className='flex flex-row gap-[0.5rem]'>
          {starsArray.map(()=>{
          return(
            <div>
            <BsStarFill className='text-warning text-[0.6rem]'/>
            </div>
          )
        })}
          </div>
          <div className='text-dark font-bold text-[0.5rem] bg-warning w-[1.5rem] h-[0.8rem] rounded-full flex justify-center items-center'><p>4.9</p></div>
        </div>
      </div>
      <div className='px-[0.5cm] bg-white py-[0.25cm] flex flex-row items-center'>
        <img src='/Images/profilepic1.jpg'
        alt=''
        className='w-[1cm] h-[1cm] rounded-full'/>
        <div className='flex flex-col ml-[0.3cm]'>
          <p className='text-[0.8rem] font-semibold text-dark'>Sadia</p>
          <p className='text-[0.65rem] text-secondary'>Oct 31, 2023</p>
        </div>
        <div className='flex flex-row ml-auto items-center gap-[0.5rem]'>
          <div className='flex flex-row gap-[0.5rem]'>
          {starsArray.map(()=>{
          return(
            <div>
            <BsStarFill className='text-warning text-[0.6rem]'/>
            </div>
          )
        })}
          </div>
          <div className='text-dark font-bold text-[0.5rem] bg-warning w-[1.5rem] h-[0.8rem] rounded-full flex justify-center items-center'><p>4.9</p></div>
        </div>
      </div>
      <div className='px-[0.5cm] bg-white py-[0.25cm] flex flex-row items-center shadow-md'>
        <img src='/Images/profilepic1.jpg'
        alt=''
        className='w-[1cm] h-[1cm] rounded-full'/>
        <div className='flex flex-col ml-[0.3cm]'>
          <p className='text-[0.8rem] font-semibold text-dark'>Sadia</p>
          <p className='text-[0.65rem] text-secondary'>Oct 31, 2023</p>
        </div>
        <div className='flex flex-row ml-auto items-center gap-[0.5rem]'>
          <div className='flex flex-row gap-[0.5rem]'>
          {starsArray.map(()=>{
          return(
            <div>
            <BsStarFill className='text-warning text-[0.6rem]'/>
            </div>
          )
        })}
          </div>
          <div className='text-dark font-bold text-[0.5rem] bg-warning w-[1.5rem] h-[0.8rem] rounded-full flex justify-center items-center'><p>4.9</p></div>
        </div>
      </div>
      </div>
      <p className='text-primary text-center text-[0.8rem] underline mt-[0.5cm] font-semibold cursor-pointer'>Tap here to see all reviews</p>
    </div>
  )
}

export default Tab3
