import Link from "next/link";
import React from "react";
import { AiOutlineArrowLeft, AiOutlineAudio } from "react-icons/ai";
import { LiaBarsSolid } from "react-icons/lia";
import { IoVideocamOutline } from "react-icons/io";
import { BsPaperclip, BsSend, BsTelephone } from "react-icons/bs";
import ProfileImg from "@/public/Images/profilepic1.jpg";
import Image from "next/image";
import Header from "@/src/components/chats/header";

const Conversation = () => {
  return (
    <div className="bg-gray-100 h-[100vh]">
      <Header />
      <div className="w-full px-4 flex flex-col gap-4 overflow-auto vertical-scrollbar pb-5">
        <p className="text-center text-dark text-[13px]">Yesterday</p>
        <div>
          <div className="w-[90%] self-start flex items-end gap-2 ">
            <Image
              width={0}
              height={0}
              src={ProfileImg}
              alt="profile"
              sizes="100vw"
              className="rounded-[50%] min-w-[38px] min-h-[38px] w-[38px] h-[38px] object-cover"
            />
            <div className="relative bg-white shadow-small text-dark rounded-[20px] text-[13px] flex justify-center items-center py-[10px] px-4">
              <p>Good afternoon, Doctor.</p>
            </div>
          </div>
          <p className="text-secondary pl-16 text-small mt-1">05:55pm</p>
        </div>

        <div>
          <div className="w-full self-end flex-row-reverse flex items-end gap-2 ">
            <Image
              width={0}
              height={0}
              src={ProfileImg}
              alt="profile"
              sizes="100vw"
              className="rounded-[50%] min-w-[38px] min-h-[38px] w-[38px] h-[38px] object-cover"
            />
            <div className="relative bg-light-primary shadow-small text-white rounded-[20px] text-[13px] flex justify-center items-center py-[10px] px-4">
              <p>Good afternoon, Doctor.</p>
            </div>
          </div>
          <p className="text-secondary mt-1 text-right pr-16 text-small">
            05:55pm
          </p>
        </div>
        <div>
          <div className="w-full self-end flex-row-reverse flex items-end gap-2 ">
            <Image
              width={0}
              height={0}
              src={ProfileImg}
              alt="profile"
              sizes="100vw"
              className="rounded-[50%] min-w-[38px] min-h-[38px] w-[38px] h-[38px] object-cover"
            />
            <div className="relative bg-light-primary shadow-small text-white rounded-[20px] text-[13px] flex justify-center items-center py-[10px] px-4">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
                commodi aut, quibusdam, tenetur dolor rem illo asperiores
                incidunt odio vel, dicta fugit. Aliquid ipsum enim nulla velit.
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
            </div>
          </div>
          <p className="text-secondary mt-1 text-right pr-16 text-small">
            05:55pm
          </p>
        </div>
      </div>

      <section className="fixed bottom-0 h-[56px] justify-between w-full flex px-4 bg-white">
        <input
          type="text"
          name=""
          id=""
          className="w-[70%] h-full border-0 outline-0 focus-visible:outline-none focus:ring-0 focus:outline-none focus-visible:ring-none"
        />
        <div className="flex items-center gap-1 justify-end">
          <div className="min-w-[35px] min-h-[35px] flex justify-center cursor-pointer items-center bg-lighter-primary-opacity rounded-[50%]">
            <BsPaperclip className="text-dark w-4 h-4" />
          </div>
          <div className="min-w-[35px] min-h-[35px] flex justify-center cursor-pointer items-center bg-lighter-primary-opacity rounded-[50%]">
            {" "}
            <AiOutlineAudio className="text-dark w-4 h-4" />
          </div>
          <div className="min-w-[35px] min-h-[35px] flex justify-center cursor-pointer items-center bg-primary rounded-[50%]">
            <BsSend className="text-white w-4 h-4" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Conversation;
