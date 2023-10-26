import React from 'react'
import Cards from "./card";

const Tab3 = () => {
  return (
    <div className='pb-[8rem]'>
            <p className='font-semibold text-[15px] px-[1rem] mb-4'>Today</p>
            <Cards
        img="/Images/available-doctor-1.jpg"
        name="Dr. Mahububa Islam"
        role="Voice Call"
        time="Today, 2:00 - 2:30 PM"
        action="COMPLETE"
      />
    <p className='font-semibold text-[15px] px-[1rem] mb-4 mt-4'>Yesterday</p>
    <div className='flex flex-col gap-1'>
    <Cards
        img="/Images/available-doctor-1.jpg"
        name="Dr. Mahububa Islam"
        role="Voice Call"
        time="Today, 2:00 - 2:30 PM"
        action="COMPLETE"
      />
       <Cards
        img="/Images/available-doctor-1.jpg"
        name="Dr. Mahububa Islam"
        role="Voice Call"
        time="Today, 2:00 - 2:30 PM"
        action="COMPLETE"
      />
       <Cards
        img="/Images/available-doctor-1.jpg"
        name="Dr. Mahububa Islam"
        role="Voice Call"
        time="Today, 2:00 - 2:30 PM"
        action="COMPLETE"
      />
    </div>
    </div>

  )
}

export default Tab3
