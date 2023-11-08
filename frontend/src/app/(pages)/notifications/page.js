import Header from "@/src/components/profilePage/Header";
import React from "react";
import { MdOutlineCalendarMonth } from "react-icons/md";

const Page = () => {
  return (
    <div className="bg-gray-100 min-h-[100vh] pb-[120px]">
      {" "}
      <Header text="Notification" />
      <section>
        <h4 className="p-4">Today 16 Nov,2023</h4>
        <div className="flex flex-col">
          <div className="p-4 flex items-start w-full gap-4 bg-white border-b-[0.8px] border-b-[#eee]">
            <div className="w-[50px] h-[50px] rounded-[50%] bg-info-bg-light flex justify-center items-center">
              <MdOutlineCalendarMonth className="w-6 fill-info-bg h-6" />
            </div>
            <div>
              {" "}
              <p className="text-secondary text-[13px] mb-2">
                You have appointment with mahbuba uslam at 9.00pm today
              </p>
              <p className="text-blue-600">Just Now</p>
            </div>
          </div>
          <div className="p-4 flex items-start w-full gap-4 bg-white border-b-[0.8px] border-b-[#eee]">
            <div className="w-[50px] h-[50px] rounded-[50%] bg-info-bg-light flex justify-center items-center">
              <MdOutlineCalendarMonth className="w-6 fill-info-bg h-6" />
            </div>
            <div>
              {" "}
              <p className="text-secondary text-[13px] mb-2">
                You have appointment with mahbuba uslam at 9.00pm today
              </p>
              <p className="text-blue-600">Just Now</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-1">
        <h4 className="p-4">Older</h4>
        <div className="flex flex-col">
          <div className="p-4 flex items-start w-full gap-4 bg-white border-b-[0.8px] border-b-[#eee]">
            <div className="w-[50px] h-[50px] rounded-[50%] bg-info-bg-light flex justify-center items-center">
              <MdOutlineCalendarMonth className="w-6 fill-info-bg h-6" />
            </div>
            <div>
              {" "}
              <p className="text-secondary text-[13px] mb-2">
                You have appointment with mahbuba uslam at 9.00pm today
              </p>
              <p className="text-blue-600">Just Now</p>
            </div>
          </div>
          <div className="p-4 flex items-start w-full gap-4 bg-white border-b-[0.8px] border-b-[#eee]">
            <div className="w-[50px] h-[50px] rounded-[50%] bg-info-bg-light flex justify-center items-center">
              <MdOutlineCalendarMonth className="w-6 fill-info-bg h-6" />
            </div>
            <div>
              {" "}
              <p className="text-secondary text-[13px] mb-2">
                You have appointment with mahbuba uslam at 9.00pm today
              </p>
              <p className="text-blue-600">Just Now</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
