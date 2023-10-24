import Header from "@/src/components/profilePage/Header";
import Link from "next/link";
import React from "react";
import { BsPlusLg, BsSearch } from "react-icons/bs";
import { PiFunnel } from "react-icons/pi";
import ProfileImg from "@/public/Images/profilepic1.jpg";
import Image from "next/image";

const Profile = () => {
  return (
    <div className="bg-gray-100 h-[100vh]">
      <Header text="Message" />
      <div className="px-4 pb-4 pt-4 shadow-small bg-white">
        <div className="w-full bg-light h-[1.2cm] mt-[1rem]  rounded-[10px] flex flex-row px-4 py-1 mb-4 items-center shadow-normal">
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
        <article className="flex flex-nowrap items-center w-full text-small gap-4   overflow-auto invisible-scrollbar ">
          <div className="flex flex-col gap-2 items-center">
            <div className="bg-light-primary min-w-[40px] w-10 h-10 min-h-[40px] rounded-[50%] flex justify-center items-center ">
              <BsPlusLg className="w-6 h-6 text-white" />
            </div>
            <p>Add</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Image
              width={0}
              height={0}
              src={ProfileImg}
              alt="profile"
              sizes="100vw"
              className="rounded-[50%] min-w-[40px] min-h-[40px] w-10 h-10 object-cover"
            />

            <p>David</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Image
              width={0}
              height={0}
              src={ProfileImg}
              alt="profile"
              sizes="100vw"
              className="rounded-[50%] object-cover min-w-[40px] min-h-[40px] w-10 h-10"
            />
            <p>David</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Image
              width={0}
              height={0}
              src={ProfileImg}
              alt="profile"
              sizes="100vw"
              className="rounded-[50%] object-cover min-w-[40px] min-h-[40px] w-10 h-10"
            />
            <p>David</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Image
              width={0}
              height={0}
              src={ProfileImg}
              alt="profile"
              sizes="100vw"
              className="rounded-[50%] object-cover min-w-[40px] min-h-[40px] w-10 h-10"
            />
            <p>David</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Image
              width={0}
              height={0}
              src={ProfileImg}
              alt="profile"
              sizes="100vw"
              className="rounded-[50%] object-cover min-w-[40px] min-h-[40px] w-10 h-10"
            />
            <p>David</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Image
              width={0}
              height={0}
              src={ProfileImg}
              alt="profile"
              sizes="100vw"
              className="rounded-[50%] object-cover min-w-[40px] min-h-[40px] w-10 h-10"
            />
            <p>David</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Image
              width={0}
              height={0}
              src={ProfileImg}
              alt="profile"
              sizes="100vw"
              className="rounded-[50%] object-cover min-w-[40px] min-h-[40px] w-10 h-10"
            />
            <p>David</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Image
              width={0}
              height={0}
              src={ProfileImg}
              alt="profile"
              sizes="100vw"
              className="rounded-[50%] object-cover min-w-[40px] min-h-[40px] w-10 h-10"
            />
            <p>David</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Image
              width={0}
              height={0}
              src={ProfileImg}
              alt="profile"
              sizes="100vw"
              className="rounded-[50%] object-cover min-w-[40px] min-h-[40px] w-10 h-10"
            />
            <p>David</p>
          </div>
        </article>
      </div>

      {/* chat cards */}
      <section className="w-full mt-2 p-4">
        <div className="">
          <div className="w-full shadow-normal bg-white rounded-[10px] h-[360px]  overflow-auto vertical-scrollbar">
            <Link href="/conversation">
              <div className="w-full p-4 border-b border-b-[#eee] flex h-[72px]  items-center gap-4">
                <Image
                  width={0}
                  height={0}
                  src={ProfileImg}
                  alt="profile"
                  sizes="100vw"
                  className="rounded-[50%] min-w-[40px] min-h-[40px] w-10 h-10 object-cover"
                />
                <div className="flex flex-col gap-1">
                  <h2 className="text-[14px]">Dr. Cayden Stack</h2>
                  <p className="text-secondary line-clamp-2 text-small">
                    I am cardio patient. I need your help
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/conversation">
              <div className="w-full p-4 border-b border-b-[#eee] flex h-[72px]  items-center gap-4">
                <Image
                  width={0}
                  height={0}
                  src={ProfileImg}
                  alt="profile"
                  sizes="100vw"
                  className="rounded-[50%] min-w-[40px] min-h-[40px] w-10 h-10 object-cover"
                />
                <div className="flex flex-col gap-1">
                  <h2 className="text-[14px]">Dr. Cayden Stack</h2>
                  <p className="text-secondary line-clamp-2 text-small">
                    I am cardio patient. I need your help
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/conversation">
              <div className="w-full p-4 border-b border-b-[#eee] flex h-[72px]  items-center gap-4">
                <Image
                  width={0}
                  height={0}
                  src={ProfileImg}
                  alt="profile"
                  sizes="100vw"
                  className="rounded-[50%] min-w-[40px] min-h-[40px] w-10 h-10 object-cover"
                />
                <div className="flex flex-col gap-1">
                  <h2 className="text-[14px]">Dr. Cayden Stack</h2>
                  <p className="text-secondary line-clamp-2 text-small">
                    I am cardio patient. I need your help
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/conversation">
              <div className="w-full p-4 border-b border-b-[#eee] flex h-[72px]  items-center gap-4">
                <Image
                  width={0}
                  height={0}
                  src={ProfileImg}
                  alt="profile"
                  sizes="100vw"
                  className="rounded-[50%] min-w-[40px] min-h-[40px] w-10 h-10 object-cover"
                />
                <div className="flex flex-col gap-1">
                  <h2 className="text-[14px]">Dr. Cayden Stack</h2>
                  <p className="text-secondary line-clamp-2 text-small">
                    I am cardio patient. I need your help
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/conversation">
              <div className="w-full p-4 border-b border-b-[#eee] flex h-[72px]  items-center gap-4">
                <Image
                  width={0}
                  height={0}
                  src={ProfileImg}
                  alt="profile"
                  sizes="100vw"
                  className="rounded-[50%] min-w-[40px] min-h-[40px] w-10 h-10 object-cover"
                />
                <div className="flex flex-col gap-1">
                  <h2 className="text-[14px]">Dr. Cayden Stack</h2>
                  <p className="text-secondary line-clamp-2 text-small">
                    I am cardio patient. I need your help
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
