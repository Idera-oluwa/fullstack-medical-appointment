'use client';
import React from 'react'
import Tab1 from './Tab1'
import Tab2 from './Tab2'
import Tab3 from './Tab3'
import { Tabs } from 'flowbite-react'
import {BsFillCameraVideoFill} from 'react-icons/bs'

const ProfileTabs = () => {
  return (
    <div className='mt-[1cm]'>
      <Tabs.Group
      aria-label="Tabs with underline"
      style="underline"
      className='justify-between px-[0.5cm] border-t border-1-gray-100'
    >
      <Tabs.Item
        active
        title="Info"
      >
        <Tab1/>
      </Tabs.Item>
      <Tabs.Item
        title="Experience"
      >
       <Tab2/>
      </Tabs.Item>
      <Tabs.Item
        title="Review"
      >
        <Tab3/>
      </Tabs.Item>
    </Tabs.Group>
    <div className='flex flex-row px-[0.5cm] gap-[3%] justify-between fixed bottom-0 mb-0 w-full py-[1rem] bg-gray-100'>
      <div className='flex flex-row items-center justify-center gap-[0.3cm] w-[48.5%] h-[1.5cm] bg-white hover:bg-light-primary rounded-[10px] outline outline-1 outline-light-primary cursor-pointer hover:text-white text-light-primary'>
     <BsFillCameraVideoFill className=''/>
     <p className='font-semibold'>Call</p>
      </div>
      <div className='flex flex-row items-center justify-center gap-[0.3cm] w-[48.5%] h-[1.5cm] bg-light-primary rounded-[10px] cursor-pointer'>
     <p className='text-white font-semibold'>Book</p>
      </div>
    </div>
    </div>
  )
}

export default ProfileTabs
