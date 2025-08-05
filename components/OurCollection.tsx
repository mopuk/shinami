import Image from "next/image";
import React from "react";

export default function OurCollection() {
  return (
    <div className="flex flex-col items-center mb-[300px]">
      <h4 className="font-paragraph text-paragraph bg-clip-text text-transparent bg-linear-to-r from-white to-purple">
        Explore our newly released NFT collection{" "}
      </h4>
      <h1 className="font-title text-title">Our collection</h1>
      <ul className="list-none flex justify-center items-center space-x-0">
        <li className="w-[225px] h-[300px] z-7 translate-x-[370px] duration-200 hover:scale-105">
          <Image
            src="/images/nft_col1.png"
            alt="NFT From Our Collection #1"
            width={408}
            height={544}
            className="w-full h-full"
          ></Image>
        </li>
        <li className="w-[285px] h-[380px] z-8 translate-x-[250px] duration-200 hover:scale-105">
          <Image
            src="/images/nft_col2.png"
            alt="NFT From Our Collection #1"
            width={408}
            height={544}
            className="w-full h-full"
          ></Image>
        </li>
        <li className="w-[348px] h-[464px] z-9 translate-x-[130px] transition-all duration-200 hover:scale-105">
          <Image
            src="/images/nft_col3.png"
            alt="NFT From Our Collection #1"
            width={408}
            height={544}
            className="w-full h-full"
          ></Image>
        </li>
        <li className="w-[408px] h-[544px] z-10 transition-all duration-200 hover:scale-105">
          <Image
            src="/images/nft_col4.png"
            alt="NFT From Our Collection #1"
            width={408}
            height={544}
            className="w-full h-full"
          ></Image>
        </li>
        <li className="w-[348px] h-[464px] z-9 translate-x-[-130px] transition-all duration-200 hover:scale-105">
          <Image
            src="/images/nft_col5.png"
            alt="NFT From Our Collection #1"
            width={408}
            height={544}
            className="w-full h-full"
          ></Image>
        </li>
        <li className="w-[285px] h-[380px] z-8 translate-x-[-250px] transition-all duration-200 hover:scale-105">
          <Image
            src="/images/nft_col6.png"
            alt="NFT From Our Collection #1"
            width={408}
            height={544}
            className="w-full h-full"
          ></Image>
        </li>
        <li className="w-[225px] h-[300px] z-7 translate-x-[-370px] transition-all duration-200 hover:scale-105">
          <Image
            src="/images/nft_col7.png"
            alt="NFT From Our Collection #1"
            width={408}
            height={544}
            className="w-full h-full"
          ></Image>
        </li>
      </ul>
    </div>
  );
}
