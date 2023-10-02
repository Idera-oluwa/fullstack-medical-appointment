import React from 'react'
import Cards from './AppointmentCard'
import Link from 'next/link'

const Tab1 = () => {
  return (
    <div className='bg-gray-100 flex flex-col gap-[5px] mt-[-7px]'>
       <Link href="/profile/my-upcoming-appointments"><Cards 
      img='/Images/available-doctor-1.jpg'
      name='Dr. Mahububa Islam'
      role='Gynecology'
      date='20 Nov 2023'
      action='RUNNING'
      /></Link>
      <Link href="/profile/my-upcoming-appointments"><Cards 
      img='/Images/available-doctor-2.jpg'
      name='Dr. Morgan'
      role='Dentist'
      date='18 Nov 2023'
      action='RUNNING'
      /></Link>
      <Link href="/profile/my-upcoming-appointments"><Cards 
      img='/Images/available-doctor-3.jpg'
      name='Dr. Leabow'
      role='Gynecology'
      date='15 Nov 2023'
      action='RUNNING'
      /></Link>
    </div>
  )
}

export default Tab1
