import Image from "next/image";
import React from "react";

export default function Subscribe() {
  return (
    <div className="w-full h-[620px] flex flex-col items-center justify-center relative">
      <Image
        src="/images/subscribe_bg.png"
        alt="Background Image"
        width={1920}
        height={620}
        className="opacity-[60%] absolute"
      ></Image>
      <h4 className="text-[80px] font-title mb-[45px]">
        Ready for Next NFT Drop?
      </h4>
      <div className="w-[680px] h-[96px] relative">
        <input
          type="email"
          className="border-1 border-purple w-full h-full rounded-[20px] p-[29.5px_53px] placeholder:text-paragraph placeholder:font-paragraph "
          placeholder="info@gmail.com"
        />
        <button className="w-[90px] h-[82.5px] bg-purple absolute right-[10px] top-[7px] rounded-[15px] hover:cursor-pointer">
          <span className="relative">
            <Image
              src="/images/arrow_btn.png"
              alt="Submit Button"
              width={50}
              height={12.5}
              className="w-full h-full z-10  object-none"
            ></Image>
            {/* Блюр Эффект */}
            <div className="absolute w-[90px] h-[82.5px] blur-[100px] top-[50%] left-[50%] translate-[-50%] bg-purple"></div>
          </span>
        </button>
      </div>
    </div>
  );
}
