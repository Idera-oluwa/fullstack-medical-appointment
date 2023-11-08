import AvailableDoctors from "@/src/components/AvailableDoctors";
import Header from "@/src/components/profilePage/Header";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { PiFunnel } from "react-icons/pi";
import TopDoctor1 from "@assets/top-doctor-1.jpg";
import TopDoctor2 from "@assets/top-doctor-2.jpg";
import TopDoctor3 from "@assets/top-doctor-3.jpg";
import Image from "next/image";
import { BiVideo } from "react-icons/bi";
import ChooseDepartment from "@/src/components/search/chooseDepartment";

const Video = () => {
  return (
    <div className="bg-gray-100 min-h-screen  pb-[120px] ">
      {" "}
      <Header
        text={
          <>
            <span className="text-black">Video</span>
            <button className="ml-2 w-[106px] h-[25px]  justify-center items-center rounded-[4px] text-white text-[13px] bg-light-primary p-1">
              Consultation
            </button>
          </>
        }
      />
      <article className="w-full p-4 bg-primary h-[83px]">
        <h2 className="text-white font-bold text-[18px]">Discover</h2>
        <p className="text-white/60 mt-1">Find your suitable doctor!</p>
      </article>
      <div className="w-full bg-white h-[52px]    flex flex-row px-4 py-1 items-center shadow-normal">
        <BsSearch className="text-primary font-bold w-6 h-6 " />
        <input
          type="text"
          placeholder="Find your suitable doctor!"
          className="bg-transparent px-4   w-full text-[0.4cm] text-dark outline-0 border-r focus:ring-0 focus:outline-0 border-0 focus:border-gray-300 border-gray-300"
        />
        <div className=" min-h-[18px] min-w-[18px] pl-3 flex items-center justify-center  ">
          <PiFunnel className="min-w-[18px] min-h-[18px]" />
        </div>
      </div>
      <main className="sm:px-[50px] lg:px-[90px] xl:px-[120px]">
        <section className="w-full mt-6 sm:mt-10">
          <h3 className="font-bold px-4 mb-3 sm:mb-5 sm:text-lg lg:text-xl ">
            Consult a specialist
          </h3>
          <div className="w-full flex items-start flex-nowrap   overflow-y-hidden overflow-x-auto horizontal-overflow px-4 gap-3">
            <article className="flex flex-col min-w-[146px]  w-[146px] h-[195px] rounded-[10px] shadow-small bg-white">
              <Image
                src={TopDoctor1}
                width={0}
                height={101}
                alt="service-doctor"
                className="min-w-full rounded-t-[10px]"
              />
              <div className="p-3">
                <h3 className=" w-full text-[14px]  ">
                  Experience Gynaecologist
                </h3>
                <div className="flex items-center mt-4 justify-between">
                  <div className="flex items-center gap-1">
                    <span className="text-black/60 line-through">$499</span>
                    <span>$200</span>
                  </div>
                  <BiVideo className="stroke-primary text-primary" />
                </div>
              </div>
            </article>
            <article className="flex flex-col min-w-[146px]  w-[146px] h-[195px] rounded-[10px] shadow-small bg-white">
              <Image
                src={TopDoctor3}
                width={0}
                height={101}
                alt="service-doctor"
                className="min-w-full rounded-t-[10px]"
              />
              <div className="p-3">
                <h3 className=" w-full text-[14px]  ">
                  Experience MBBS Doctor
                </h3>
                <div className="flex items-center mt-4 justify-between">
                  <div className="flex items-center gap-1">
                    <span className="text-black/60 line-through">$499</span>
                    <span>$200</span>
                  </div>
                  <BiVideo className="stroke-primary text-primary" />
                </div>
              </div>
            </article>
            <article className="flex flex-col min-w-[146px]  w-[146px] h-[195px] rounded-[10px] shadow-small bg-white">
              <Image
                src={TopDoctor2}
                width={0}
                height={101}
                alt="service-doctor"
                className="min-w-full rounded-t-[10px]"
              />
              <div className="p-3">
                <h3 className=" w-full text-[14px]  ">
                  Experience Child Doctor
                </h3>
                <div className="flex items-center mt-4 justify-between">
                  <div className="flex items-center gap-1">
                    <span className="text-black/60 line-through">$499</span>
                    <span>$200</span>
                  </div>
                  <BiVideo className="stroke-primary text-primary" />
                </div>
              </div>
            </article>
            <article className="flex flex-col min-w-[146px]  w-[146px] h-[195px] rounded-[10px] shadow-small bg-white">
              <Image
                src={TopDoctor1}
                width={0}
                height={101}
                alt="service-doctor"
                className="min-w-full rounded-t-[10px]"
              />
              <div className="p-3">
                <h3 className=" w-full text-[14px]  ">Experience Pediatrics</h3>
                <div className="flex items-center mt-4 justify-between">
                  <div className="flex items-center gap-1">
                    <span className="text-black/60 line-through">$499</span>
                    <span>$200</span>
                  </div>
                  <BiVideo className="stroke-primary text-primary" />
                </div>
              </div>
            </article>
          </div>
        </section>
        <ChooseDepartment />
        <section className="w-full mt-2 sm:mt-4 ">
          <h3 className="font-bold px-4 mb-3 sm:mb-5  sm:text-lg lg:text-xl">
            Recently Viewed
          </h3>
          <div className="w-full flex items-start flex-nowrap  overflow-y-hidden overflow-x-auto horizontal-overflow px-4 gap-3">
            <article className="flex flex-col min-w-[152px]  w-[152px] h-[161px] rounded-[10px] shadow-small bg-white">
              <Image
                src={TopDoctor1}
                width={0}
                height={101}
                alt="service-doctor"
                className="min-w-full rounded-t-[10px]"
              />
              <div className="p-3">
                <h3 className="overflow-hidden overflow-ellipsis line-clamp-1 w-full text-[14px] font-semibold ">
                  Dr. Taylor Samaro
                </h3>
                <p className="text-small text-secondary">Dental Sargon</p>
              </div>
            </article>
            <article className="flex flex-col min-w-[152px]  w-[152px] h-[161px] rounded-[10px] shadow-small bg-white">
              <Image
                src={TopDoctor3}
                width={0}
                height={101}
                alt="service-doctor"
                className="min-w-full rounded-t-[10px]"
              />
              <div className="p-3">
                <h3 className="overflow-hidden overflow-ellipsis line-clamp-1 w-full text-[14px] font-semibold ">
                  Dr. Taylor Samaro
                </h3>
                <p className="text-small text-secondary">Dental Sargon</p>
              </div>
            </article>
            <article className="flex flex-col min-w-[152px]  w-[152px] h-[161px] rounded-[10px] shadow-small bg-white">
              <Image
                src={TopDoctor2}
                width={0}
                height={101}
                alt="service-doctor"
                className="min-w-full rounded-t-[10px]"
              />
              <div className="p-3">
                <h3 className="overflow-hidden overflow-ellipsis line-clamp-1 w-full text-[14px] font-semibold ">
                  Dr. Taylor Samaro
                </h3>
                <p className="text-small text-secondary">Dental Sargon</p>
              </div>
            </article>
            <article className="flex flex-col min-w-[152px]  w-[152px] h-[161px] rounded-[10px] shadow-small bg-white">
              <Image
                src={TopDoctor1}
                width={0}
                height={101}
                alt="service-doctor"
                className="min-w-full rounded-t-[10px]"
              />
              <div className="p-3">
                <h3 className="overflow-hidden overflow-ellipsis line-clamp-1 w-full text-[14px] font-semibold ">
                  Dr. Taylor Samaro
                </h3>
                <p className="text-small text-secondary">Dental Sargon</p>
              </div>
            </article>
          </div>
        </section>
        <AvailableDoctors />
      </main>
    </div>
  );
};

export default Video;
