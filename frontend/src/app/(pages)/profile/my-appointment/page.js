import React from 'react'
import Header from "../../../../components/profilePage/Header";
import BottomNav from "../../../../components/BottomNav";
import Tabs from "../../../../components/MyAppointment/Tabs";

const page = () => {
  return (
    <div className='bg-gray-100 min-h-[100vh]'>
      <Header text='My Appointment'/>
      <Tabs/>
      <BottomNav/>
    </div>
  )
}

export default page
