import Header from "@/src/components/profilePage/Header";
import React from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { BsArrowBarRight, BsArrowRight, BsCalendar3 } from "react-icons/bs";
import { AiOutlineDashboard } from "react-icons/ai";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";
import { RiFolderUploadLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const PaymentInfo = () => {
  return (
    <div className="bg-light min-h-[100vh]">
      <Header text="Overview" />
      <form action="">
        <main className="pt-8 px-[4%] flex flex-col gap-4 pb-[100px]">
          <div className="w-full flex flex-col">
            <h3 className="leading-[1.2] font-medium mb-2 text-[13px]">
              Patient info:
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

          <div className="w-full flex  rounded-[10px] flex-col border border-bs bg-white p-4 gap-4">
            <h3 className="leading-[1.2] font-medium mb-2 text-[13px]">
              Patient details
            </h3>

            <div className="w-full pb-4 border-b border-b-slate-300">
              <div className="flex mb-2 w-full justify-between items-center text-sm text-secondary">
                <span>Consultation Fee</span>
                <span>$94.29</span>
              </div>
              <div className="flex w-full justify-between items-center text-sm text-secondary">
                <span>VAT (5%)</span>
                <span>$4.29</span>
              </div>
            </div>

            <div className="flex w-full justify-between items-center text-sm ">
              <span>Total Payable</span>
              <span className="font-bold ">$99</span>
            </div>
          </div>

          <div className="w-full flex  rounded-[10px] justify-between items-center h-[56px] border border-bs bg-white p-4 gap-4">
            <h3 className=" text-[13px]">Do you have promo code?</h3>
            <MdOutlineKeyboardArrowRight />
          </div>

          <div className="w-full flex  rounded-[10px] flex-col border border-bs bg-white p-4 gap-4">
            <div>
              <h3 className="leading-[1.2] font-medium mb-2 text-[13px]">
                How would you like to pay?
              </h3>
              <span className="text-sm text-secondary">
                To make a payment,tap your desired payment method
              </span>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <input
                  checked
                  type="radio"
                  name=""
                  id=""
                  className=" accent-primary"
                />
                <label>VISA</label>
              </div>
              <div className="flex items-center gap-3">
                <input type="radio" name="" id="" className=" accent-primary" />
                <label>Mastercard</label>
              </div>
            </div>
          </div>

          <div className="flex mt-4 w-full justify-between items-center text-sm ">
            <span className="">
              Total Payable&nbsp;
              <span className="text-secondary">(Include Vat)</span>
            </span>
            <span className="font-bold">$99.29</span>
          </div>
        </main>

        <section className="bg-light w-full p-4 fixed bottom-0 flex justify-center items-center">
          <Link href="/dashboard/visit-info" className="w-full">
            <button className="flex justify-center items-center bg-light-primary text-white text-[16px] w-full h-[56px] px-5 py-4 font-bold gap-2 rounded-[10px] capitalize">
              <span>Pay With VISA</span>
              <HiOutlineArrowRight className="w-5 h-5 text-white" />
            </button>
          </Link>
        </section>
      </form>
    </div>
  );
};

export default PaymentInfo;
