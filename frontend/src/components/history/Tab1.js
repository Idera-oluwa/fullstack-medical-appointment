import React from 'react'

const Tab1 = () => {
  return (
    <div>
      <p className='font-semibold text-[17px] px-[1rem]'>Today</p>
      <div className='flex flex-col gap-[0.3rem] mt-[0.5rem]'>
        <div className='flex flex-row gap-[1rem] bg-white p-[1rem]'>
           <img src='/Images/top-doctor-2.jpg'
           alt=''
           className='w-[40px] h-[40px] rounded-[10px]'
           />
           <div className='flex flex-col gap-[0.5rem] '>
             <p className='font-semibold text-dark text-[16px]'>Dr. Cayden Stack</p>
             <p className='text-secondary text-[12px]'>I am cardio patient. I need your help</p>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Tab1
