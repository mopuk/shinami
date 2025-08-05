import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="w-[728px] h-[313px] m-[0_121.5px]">
          <h1 className="font-subtitle text-subtitle font-semibold">
            EXPLORE, CREATE AND SELL YOUR NFT’S ON SHIHAMI
          </h1>
          <h4 className="font-paragraph text-paragraph font-light mt-[40px] mb-[120px]">
            Shihami is the World’s first and largest NFT/Avatar marketplace
          </h4>
          {/* Кнопки */}
          <div className="flex gap-[40px]">
            <button className="hover:cursor-pointer">
              <Image
                src="/images/explore_more_btn.svg"
                alt="Explore More Button"
                width={260}
                height={70}
              ></Image>
            </button>
            <button className="hover:cursor-pointer">
              <Image
                src="/images/create_btn.svg"
                alt="Create Button"
                width={224}
                height={70}
              ></Image>
            </button>
          </div>
        </div>
        {/* NFT карточки */}
        <div className="w-[709px] h-[543px] relative">
          <div className="absolute flex flex-col items-center top-0 right-[222px] z-10 p-[20px_16px] rounded-[41px] border-t-[2.5px] border-b-[2.5px] border-[#ffffff40] bg-linear-120 from-[#ffffff10] to-[#ffffff05] backdrop-blur-xs">
            <Image
              src="/images/nft1.png"
              alt="NFT Living Of The Art"
              width={287.5}
              height={280}
            ></Image>
            <span>Living Of The Art</span>
            <span>$ 543,576.13</span>
          </div>
          <div className="absolute flex flex-col items-center top-[82px] bottom-[64px] right-[388px] p-[20px_16px] rounded-[41px] border-t-[2.5px] border-b-[2.5px] border-[#ffffff40] bg-linear-120 from-[#ffffff10] to-[#ffffff05] backdrop-blur-xs">
            <Image
              src="/images/nft2.png"
              alt="NFT Bleeding Ghost"
              width={287.5}
              height={280}
            ></Image>
            <span>Bleeding Ghost</span>
            <span>$ 152,793.17</span>
          </div>
          <div className="absolute flex flex-col items-center right-0 top-[146] p-[20px_16px] rounded-[41px] border-t-[2.5px] border-b-[2.5px] border-[#ffffff40] bg-linear-120 from-[#ffffff10] to-[#ffffff05] backdrop-blur-xs">
            <Image
              src="/images/nft3.png"
              alt="NFT Statue Of Vughae"
              width={287.5}
              height={280}
            ></Image>
            <span>Statue Of Vughae</span>
            <span>$ 452,968.48</span>
          </div>
        </div>
      </div>
    </div>
  );
}
