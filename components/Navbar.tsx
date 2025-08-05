import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <nav className="mt-[35px] ml-[121.5px] mr-[159.5px] mb-[100]">
      <ul className="list-none flex justify-between">
        <li>
          <Link href="/" className="flex items-center">
            <Image
              src="/images/Logo.svg"
              alt="logo"
              width={268}
              height={93}
            ></Image>
          </Link>
        </li>
        <li>
          <ul
            id="nav"
            className="list-none flex gap-[50px] p-[28px_50px] bg-linear-180 from-[#ffffff10] to-[#ffffff00] backdrop-blur-xl"
          >
            <li>
              <Link href="explore" className="text-white text-nav font-oxanium">
                EXPLORE
              </Link>
            </li>
            <li>
              <Link href="trending" className="text-white text-nav font-oxanium">
                TREDNING NFTs
              </Link>
            </li>
            <li>
              <Link href="auctioned" className="text-white text-nav font-oxanium">
                AUCTIONED NFTs
              </Link>
            </li>
            <li>
              <Link href="influencers" className="text-white text-nav font-oxanium">
                INFLUENCERS
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <ul className="h-full list-none flex items-center gap-[30px]">
            <li>
              <Link href="connect_wallet">
                <Image
                  src="/images/connect_wallet_btn.svg"
                  alt="Connect Wallet button"
                  width={188}
                  height={43}
                ></Image>
              </Link>
            </li>
            <li>
              <Link href="profile">
                <Image
                  src="/images/user_profile.png"
                  alt="User Profile"
                  width={40}
                  height={40}
                ></Image>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
