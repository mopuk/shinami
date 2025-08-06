import Image from "next/image";
import React from "react";

type Input = {
  title: string;
  name: string;
  type: string;
  placeholder: string;
};

const inputs: Input[] = [
  {
    title: "Full Name",
    name: "fullname",
    type: "text",
    placeholder: "Faizan Sayani",
  },
  {
    title: "User Name",
    name: "username",
    type: "text",
    placeholder: "Faizan123",
  },
  {
    title: "Facebook",
    name: "facebook",
    type: "text",
    placeholder: "www.facebook.com/FaizanSayani",
  },
  {
    title: "Twitter",
    name: "twitter",
    type: "text",
    placeholder: "www.twitter.com/FaizanSayani",
  },
];

export default function UserForm() {
  return (
    <form className="m-[0_165px] flex flex-col mb-[80px]">
      <ul className="list-none flex flex-wrap justify-between gap-x-[170px] gap-y-[65px]">
        {inputs.map((input, ind) => {
          return (
            <li key={ind} className="flex flex-col gap-[40px]">
              <label
                htmlFor={input.name}
                className="text-[#A7A7A7] text-paragraph font-paragraph"
              >
                {input.title}
              </label>
              <input
                type={input.type}
                name={input.name}
                placeholder={input.placeholder}
                className="w-[680px] h-[96px] border-[1px] border-[#A7A7A7] rounded-[15px] outline-0 p-[33px_38px] placeholder:text-[20px]"
              />
            </li>
          );
        })}
      </ul>
      <div className="flex flex-col gap-[40px] m-[65px_0]">
        <label
          htmlFor="bio"
          className="text-[#A7A7A7] text-paragraph font-paragraph"
        >
          Bio
        </label>
        <textarea
          name="bio"
          className="w-full h-[386px] border-[1px] border-[#A7A7A7] rounded-[15px] outline-0 p-[33px_38px] placeholder:text-[20px]"
          placeholder="www.facebook.com/FaizanSayani"
        ></textarea>
      </div>
      <button className="self-end hover:cursor-pointer">
        <Image
          src="/images/update_profile_btn.png"
          alt="Update profile Button"
          width={260}
          height={70}
        ></Image>
      </button>
    </form>
  );
}
