import Header from "@/src/components/profilePage/Header";
import React from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { BsCalendar3 } from "react-icons/bs";
import { AiOutlineDashboard } from "react-icons/ai";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";
import { RiFolderUploadLine } from "react-icons/ri";

const VisitInfo = () => {
  return (
    <div className="bg-light min-h-[100vh]">
      <Header text="Visit Info" />
      <form action="">
        <main className="pt-8 px-[4%] flex flex-col gap-4 pb-[100px]">
          <div className="w-full flex flex-col">
            <h3 className="leading-[1.2] font-medium mb-2 text-[13px]">
              Patient Name
            </h3>
            <div className="w-full flex items-center rounded-[10px] border border-bs bg-white h-[46px] px-3 gap-3">
              <BiSolidUserCircle className="w-6 h-6" />
              <input
                type="text"
                className="w-full bg-white h-[36px] border-0 text-[13px] text-dark focus-visible:outline-0 focus:outline-0 focus:ring-0"
                name=""
                placeholder="Osahan Singh"
                id=""
              />
            </div>
          </div>

          <article className="grid grid-cols-2 gap-4">
            <div className="w-full flex flex-col">
              <h3 className="leading-[1.2] font-medium mb-2 text-[13px]">
                Age (Years)
              </h3>
              <div className="w-full flex items-center rounded-[10px] border border-bs bg-white h-[46px] px-3 gap-3">
                <BsCalendar3 className="w-6 h-6" />
                <input
                  type="number"
                  inputMode="numeric"
                  className="w-full bg-white h-[36px] border-0 text-[13px] text-dark focus-visible:outline-0 focus:outline-0 focus:ring-0"
                  name=""
                  placeholder="22"
                  id=""
                />
              </div>
            </div>
            <div className="w-full flex flex-col">
              <h3 className="leading-[1.2] font-medium mb-2 text-[13px]">
                Weight (KG)
              </h3>
              <div className="w-full flex items-center rounded-[10px] border border-bs bg-white h-[46px] px-3 gap-3">
                <AiOutlineDashboard className="w-6 h-6" />
                <input
                  inputMode="numeric"
                  type="number"
                  className="w-full bg-white h-[36px] border-0 text-[13px] text-dark focus-visible:outline-0 focus:outline-0 focus:ring-0"
                  name=""
                  placeholder="50"
                  id=""
                />
              </div>
            </div>
          </article>

          <div className="w-full flex flex-col">
            <h3 className="leading-[1.2] font-medium mb-2 text-[13px]">
              Briefly describe the problem
            </h3>

            <textarea
              className="w-full flex items-center text-[13px] rounded-[10px] border border-bs bg-white h-[100px] resize px-3 gap-3 focus-visible:outline-0   focus:border-bs focus:ring-transparent focus:outline-0 focus:ring-0"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Hello, My name..."
            ></textarea>
          </div>

          <div className="mt-6 w-full flex relative flex-col border border-dotted border-primary rounded-[10px] overflow-hidden p-4">
            <p className="mb-2 text-primary text-sm font-bold">
              Attach reports & <br /> previous prescriptions
            </p>
            <span className="text-small text-secondary">
              JPG, PNG, PDF (Max No. of attachments: 10)
            </span>

            <RiFolderUploadLine className="absolute text-white text-[1.7rem] right-[0.5cm] top-[0.5cm] z-20 cursor-pointer" />
            <div className="w-[4cm] h-[4cm] rounded-full bg-primary absolute right-[-2cm] top-[-2cm] cursor-pointer"></div>
          </div>
        </main>

        <section className="bg-light w-full p-4 fixed bottom-0 flex justify-center items-center">
          <Link href="/dashboard/payment-info" className="w-full">
            <button className="flex justify-center items-center bg-light-primary text-white text-[16px] w-full h-[56px] px-5 py-4 font-bold gap-2 rounded-[10px] capitalize">
              <span>Proceed to payment info</span>
              <HiOutlineArrowRight className="w-5 h-5 text-white" />
            </button>
          </Link>
        </section>
      </form>
    </div>
  );
};

export default VisitInfo;
