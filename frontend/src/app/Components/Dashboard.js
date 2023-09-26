import React from 'react'

const Dashboard = () => {
  return (
    <div className='sticky top-0 border-r border-l-black w-[7cm] mt-[2rem] h-[100vh]'>
      <p className='font-bold text-[2rem] flex items-center ml-[1rem]'>Dashboard</p>
      <ul className='flex flex-col mt-[1.5rem]'>
        <li className='cursor-pointer hover:bg-lighter-primary-opacity h-[3rem] px-[1rem] text-dark'>Authentification</li>
        <li className='cursor-pointer hover:bg-lighter-primary-opacity h-[3rem] px-[1rem] text-dark'>Notification</li>
        <li className='cursor-pointer hover:bg-lighter-primary-opacity h-[3rem] px-[1rem] text-dark'>Video Consultation</li>
        <li className='cursor-pointer hover:bg-lighter-primary-opacity h-[3rem] px-[1rem] text-dark'>Authentification</li>
        <li className='cursor-pointer hover:bg-lighter-primary-opacity h-[3rem] px-[1rem] text-dark'>Notification</li>
        <li className='cursor-pointer hover:bg-lighter-primary-opacity h-[3rem] px-[1rem] text-dark'>Video Consultation</li>
        <li className='cursor-pointer hover:bg-lighter-primary-opacity h-[3rem] px-[1rem] text-dark'>Authentification</li>
        <li className='cursor-pointer hover:bg-lighter-primary-opacity h-[3rem] px-[1rem] text-dark'>Notification</li>
        <li className='cursor-pointer hover:bg-lighter-primary-opacity h-[3rem] px-[1rem] text-dark'>Video Consultation</li>
      </ul>
    </div>
  )
}

export default Dashboard
