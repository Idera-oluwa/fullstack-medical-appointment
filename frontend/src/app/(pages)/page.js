"use client";

import React, { useState } from "react";
import Header from "../../components/HomePage/Header";
import DoctorImg from "../../../public/Images/doctor.png";
import MedicineImg from "../../../public/Images/medicine.png";
import ScheduleImg from "../../../public/Images/schedule.png";
import PrescriptionImg from "../../../public/Images/prescription.png";
import { BsStarFill } from "react-icons/bs";
import { BiVideo } from "react-icons/bi";
import { CiMedicalCase } from "react-icons/ci";
import TopDoctor1 from "../../../public/Images/top-doctor-1.jpg";
import TopDoctor2 from "../../../public/Images/top-doctor-2.jpg";
import TopDoctor3 from "../../../public/Images/top-doctor-3.jpg";
import AvailableDoctor3 from "../../../public/Images/available-doctor-3.jpg";
import AvailableDoctor2 from "../../../public/Images/available-doctor-2.jpg";
import AvailableDoctor1 from "../../../public/Images/available-doctor-1.jpg";
import AvailableDoctor4 from "../../../public/Images/available-doctor-4.jpg";
import Image from "next/image";
import Sidebar from "@/src/components/sidebar";

const Home = () => {
  //w-[90vw] md:w-[75vw] lg:w-[83vw]
  const [openSideBar, setIsOpenSideBar] = useState(false);

  const ToggleSideBar = () => {
    setIsOpenSideBar(!openSideBar);
  };
  const closeSideBar = () => {
    setIsOpenSideBar(false);
  };
  return (
    <div className="min-h-screen bg-light pb-[120px]">
      <Header ToggleSideBar={ToggleSideBar} />
      <Sidebar openSideBar={openSideBar} closeSideBar={closeSideBar} />
      {/* The rest of the components in the homepage*/}
      <main className="w-full bg-light pt-4 ">
        <section className="grid grid-cols-4 w-full max-w-[420px] px-4 my-4 gap-2 mx-auto">
          <article className="rounded-[10px] h-[90px] flex flex-col items-center justify-center gap-3 shadow-small p-2 bg-white">
            <Image
              src={DoctorImg}
              width={45}
              height={45}
              alt="service-doctor"
            />
            <p className="text-center text-[11.375px] text-ellipsis w-full ">
              Doctor
            </p>
          </article>
          <article className="rounded-[10px] h-[90px] flex flex-col items-center justify-center gap-3 shadow-small p-2 bg-white">
            <Image
              src={ScheduleImg}
              width={45}
              height={45}
              alt="service-doctor"
            />
            <p className="text-center whitespace-nowrap overflow-hidden overflow-ellipsis text-[11.375px] w-full ">
              Appointment
            </p>
          </article>
          <article className="rounded-[10px] h-[90px] flex flex-col items-center justify-center gap-3 p-2 shadow-small bg-white ">
            <Image
              width={45}
              height={45}
              src={PrescriptionImg}
              alt="service-doctor"
            />
            <p className="text-center whitespace-nowrap overflow-hidden overflow-ellipsis text-[11.375px] w-full ">
              Prescription
            </p>
          </article>
          <article className="rounded-[10px] h-[90px] flex flex-col items-center justify-center gap-3 shadow-small p-2 bg-white text-black">
            <Image
              src={MedicineImg}
              width={45}
              height={45}
              alt="service-doctor"
            />
            <h2 className="text-center text-[11.375px] text-ellipsis w-full ">
              Medicine
            </h2>
          </article>
        </section>

        <section className="w-full mt-2">
          <h3 className="font-bold px-4 mb-3">Top Doctors</h3>
          <div className="w-full flex items-start flex-nowrap overflow-y-hidden overflow-x-auto horizontal-overflow px-4 gap-3">
            <article className="flex flex-col min-w-[114px]  w-[114px] h-[136px] rounded-[10px] shadow-small bg-white">
              <Image
                src={TopDoctor1}
                width={0}
                height={76}
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
            <article className="flex flex-col min-w-[114px]  w-[114px] h-[136px] rounded-[10px] shadow-small bg-white">
              <Image
                src={TopDoctor3}
                width={0}
                height={76}
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
            <article className="flex flex-col min-w-[114px]  w-[114px] h-[136px] rounded-[10px] shadow-small bg-white">
              <Image
                src={TopDoctor2}
                width={0}
                height={76}
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
            <article className="flex flex-col min-w-[114px]  w-[114px] h-[136px] rounded-[10px] shadow-small bg-white">
              <Image
                src={TopDoctor1}
                width={0}
                height={76}
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

        <section className="mt-8 w-full">
          <h3 className="font-bold px-4 mb-3">Available Doctors</h3>
          <div className="grid grid-cols-2 items-center gap-x-4 gap-y-4 w-full px-4">
            <article className="flex-col rounded-[10px] bg-white">
              <div className="relative">
                <Image
                  src={AvailableDoctor1}
                  width={0}
                  height={90}
                  alt="service-doctor"
                  className="min-w-full rounded-t-[10px] relative "
                />
                <div className="min-w-fit w-[48px] absolute left-2 px-[6px] py-[3px] bg-success text-white flex justify-center items-center text-[9.75px] top-2 h-auto rounded-[40px]">
                  ONLINE
                </div>
              </div>
              <div className="p-3 flex flex-col gap-1">
                <div className="">
                  <h3 className="overflow-hidden overflow-ellipsis line-clamp-1 w-full text-[14px] font-semibold ">
                    Dr. Taylor Samaro
                  </h3>
                  <p className="text-small text-secondary">MBBS, BCS</p>
                </div>
                <div className="flex w-full items-center mb-3 justify-between gap-2 flex-wrap  text-small">
                  <div className="flex items-center">
                    <BsStarFill className="text-warning text-small" />
                    &nbsp;4.9 (5,380)
                  </div>
                  <div className="flex items-center">
                    <CiMedicalCase className="text-primary text-small" />
                    &nbsp;4+ Years
                  </div>
                </div>
                <h2 className="">
                  $199
                  <span className="font-small text-secondary ml-1">
                    Inc.VAT
                  </span>
                </h2>
              </div>
              <div className="w-full rounded-b-[10px] bg-[#0147ff] text-white h-[42px] px-3 flex items-center justify-between">
                <h5 className="text-small font-bold">SEE DOCTOR NOW</h5>
                <BiVideo className="text-[18px] stroke-white" />
              </div>
            </article>
            <article className="flex-col rounded-[10px] bg-white">
              <div className="relative">
                <Image
                  src={AvailableDoctor2}
                  width={0}
                  height={90}
                  alt="service-doctor"
                  className="min-w-full rounded-t-[10px] relative "
                />
                <div className="min-w-fit w-[48px] absolute left-2 px-[6px] py-[3px] bg-success text-white flex justify-center items-center text-[9.75px] top-2 h-auto rounded-[40px]">
                  ONLINE
                </div>
              </div>
              <div className="p-3 flex flex-col gap-1">
                <div className="">
                  <h3 className="overflow-hidden overflow-ellipsis line-clamp-1 w-full text-[14px] font-semibold ">
                    Dr. Taylor Samaro
                  </h3>
                  <p className="text-small text-secondary">MBBS, BCS</p>
                </div>
                <div className="flex w-full items-center mb-3 justify-between gap-2 flex-wrap text-small">
                  <div className="flex items-center">
                    <BsStarFill className="text-warning text-small" />
                    &nbsp;4.9 (5,380)
                  </div>
                  <div className="flex items-center">
                    <CiMedicalCase className="text-primary text-small" />
                    &nbsp;4+ Years
                  </div>
                </div>
                <h2 className="">
                  $199
                  <span className="font-small text-secondary ml-1">
                    Inc.VAT
                  </span>
                </h2>
              </div>
              <div className="w-full rounded-b-[10px] bg-[#0147ff] text-white h-[42px] px-3 flex items-center justify-between">
                <h5 className="text-small font-bold">SEE DOCTOR NOW</h5>
                <BiVideo className="text-[18px] stroke-white" />
              </div>
            </article>
            <article className="flex-col rounded-[10px] bg-white">
              <div className="relative">
                <Image
                  src={AvailableDoctor3}
                  width={0}
                  height={90}
                  alt="service-doctor"
                  className="min-w-full rounded-t-[10px] relative "
                />
                <div className="min-w-fit w-[48px] absolute left-2 px-[6px] py-[3px] bg-success text-white  justify-center items-center text-[9.75px] top-2 h-auto rounded-[40px] hidden">
                  ONLINE
                </div>
              </div>
              <div className="p-3 flex flex-col gap-1">
                <div className="">
                  <h3 className="overflow-hidden overflow-ellipsis line-clamp-1 w-full text-[14px] font-semibold ">
                    Dr. Taylor Samaro
                  </h3>
                  <p className="text-small text-secondary">MBBS, BCS</p>
                </div>
                <div className="flex w-full items-center mb-3 justify-between gap-2 flex-wrap text-small">
                  <div className="flex items-center">
                    <BsStarFill className="text-warning text-small" />
                    &nbsp;4.9 (5,380)
                  </div>
                  <div className="flex items-center">
                    <CiMedicalCase className="text-primary text-small" />
                    &nbsp;4+ Years
                  </div>
                </div>
                <h2 className="">
                  $199
                  <span className="font-small text-secondary ml-1">
                    Inc.VAT
                  </span>
                </h2>
              </div>
              <div className="w-full rounded-b-[10px] bg-[#0147ff] text-white h-[42px] px-3 flex items-center justify-between">
                <h5 className="text-small font-bold">SEE DOCTOR NOW</h5>
                <BiVideo className="text-[18px] stroke-white" />
              </div>
            </article>
            <article className="flex-col rounded-[10px] bg-white">
              <div className="relative">
                <Image
                  src={AvailableDoctor4}
                  width={0}
                  height={90}
                  alt="service-doctor"
                  className="min-w-full rounded-t-[10px] relative "
                />
                <div className="min-w-fit w-[48px] absolute left-2 px-[6px] py-[3px] bg-success text-white flex justify-center items-center text-[9.75px] top-2 h-auto rounded-[40px]">
                  ONLINE
                </div>
              </div>
              <div className="p-3 flex flex-col gap-1">
                <div className="">
                  <h3 className="overflow-hidden overflow-ellipsis line-clamp-1 w-full text-[14px] font-semibold ">
                    Dr. Taylor Samaro
                  </h3>
                  <p className="text-small text-secondary">MBBS, BCS</p>
                </div>
                <div className="flex w-full items-center mb-3 justify-between gap-2 flex-wrap text-small">
                  <div className="flex items-center">
                    <BsStarFill className="text-warning text-small" />
                    &nbsp;4.9 (5,380)
                  </div>
                  <div className="flex items-center">
                    <CiMedicalCase className="text-primary text-small" />
                    &nbsp;4+ Years
                  </div>
                </div>
                <h2 className="">
                  $199
                  <span className="font-small text-secondary ml-1">
                    Inc.VAT
                  </span>
                </h2>
              </div>
              <div className="w-full rounded-b-[10px] bg-[#0147ff] text-white h-[42px] px-3 flex items-center justify-between">
                <h5 className="text-small font-bold">SEE DOCTOR NOW</h5>
                <BiVideo className="text-[18px] stroke-white" />
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
