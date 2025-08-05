import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="w-[1920px] h-[511px] grid grid-cols-4 gap-[140px] p-[118px_260px] bg-linear-150 from-[#ffffff10] to-[#ffffff05] backdrop-blur-xl">
      <Image src="/images/Logo.svg" alt="Logo" width={268} height={63}></Image>
      <div>
        <div className="font-paragraph text-[20px] text-[#96839B] mb-[60px]">
          Shihami is the world’s leading NFTs marketplace where you can
          discover, sell and bid NFTs and get rich
        </div>
        <ul className="list-none flex gap-[37px] items-center mb-[62px]">
          <li>
            <Image
              src="/images/youtube.png"
              alt="Youtube Link"
              width={28}
              height={27}
            ></Image>
          </li>
          <li>
            <Image
              src="/images/twitter.png"
              alt="Twitter Link"
              width={28}
              height={27}
            ></Image>
          </li>
          <li>
            <Image
              src="/images/facebook.png"
              alt="Facebook Link"
              width={14}
              height={27}
            ></Image>
          </li>
          <li>
            <Image
              src="/images/google.png"
              alt="Google Link"
              width={28}
              height={27}
            ></Image>
          </li>
        </ul>
        <div className="font-paragraph text-[20px] text-[#96839B] ">
          All rights reserved @Faizansayani
        </div>
      </div>
      <div>
        <div className="text-paragraph font-title text-[#F5FBF2] mb-[18px]">About</div>
        <ul className="list-none flex flex-col gap-[2px]">
          <li className="text-[20px] font-paragraph text-[#968398] h-[50px]">
            About NFT
          </li>
          <li className="text-[20px] font-paragraph text-[#968398] h-[50px]">
            Live Auctions
          </li>
          <li className="text-[20px] font-paragraph text-[#968398] h-[50px]">
            NFT Blog
          </li>
          <li className="text-[20px] font-paragraph text-[#968398] h-[50px]">
            Activity
          </li>
        </ul>
      </div>
      <div>
        <div className="text-paragraph font-title text-[#F5FBF2] mb-[18px]">
          Support
        </div>
        <ul className="list-none flex flex-col gap-[2px]">
          <li className="text-[20px] font-paragraph text-[#968398] h-[50px]">
            Help & Support
          </li>
          <li className="text-[20px] font-paragraph text-[#968398] h-[50px]">
            Item Details
          </li>
          <li className="text-[20px] font-paragraph text-[#968398] h-[50px]">
            Author Profile
          </li>
          <li className="text-[20px] font-paragraph text-[#968398] h-[50px]">
            Collection
          </li>
        </ul>
      </div>
    </div>
  );
}
