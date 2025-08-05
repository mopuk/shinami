import Image from "next/image";
import React from "react";

const strings = [
  "Set up your wallet",
  "Create your collection",
  "Add your NFTs",
  "List them for sale",
];
export default function HowItWorks() {
  return (
    <div className="flex flex-col items-center relative mb-[170px]">
      <h2 className="font-subtitle text-subtitle font-medium mb-[75px]">
        How it works
      </h2>
      {/* Блюр Эффект */}
      <div className="absolute w-[100px] h-[100px] blur-[100px] top-[30px] bg-purple"></div>
      {/* Шаги */}
      <ul className="list-none flex gap-[43px] items-center">
        {strings.map((val: string, ind: number) => {
          ind += 1;
          return (
            <React.Fragment key={ind}>
              <li className="flex flex-col items-center gap-[30px]">
                <div className="w-fit h-fit rounded-full backdrop-blur-xs bg-linear-150 from-[#f81dfb10] to-[#f81dfb05] p-[29px]">
                  <Image
                    src={`/images/step${ind}.png`}
                    alt=""
                    width={48}
                    height={48}
                  ></Image>
                </div>
                <div>{strings[ind]}</div>
              </li>
              {ind < strings.length && (
                <li>
                  <Image
                    src="/images/arrow.png"
                    alt="Next step arrow"
                    width={125}
                    height={3}
                  ></Image>
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
}
