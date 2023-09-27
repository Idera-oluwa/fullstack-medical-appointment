'use client';
import React from 'react'
import Tab1 from './Tab1'
import Tab2 from './Tab2'
import Tab3 from './Tab3'
import { Tabs } from 'flowbite-react'

const ProfileTabs = () => {
  return (
    <div className='mt-[1cm]'>
      <Tabs.Group
      aria-label="Tabs with underline"
      style="underline"
      className='justify-between px-[0.5cm]'
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
    </div>
  )
}

export default ProfileTabs
