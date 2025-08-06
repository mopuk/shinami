import Image from "next/image";
import React from "react";

export default function UserInfo() {
  return (
    <div className="mb-[100px]">
      <div className="w-[1920px] h-[360px] flex items-center justify-center p-[24px_165px] mb-[300px] bg-[url('/images/mountain_header_image.png')] relative">
        <div className="absolute bottom-[-40%] flex flex-col items-center">
          <Image
            src="/images/user_profile.svg"
            alt="User Profile Avatar"
            width={150}
            height={150}
            className="mb-[48px]"
          ></Image>
          <div className="text-paragraph font-paragraph">
            Update Your Profile
          </div>
        </div>
        <div className="flex justify-between items-center w-full mt-auto">
          <div className="text-[18px] font-paragraph">
            431 Followers | 13 Following
          </div>
          <div className="w-[68px] h-[68px] flex items-center justify-center rounded-full bg-linear-150 from-[#ffffff10] to-[#ffffff05] backdrop-blur-xs">
            <Image
              src="/images/camera.svg"
              alt="Camera Icon"
              width={30}
              height={22}
            ></Image>
          </div>
        </div>
      </div>
      <div className="m-[0_165px]">
        <h1 className="mb-[60px] text-[30px] font-paragraph font-light">
          User Profile Information
        </h1>
        <div className="w-full p-[0_64px]">
          <div className="w-full h-[1px] bg-[#A7A7A740]"></div>
        </div>
      </div>
    </div>
  );
}
