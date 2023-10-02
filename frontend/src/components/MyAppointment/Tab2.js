import React from 'react'
import Cards from './AppointmentCard'
import Link from 'next/link'

const Tab2 = () => {
  return (
    <div className='bg-gray-100 flex flex-col gap-[5px] mt-[-7px]'>
     <Link href="/profile/my-upcoming-appointments"><Cards 
    img='/Images/available-doctor-1.png'
    name='Dr. Mahububa Islam'
    role='Gynecology'
    date='20 Nov 2023'
    action='SUCCESS'
    /></Link>
    <Link href="/profile/my-upcoming-appointments"><Cards 
    img='/Images/available-doctor-2.png'
    name='Dr. Morgan'
    role='Dentist'
    date='18 Nov 2023'
    action='SUCCESS'
    /></Link>
    <Link href="/profile/my-upcoming-appointments"><Cards 
    img='/Images/available-doctor-3.png'
    name='Dr. Leabow'
    role='Gynecology'
    date='15 Nov 2023'
    action='SUCCESS'
    /></Link>
    <Link href="/profile/my-upcoming-appointments"><Cards 
    img='/Images/available-doctor-4.jpg'
    name='Dr. Leabow'
    role='Gynecology'
    date='15 Nov 2023'
    action='SUCCESS'
    /></Link>
  </div>
  )
}

export default Tab2
