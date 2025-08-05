import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NFTItem, NFTInfluencer } from "@/app/page";

export default function NFTList({
  title,
  subtitle,
  items,
  isInfluencers,
}: {
  title: string;
  subtitle: string;
  items: NFTItem[] | NFTInfluencer[];
  isInfluencers: boolean;
}) {
  return (
    <div className={`relative m-[0_39px] mb-[${isInfluencers ? 0 : "300px"}]`}>
      {/* Блюр Эффект */}
      <div className="absolute w-[200px] h-[200px] blur-[200px] left-[-50px] bg-purple"></div>
      <div className="relative mb-[80px]">
        <div>
          <h4 className="text-paragraph font-paragraph font-light mb-[47px]">
            {subtitle}
          </h4>
          <h1 className="text-title font-title">{title}</h1>
        </div>
        <Link
          href=""
          className="w-[172px] h-[43px] absolute bottom-0 right-0 bg-[url('/images/view_all_btn.png')] flex items-center justify-center"
        >
          <span className="text-[18px] font-title font-medium">View All</span>
        </Link>
      </div>
      <ul className="list-none flex flex-wrap items-center justify-center gap-[20px]">
        {isInfluencers
          ? (items as NFTInfluencer[]).map((item: NFTInfluencer, ind) => {
              return (
                <li
                  key={ind}
                  className="w-[387px] h-[392px] p-[32px_25px] bg-linear-150 from-[#ffffff10] to-[#ffffff05] backdrop-blur-xs rounded-[15px]"
                >
                  <div className="w-full mb-[84.5px]">
                    <div className="flex gap-4 flex-wrap">
                      <div className="relative">
                        <Image
                          src={item.nft_left_path}
                          alt={`NFT of ${item.user_name}`}
                          width={184}
                          height={190}
                          className="w-[184px] h-[190px]"
                        ></Image>{" "}
                        <Image
                          src={item.user_avatar_path}
                          alt={`Avatar of ${item.user_name}`}
                          width={105}
                          height={105}
                          className="absolute left-[29px] bottom-[-53px] object-none"
                        ></Image>
                      </div>
                      <Image
                        src={item.nft_right_path}
                        alt={`NFT of ${item.user_name}`}
                        width={137}
                        height={190}
                        className="w-[137px] h-[190px]"
                      ></Image>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 items-center">
                    <div>
                      <div className=" font-paragraph text-[20px]">
                        {item.user_name}
                        <Image
                          src="/images/verification.svg"
                          alt="Verification Icon"
                          width={22}
                          height={22}
                          className="inline-block"
                        ></Image>
                      </div>
                      <div className="font-light font-paragraph text-[16px]">
                        @{item.user_tag}
                      </div>
                    </div>
                    <button className="font-paragraph text-[14px] p-[15px_42px] border-1 border-[#F81DFB] bg-[#F81DFB05] rounded-[42px] hover:cursor-pointer">
                      Follow
                    </button>
                  </div>
                </li>
              );
            })
          : (items as NFTItem[]).map((item: NFTItem, ind) => {
              return (
                <li
                  key={ind}
                  className="w-[394px] h-[543px] p-[10px_12px] bg-linear-150 from-[#ffffff10] to-[#ffffff05] backdrop-blur-xs rounded-[15px]"
                >
                  <div className="relative w-[370px] h-[261px]">
                    <Image
                      src={item.nft_path}
                      alt={item.nft_name}
                      width={370}
                      height={261}
                    ></Image>
                    <div className="flex items-center gap-[9px] w-[95px] h-[50px] absolute top-0 right-0 p-[15px_20px] rounded-[0_15px_0_15px] bg-linear-150 from-[#ffffff10] to-[#ffffff05] backdrop-blur-xs">
                      <Image
                        src="/images/like.png"
                        alt="Heart Image"
                        width={18}
                        height={15}
                      ></Image>
                      <span className="font-title text-[16px]">
                        {item.likes}
                      </span>
                    </div>
                  </div>
                  <div className="ml-[22px] mt-[31px]">
                    <Image
                      src="/images/user_profile.png"
                      alt="User Profile Avatar"
                      width={40}
                      height={40}
                      className="float-left"
                    ></Image>
                    <div className="flex flex-col">
                      <h4>{item.nft_name}</h4>
                      <h5>By {item.creator}</h5>
                    </div>
                  </div>
                  <div className="mt-[45px] grid grid-cols-2  ml-[16px] mr-[18px] mb-[30px]">
                    {item.isOnSale && (
                      <span className="font-title text-[16px] flex gap-2">
                        On Sale{" "}
                        <span>
                          <Image
                            src="/images/fire.png"
                            alt="Fire"
                            width={20}
                            height={20}
                          ></Image>
                        </span>
                      </span>
                    )}
                    <div className="text-right">
                      <span className="font-title text-[20px]">
                        <Image
                          src="/images/ethereum.svg"
                          alt="Ethereum"
                          width={20}
                          height={20}
                          className="inline-block"
                        ></Image>
                        {item.priceInETH} ETH
                      </span>
                      <div className="font-title text-[14px]">
                        {item.priceInUSD}
                      </div>
                    </div>
                  </div>
                  <button className="ml-[16px] hover:cursor-pointer">
                    <Image
                      src="/images/buy_now.png"
                      alt="Buy Now Button"
                      width={338}
                      height={60}
                    ></Image>
                  </button>
                </li>
              );
            })}
      </ul>
    </div>
  );
}
