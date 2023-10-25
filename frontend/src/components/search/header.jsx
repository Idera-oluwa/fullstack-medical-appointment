"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { LiaBarsSolid } from "react-icons/lia";

const Header = () => {
  const router = useRouter();
  return (
    <div className="flex flex-row h-[4.5rem] px-[0.5cm] items-center shadow-small bg-white sticky w-full top-0">
      <div className="flex flex-row items-center gap-[1rem]">
        <Link href="/">
          {" "}
          <div
            className="outline outline-1 outline-gray-200 w-[35px] h-[35px] rounded-full flex items-center justify-center cursor-pointer"
            onClick={() => router.back()}
          >
            <AiOutlineArrowLeft className="text-dark cursor-pointer" />
          </div>
        </Link>
      </div>
      <div className="ml-auto">
        <div className="outline outline-1 outline-gray-200 w-[35px] h-[35px] rounded-full flex items-center justify-center">
          <LiaBarsSolid className="text-dark cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Header;