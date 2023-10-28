import React from 'react'
import Header from "../../../../components/profilePage/Header";

const page = () => {
  return (
    <div>
      <Header text='My Profile'/>
      <div className='h-[6rem] fixed bottom-0 mb-0 px-[1rem] z-[1000]'>
      <button className='text-white bg-light-primary h-8'>Save Change</button>
      </div>
    </div>
  )
}

export default page
