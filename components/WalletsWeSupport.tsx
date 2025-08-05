import Image from "next/image";
import React from "react";

const wallets = ["Metamask", "Binance", "Trust Wallet", "Alpha", "CoinGecko"];
export default function WalletsWeSupport() {
  return (
    <div className="flex flex-col items-center mt-[174.5px] mb-[250px]">
      <h4 className="font-paragraph text-paragraph bg-clip-text text-transparent bg-linear-to-r from-white to-purple">
        Trade with world’s most trusted and fastest wallets
      </h4>
      <h1 className="font-title text-title font-medium mb-[65px]">
        Wallets We Support
      </h1>
      {/* Кошельки */}
      <ul className="list-none flex gap-[60px] ">
        {wallets.map((wallet: string, ind: number) => {
          return (
            <li
              key={ind}
              className="flex flex-col items-center gap-[35px] bg-linear-150 from-[#ffffff10] to-[#ffffff05] backdrop-blur-xs p-[35px] rounded-[15px]"
            >
              <div className="p-[45px] rounded-full bg-linear-150 from-[#ffffff10] to-[#ffffff05] backdrop-blur-xs">
                <Image
                  src={`/images/${wallet.toLowerCase().replace(" ", "_")}.png`}
                  alt={wallet}
                  width={114}
                  height={113}
                ></Image>
              </div>
              <div className="font-subtitle text-xl">{wallet}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
